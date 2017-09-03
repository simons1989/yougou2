/**
 * Created by Administrator on 2017/8/8.
 */
$(function () {

    var str = getCookie("cart");//字符串
    if(str!=undefined){
        var obj = JSON.parse(str);//json格式的字符串转对象
    }



    if(!str){
        $("#main_cart").html("购物车暂无商品!") ;
    }else{

        var html = "";
        for(var i in obj){
            html+="<li><input type='checkbox' class='checkbox'> <img src='"+obj[i].imgSrc+"'><a href=''>"+obj[i].title+"</a><div><p><span>颜色：</span>"+obj[i].color+"</p> <p><span>尺码：</span>"+obj[i].size+"</p> </div> <em>"+obj[i].price+"</em> <dd>-</dd> <input type='text' value='"+obj[i].num+"'> <dd>+</dd>  <i>"+subStr(obj[i].price)*obj[i].num+"</i><dt>  <a href='#'>移入收藏夹</a> <a href='#'>删除</a></dt></li>"

        }

        $("#main_cart").html(html);
    }



//去除价格前面的￥
    function subStr(val){
        val=val.substring(1);
        val=parseFloat(val);
        return val;
    }
//全选功能
    $(".cart_top").find("input").click(function () {
        if($(this).is(':checked')){
            $(".checkbox").each(function () {
                if(!$(this).is(':checked')){
                    $(this).click();
                }
                if(!$(".cart_bottom").find("input").is(':checked')){
                    $(".cart_bottom").find("input").click();
                }

            })
        }else{
            $(".checkbox").attr("checked",false);
            $(".cart_bottom").find("input").attr("checked",false);
            $(".total1").find("i").html(0);
        }


    })
    $(".cart_bottom").find("input").click(function () {
        if($(this).is(':checked')){
            $(".checkbox").each(function () {
                if(!$(this).is(':checked')){
                    $(this).click();
                }
                if(!$(".cart_top").find("input").is(':checked')){
                    $(".cart_top").find("input").click();
                }

            })
        }else{
            $(".checkbox").attr("checked",false);
            $(".cart_top").find("input").attr("checked",false);
            $(".total1").find("i").html(0);
        }


    })
//计算总价功能
    function total() {
        var total=0;
        $(".checkbox").each(function () {
            if($(this).is(':checked')){

                total=total+Number($(this).siblings("i").html());
            }
        })

        $(".total1").find("i").html(total);
    }

    $(".checkbox").click(function () {
       total();
    })

//一键清空购物车
    $(".clear").click(function () {
        removeCookie("cart");
        $("#main_cart").html("你的购物车没有商品");
    })

//逐个删除

    $("#main_cart").find("li").each(function () {
        $(this).find("dt").find("a").eq(1).click(function () {
            //删除dom
            var index=$(this).parent().parent().index();
            $(this).parent().parent().remove();
            console.log(index);
            //删除cookie
            var str1 = getCookie("cart");//字符串
            var obj1 = JSON.parse(str);//json格式的字符串转对象
            obj1.splice(index,1);
            if(obj1.length==0){
                removeCookie("cart");
                $("#main_cart").html("你的购物车没有商品");
            }else{
                var str2=JSON.stringify(obj1);
                setCookie("cart",str2,7);
            }

        })

    })
//选中删除

    $(".delete").click(function () {
            var arr=[];
        var str1 = getCookie("cart");//字符串
        var obj1 = JSON.parse(str);//json格式的字符串转对象
        $("#main_cart").find("li").each(function () {
            if($(this).find("input").eq(0).is(':checked')){

                var index=$(this).index();
               // var str1 = getCookie("cart");//字符串
               // var obj1 = JSON.parse(str);//json格式的字符串转对象

               // obj1.splice(index,1);
               //  var str2=JSON.stringify(obj1);
               // setCookie("cart",str2,7);
                obj1[index]=null;
            }
        })
        //console.log(obj);
            var newObj=[];
        for(var i in obj1){
            if(obj1[i]!=null){
                newObj.push(obj1[i]);
            }
        }

        if(newObj.length==0){
            removeCookie("cart");
            $("#main_cart").html("你的购物车没有商品");
        }else{
            var str2=JSON.stringify(newObj);
            setCookie("cart",str2,7);
        }








       $("#main_cart").find("li").each(function () {
            if($(this).find("input").eq(0).is(':checked')){
                //删除dom
                var index=$(this).index();

                $(this).remove();
            }
        })

    })


    //增减数量
    $("#main_cart").find("li").each(function () {
        $(this).find("dd").eq(0).click(function () {

            var index=$(this).parent().index();
            var x=$(this).siblings("input").eq(1).val();
           if(x<=1){
               var r=confirm("确定删除此商品吗");
               if(r==true){
                   //删除dom
                   var index=$(this).parent().index();
                   $(this).parent().remove();
                   //删除cookie
                   var str2 = getCookie("cart");//字符串
                   var obj2 = JSON.parse(str);//json格式的字符串转对象
                   obj2.splice(index,1);
                   if(obj2.length==0){
                       removeCookie("cart");
                       $("#main_cart").html("你的购物车没有商品");
                   }else{
                       var str2=JSON.stringify(obj2);
                       setCookie("cart",str2,7);
                   }
               }

           }else{
               x--;
               $(this).siblings("input").eq(1).val(x);
               $(this).siblings("i").html(x*subStr($(this).siblings("em").html()));
                total();
               var str2 = getCookie("cart");//字符串
               var obj2 = JSON.parse(str);//json格式的字符串转对象
               obj2[index].num=x;
               var str3=JSON.stringify(obj2);
               setCookie("cart",str3,7);
           }
        })
        $(this).find("dd").eq(1).click(function () {

            var index=$(this).parent().index();
            var x=$(this).siblings("input").eq(1).val();

                x++;
                $(this).siblings("input").eq(1).val(x);
            $(this).siblings("i").html(x*subStr($(this).siblings("em").html()));
            total();

            var str2 = getCookie("cart");//字符串
            var obj2 = JSON.parse(str2);//json格式的字符串转对象
           obj2[index].num=x;
            var str3=JSON.stringify(obj2);
            setCookie("cart",str3,7);
        })



    })













})

