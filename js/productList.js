/**
 * Created by Administrator on 2017/8/6.
 */
$(function () {
    $.ajax({
        type: "GET",
        url: "data/productList.json",
        dataType: "json",
        success: function (Json) {

           var obj = eval(Json);
            var len=obj.length;
            var numPerPage = 50;
            var pages = Math.ceil(len/numPerPage);
            $(".total").find("i").append(pages);
            $(".fy").find("i").eq(1).append(pages);
            $(".find_num").find("i").append(len);
            var html = "";
            for(var i = 0; i < pages; i++){
                html += "<a href='javascript:;'>"+(i+1)+"</a>";
            }
            $("#nums").append(html);
            var pages = Math.ceil(len/numPerPage);
            for(var j = 0; j < Math.min(len,numPerPage); j++){

                $(".pro_list").append("<li><a href='"+obj[j].link+"'><img src='"+obj[j].imgSrc+"'><div>"+obj[j].limit+"</div><p>"+obj[j].description+"</p></a><span>"+obj[j].price+"<i>"+obj[j].oPrice+"</i></span></li>")
            }

            $("#nums").find("a").eq(0).addClass("cur");
              var n=0;
              var m=0;
            $("#nums").find("a").click(function () {
                $(this).addClass("cur").siblings().removeClass("cur");

                  var k=$(this).index();
                  n=k;
                  m=k;
                $(".fy").find("i").eq(0).html(k+1);
                console.log(k);
                $(".pro_list").html("");
                for(var j = k*numPerPage; j < Math.min(len,(k+1)*numPerPage); j++){
                    $(".pro_list").append("<li><a href='"+obj[j].link+"'><img src='"+obj[j].imgSrc+"'><div>"+obj[j].limit+"</div><p>"+obj[j].description+"</p></a><span>"+obj[j].price+"<i>"+obj[j].oPrice+"</i></span></li>")
                }
            })

           $(".next").click(function () {

               n++;
               if(n>pages-1){
                   n=pages-1;
               }else{
                   $("#nums").find("a").eq(n).addClass("cur").siblings().removeClass("cur");

                   $(".fy").find("i").eq(0).html(n+1);

                   $(".pro_list").html("");
                   for(var j = n*numPerPage; j < Math.min(len,(n+1)*numPerPage); j++){
                       $(".pro_list").append("<li><a href='"+obj[j].link+"'><img src='"+obj[j].imgSrc+"'><div>"+obj[j].limit+"</div><p>"+obj[j].description+"</p></a><span>"+obj[j].price+"<i>"+obj[j].oPrice+"</i></span></li>")
                   }
               }


            })
            $(".prev").click(function () {

                n--;
                if(n<0){
                    n=0;
                }else{
                    $("#nums").find("a").eq(n).addClass("cur").siblings().removeClass("cur");

                    $(".fy").find("i").eq(0).html(n+1);

                    $(".pro_list").html("");
                    for(var j = n*numPerPage; j < Math.min(len,(n+1)*numPerPage); j++){
                        $(".pro_list").append("<li><a href='"+obj[j].link+"'><img src='"+obj[j].imgSrc+"'><div>"+obj[j].limit+"</div><p>"+obj[j].description+"</p></a><span>"+obj[j].price+"<i>"+obj[j].oPrice+"</i></span></li>")
                    }
                }


            })
            $(".page").find("a").click(function () {

                m++;
                if(m>pages-1){
                    m=pages-1;
                }else{
                    $("#nums").find("a").eq(m).addClass("cur").siblings().removeClass("cur");

                    $(".fy").find("i").eq(0).html(m+1);

                    $(".pro_list").html("");
                    for(var j = m*numPerPage; j < Math.min(len,(m+1)*numPerPage); j++){
                        $(".pro_list").append("<li><a href='"+obj[j].link+"'><img src='"+obj[j].imgSrc+"'><div>"+obj[j].limit+"</div><p>"+obj[j].description+"</p></a><span>"+obj[j].price+"<i>"+obj[j].oPrice+"</i></span></li>")
                    }
                }


            })
            $(".page").find("span").click(function () {

                m--;
                if(m<0){
                    m=0;
                }else{
                    $("#nums").find("a").eq(m).addClass("cur").siblings().removeClass("cur");

                    $(".fy").find("i").eq(0).html(m+1);

                    $(".pro_list").html("");
                    for(var j = m*numPerPage; j < Math.min(len,(m+1)*numPerPage); j++){
                        $(".pro_list").append("<li><a href='"+obj[j].link+"'><img src='"+obj[j].imgSrc+"'><div>"+obj[j].limit+"</div><p>"+obj[j].description+"</p></a><span>"+obj[j].price+"<i>"+obj[j].oPrice+"</i></span></li>")
                    }
                }


            })




            //计算购物车商品总数
            var sum=0;
            var str_total  =  getCookie("cart");
            if(str_total==undefined){
                sum=0;
            }else{
                var arr_total=JSON.parse(str_total);

                for(var i in arr_total){
                    sum=sum+arr_total[i].num;
                }
                $("#pordcount").html(sum);
            }
        }, error: function () {
            alert("加载失败");
        }
    });

















































})




