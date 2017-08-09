$(function(){
	$(".phone").hover(function(){
		$(".phone_con").show();
     },function(){
		$(".phone_con").hide();
	});
    //轮播图

    var i = 0;
    $("#sliderList li").eq(0).clone(true).insertAfter( $("#sliderList li").eq(6));
    $("#sliderList").css("width","7920px");
    function move(){
        $("#sliderList").stop().animate({"left":-i*990+"px"},1000);
        if(i==7){
            $("#sliderNav li").eq(0).addClass("te").siblings().removeClass("te");
		}else{
            $("#sliderNav li").eq(i).addClass("te").siblings().removeClass("te");
		}


			
    }
    move();
	var start=function () {
        i++;
        if(i==$("#sliderList li").length){

            $("#sliderList").css("left",0);
            i = 1;

        }
        move();
    }
    var timer=setInterval(function start(){
        i++;
        if(i==$("#sliderList li").length){

            $("#sliderList").css("left",0);
            i = 1;

        }
        move();
    },2000);

    $("#sliderNav li").hover(function () {
    	clearInterval(timer);

         i= $(this).index();

        $("#sliderList").css("left",-i*990+"px");
        $("#sliderNav li").eq(i).addClass("te").siblings().removeClass("te");

    },function () {
		timer=setInterval(start,2000);
    })

//品牌展示列表ajax,json处理
    $.ajax({
        type: "GET",
        url: "data/brandicon.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $("#brand_icon").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"' alt=''></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//左右箭头控制品牌栏移动
    var n=0;
$(".b_b_l").click(function () {
    n--;

    if(n<1){

        n=0;
    }
    $("#brand_icon").animate({"left":-n*1100+"px"});
})
    $(".b_b_r").click(function () {
        n++;

        if(n==3){
            n=0;
        }
        $("#brand_icon").animate({"left":-n*1100+"px"});
    })

//女鞋馆品牌列表json数据处理
    $.ajax({
        type: "GET",
        url: "data/womanshoebrand.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $(".woman_brand").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//女鞋馆商品展示列表
    $.ajax({
        type: "GET",
        url: "data/womanshow.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $(".woman_list").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });

//男鞋品牌json
    $.ajax({
        type: "GET",
        url: "data/manshoebrand.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $(".man_brand").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//男鞋展示json
    $.ajax({
        type: "GET",
        url: "data/manshow.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $(".man_list").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//运动鞋品牌json
    $.ajax({
        type: "GET",
        url: "data/sportshoebrand.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $(".sport_brand").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//运动鞋展示json
    $.ajax({
        type: "GET",
        url: "data/sportshow.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $(".sport_list").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//户外品牌json
    $.ajax({
        type: "GET",
        url: "data/outbrand.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $(".out_brand").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//户外展示json
    $.ajax({
        type: "GET",
        url: "data/outshow.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $(".out_list").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//国际品牌展示
    $.ajax({
        type: "GET",
        url: "data/globalbrand.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $(".global_brand").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//国际鞋服json
    $.ajax({
        type: "GET",
        url: "data/globalshow.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $(".global_list").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });

//衣服品牌
    $.ajax({
        type: "GET",
        url: "data/clothbrand.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $(".cloth_brand").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });


//衣服展示
$.ajax({
    type: "GET",
    url: "data/clothshow.json",
    dataType: "json",
    success: function (Json) {

        var obj = eval(Json);

        console.log(obj[0].imgSrc);
        for(var i in obj){
            $(".cloth_list").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
        }


    }, error: function () {
        alert("加载失败");
    }
});
//小孩品牌
    $.ajax({
        type: "GET",
        url: "data/childrenbrand.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $(".children_brand").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//小孩产品展示
    $.ajax({
        type: "GET",
        url: "data/childrenshow.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);
            for(var i in obj){
                $(".children_list").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });

//促销区效果
    $("#on_sales .sales_list").find("li").hover(function () {
        $(this).addClass("te").siblings().removeClass("te");
       var i=$(this).index();
        $("#on_sales .product_list").eq(i).css("display","block").siblings().css("display","none");
    });

    //outjson
    $.ajax({
        type: "GET",
        url: "data/outlist.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);

            for(var i in obj){
                $("#on_sales .out").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'><div>"+obj[i].limit+"</div><p>"+obj[i].description+"</p></a><span>"+obj[i].price+"<i>"+obj[i].oPrice+"</i></span></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
    //sportjson
    $.ajax({
        type: "GET",
        url: "data/sportlist.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);

            for(var i in obj){
                $("#on_sales .sport").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'><div>"+obj[i].limit+"</div><p>"+obj[i].description+"</p></a><span>"+obj[i].price+"<i>"+obj[i].oPrice+"</i></span></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//shoejson
    $.ajax({
        type: "GET",
        url: "data/shoelist.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);

            for(var i in obj){
                $("#on_sales .shoe").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'><div>"+obj[i].limit+"</div><p>"+obj[i].description+"</p></a><span>"+obj[i].price+"<i>"+obj[i].oPrice+"</i></span></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
    //manjson
    $.ajax({
        type: "GET",
        url: "data/man.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);

            for(var i in obj){
                $("#on_sales .man").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'><div>"+obj[i].limit+"</div><p>"+obj[i].description+"</p></a><span>"+obj[i].price+"<i>"+obj[i].oPrice+"</i></span></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//womanjson
    $.ajax({
        type: "GET",
        url: "data/woman.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);

            for(var i in obj){
                $("#on_sales .woman").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'><div>"+obj[i].limit+"</div><p>"+obj[i].description+"</p></a><span>"+obj[i].price+"<i>"+obj[i].oPrice+"</i></span></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//childrenjson
    $.ajax({
        type: "GET",
        url: "data/children.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);

            for(var i in obj){
                $("#on_sales .children").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'><div>"+obj[i].limit+"</div><p>"+obj[i].description+"</p></a><span>"+obj[i].price+"<i>"+obj[i].oPrice+"</i></span></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//boxjson
    $.ajax({
        type: "GET",
        url: "data/box.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);

            for(var i in obj){
                $("#on_sales .box").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'><div>"+obj[i].limit+"</div><p>"+obj[i].description+"</p></a><span>"+obj[i].price+"<i>"+obj[i].oPrice+"</i></span></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
    //guidejson
    $.ajax({
        type: "GET",
        url: "data/guidebrand.json",
        dataType: "json",
        success: function (Json) {

            var obj = eval(Json);

            console.log(obj[0].imgSrc);

            for(var i in obj){
                $(".move1").append("<li><a href='"+obj[i].link+"'><img src='"+obj[i].imgSrc+"'><p>"+obj[i].brand+"</p></a></li>")
            }


        }, error: function () {
            alert("加载失败");
        }
    });
//guide左右按键
    var x=0;
    $("#guide .ra").click(function () {
        x++
        if(x>1){
            x=1;
        }
        $(".move1").animate({"top":-x*244+"px"})
    })
   $("#guide .la").click(function () {
       x--
       if(x<0){
           x=0
       }
       $(".move1").animate({"top":x*244+"px"})
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

//侧边导航栏功能

    $("#aside1").find("li").click(function () {
        var n=$(this).index();
         console.log(n);
        switch (n){
            case 0:
                $("body,html").stop().animate({"scrollTop":"1350px"},500);
                break;
            case 1:
                $("body,html").stop().animate({"scrollTop":"1874px"},500);
                break;
            case 2:
                $("body,html").stop().animate({"scrollTop":"2439px"},500);
                break;
            case 3:
                $("body,html").stop().animate({"scrollTop":"2976px"},500);
                break;
            case 4:
                $("body,html").stop().animate({"scrollTop":"4062px"},500);
                break;
            case 5:
                $("body,html").stop().animate({"scrollTop":"4595px"},500);
                break;
        }
    })
    $("#aside1").find("a").eq(2).click(function () {
        $("body,html").stop().animate({"scrollTop":"0px"},500);
    })

//导航隐藏区效果
$(".title9").hover(function () {
    $(this).stop().animate({"left":"20px"});
},function () {
    $(this).stop().animate({"left":"0px"});
})

    //导航列表json
    $(".goodsList ul").find("li").mouseenter(function () {
        $("#hide").show();
        var index = $(this).index();
        $.get("data/nav_data.json",function(data){
           var obj=data[index];

                var html = template("navCon",data[index]);
                $("#hide").html(html);
                console.log(html)
        })

    })


    $(".goodsList").on("mouseleave",function(){
        $("#hide").hide();
    })

})
