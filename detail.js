/**
 * Created by Administrator on 2017/8/7.
 */

$(function () {
    $.ajax({
        type: "GET",
        url: "data/productList.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            var str = location.search;
            var proId = str.split("=")[1];

            for(let i in obj){
                if(obj[i].id == proId){
                    //文字信息
                    $(".goods_middle").find("p").eq(0).html(obj[i].description);
                    $(".goods_middle").find("p").eq(1).find("span").html(obj[i].brand);
                    $(".goods_middle").find("p").eq(2).find("span").html(obj[i].price);
                    $(".goods_middle").find("p").eq(2).find("i").html(obj[i].oPrice);







                    //图片放大镜处理
                    $(".content_img").attr("src",obj[i].imgSrcdetail1);
                    $(".zoom_show_img").attr("src",obj[i].imgSrcdetail1);
                    $(".pic_slide").find("img").eq(0).attr("src",obj[i].imgSrcdetail1);
                    $(".pic_slide").find("img").eq(1).attr("src",obj[i].imgSrcdetail2);
                    $(".pic_slide").find("img").eq(2).attr("src",obj[i].imgSrcdetail3);
                    $(".pic_slide").find("img").eq(3).attr("src",obj[i].imgSrcdetail4);
                    $(".pic_slide").find("img").eq(4).attr("src",obj[i].imgSrcdetail5);
                    $(".pic_slide").find("img").eq(5).attr("src",obj[i].imgSrcdetail6);
                    $(".pic_slide").find("img").eq(6).attr("src",obj[i].imgSrcdetail7);

                    $(".pic_slide").find("img").hover(function () {
                        $(this).css("border-color","red").siblings().css("border-color","#ddd");
                        var n=$(this).index();

                        switch (n){
                            case 0:
                                $(".content_img").attr("src",obj[i].imgSrcdetail1);
                                $(".zoom_show_img").attr("src",obj[i].imgSrcdetail1);

                                break;
                            case 1:
                                $(".content_img").attr("src",obj[i].imgSrcdetail2);
                                $(".zoom_show_img").attr("src",obj[i].imgSrcdetail2);
                                break;
                            case 2:
                                $(".content_img").attr("src",obj[i].imgSrcdetail3);
                                $(".zoom_show_img").attr("src",obj[i].imgSrcdetail3);
                                break;
                            case 3:
                                $(".content_img").attr("src",obj[i].imgSrcdetail4);
                                $(".zoom_show_img").attr("src",obj[i].imgSrcdetail4);
                                break;
                            case 4:
                                $(".content_img").attr("src",obj[i].imgSrcdetail5);
                                $(".zoom_show_img").attr("src",obj[i].imgSrcdetail5);
                                break;
                            case 5:
                                $(".content_img").attr("src",obj[i].imgSrcdetail6);
                                $(".zoom_show_img").attr("src",obj[i].imgSrcdetail6);
                                break;
                            case 6:
                                $(".content_img").attr("src",obj[i].imgSrcdetail7);
                                $(".zoom_show_img").attr("src",obj[i].imgSrcdetail7);
                                break;
                        }
                    })



                }




            }

            $(".content").mousemove(function (e) {

                var evt = e || event;
                $(".zoom").show();
                $(".zoom_show").show();
                var x = evt.pageX - $(this).offset().left - $(".zoom").innerWidth()/2;
                var y = evt.pageY - $(this).offset().top -  $(".zoom").innerHeight()/2;

                if(x<=0){
                    x = 0;
                }
                if(y<=0){
                    y = 0;
                }

                if(x>=$(this).innerWidth()-$(".zoom").innerWidth()){
                    x = $(this).innerWidth()-$(".zoom").innerWidth();
                }
                if(y>=$(this).innerHeight()-$(".zoom").innerHeight()){
                    y =$(this).innerHeight()-$(".zoom").innerHeight();
                }

                $(".zoom").css("left",x+"px");
                $(".zoom").css("top",y+"px");

                var  img_x = -$(".zoom").position().left*2.12 + "px";
                var img_y = -$(".zoom").position().top* 2.12 + "px";
                $(".zoom_show_img").css("left",img_x);
                $(".zoom_show_img").css("top",img_y);

            })

            $(".content").mouseout(function () {
                $(".zoom").hide();
                $(".zoom_show").hide();
            })

            $(".color1").find("img").click(function () {
                        $(this).addClass("cur").siblings().removeClass("cur");
                        var m=$(this).index();
                        console.log(m)
                        switch(m){
                            case 1:
                                $(".numb").find("em").html("深灰");
                                break;
                            case 2:
                                $(".numb").find("em").html("深蓝");
                                break;
                            case 3:
                                $(".numb").find("em").html("浅蓝");
                                break;
                            case 4:
                                $(".numb").find("em").html("深红");
                                break;
                        }
                })
            var s=0;
            $(".size1").find("span").click(function () {
                $(this).css({"color":"red","border-color":"red"}).siblings().css({"color":"#000","border-color":"#ddd"});
                 s=$(this).index();
            })

            var x=1;
            $(".num_con").find("i").eq(0).click(function () {
                x--;
                if(x<0){
                    $(".num_con").find("input").val(0);
                }else{
                    $(".num_con").find("input").val(x);
                }
            })
            $(".num_con").find("i").eq(1).click(function () {
                x++;

                    $(".num_con").find("input").val(x);

            })
         //生成购物车cookie

            var str1  =  getCookie("cart");
            if(str1 == undefined){
                var nm=0;
            }else{
                var arr1=JSON.parse(str1);

                for(var i in arr1){
                    if(arr1[i].id==proId){
                        var nm=Number(arr1[i].num);

                    }else{
                        var nm=0;
                    }
                }
            }

           $(".btn").find("input").eq(1).click(function () {

               //设定nm值




               var color=$(".numb").find("em").html();
               var size= $(".size1").find("span").eq(s).html();
               var y=$(".num_con").find("input").val();
                 nm=nm+Number(y);

               var imgSrc=$(".pic_slide").find("img").eq(0).attr("src");
               var title=$(".title").html();
               var price=$(".price").find("span").html();
               var arr=[];
               var cookie_obj={"id":proId,"color":color,"size":size,"num":nm,"imgSrc":imgSrc,"title":title,"price":price};

               var str  =  getCookie("cart");

               if(str == undefined){
                   arr.push(cookie_obj);

               }else{
                   arr=JSON.parse(str);
                   for(var i in arr){
                       if(arr[i].id==proId){
                          arr.splice(i,1);
                       }
                   }
                   arr.push(cookie_obj);
               }
               var strCookie=JSON.stringify(arr);
               setCookie("cart",strCookie,7);

               //动态改变总数

              sum();


           })

            //计算购物车商品总数
            function sum() {
                var sum=0;
                var str_total  =  getCookie("cart");
                if(str_total==undefined){
                    sum=0;
                }else{
                    var arr_total=JSON.parse(str_total);

                    for(var i in arr_total){
                        sum=sum+Number(arr_total[i].num);
                    }
                    $("#pordcount").html(sum);
                }
            }

            sum();














        }, error: function () {
            alert("加载失败");
        }
    });

//秒杀倒计时
    function countDown(time,id){
        var day_elem = $(id).find('.day');
        var hour_elem = $(id).find('.hour');
        var minute_elem = $(id).find('.minute');
        var second_elem = $(id).find('.second');

        //if(typeof end_time == "string")
        var end_time = new Date(time).getTime(),//月份是实际月份-1
            sys_second = (end_time-new Date().getTime())/1000;
        var timer = setInterval(function(){
            if (sys_second > 1) {
                sys_second -= 1;
                var day = Math.floor((sys_second / 3600) / 24);
                var hour = Math.floor((sys_second / 3600) % 24);
                var minute = Math.floor((sys_second / 60) % 60);
                var second = Math.floor(sys_second % 60);
                day_elem && $(day_elem).text(day);//计算天
                $(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
                $(minute_elem).text(minute<10?"0"+minute:minute);//计算分钟
                $(second_elem).text(second<10?"0"+second:second);//计算秒杀
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    countDown("2017/8/15 11:11:59","#colockbox1");








})
