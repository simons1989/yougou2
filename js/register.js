$(function() {
    $(".phone").hover(function () {
        $(".phone_con").show();
    }, function () {
        $(".phone_con").hide();

    });
    $(".choose").click(function () {
        if ($(".email").css("display") == "none") {
            $(".choose").css({
                "border-style": "dotted",
                "border-width": "1px",
                "border-color": "#e3e2e2",
                "background": "#fff"
            })

            $(".email").css("display", "block");
        } else {
            $(".email").css("display", "none");
            $(".choose").css("border", "none");
        }
    })

        //手机号码验证

        $(".phone_number").change(function () {
            var name = /^0{0,1}(13[0-9]|15[7-9]|153|156|177|176|18[7-9])[0-9]{8}$/;
            var strName = $(this).val();
            if (!name.test(strName) && strName != "") {

                $(".number_check").html("<img src='images/wrong.png'>格式错误");

                $(".number").css("border-color", "red");
                $(".gou").hide();
            } else if (strName != "" && name.test(strName)) {
                $(".number").css("border-color", "#e3e2e2");
                $(".gou").show();
                $(".number_check").html("");
            }
        })
        $(".phone_number").blur(function () {

                var strName = $(this).val();
                if (strName == "") {
                    $(".gou").hide();
                    $(".number_check").html("<img src='images/wrong.png'>请输入手机号码");

                    $(".number").css("border-color", "red");
                }
            }
        )
        //验证码验证
        var code = yzm();
        $(".code_show").html(code);
        $(".code_show").click(function () {

            code = yzm();
            $(".code_show").html(code);
        })

        $(".code_input").change(function () {
                var strName = $(this).val();


                var a = strName.toUpperCase();
                var b = code.toUpperCase();
                if (strName != "" && a != b) {
                    $(".code_check").html("<img src='images/wrong.png'>验证码错误");
                }else if(a==b){
                    $(".code_l").css("border-color", "#e3e2e2");
                    $(".code_check").html("");
                }
            }
        )
        $(".code_input").blur(function () {

                var strName = $(this).val();
                if (strName == "") {

                    $(".code_check").html("<img src='images/wrong.png'>请输入验证码");

                    $(".code_l").css("border-color", "red");
                }
            }
        )
//手机验证码验证
        $(".phone_code_input").blur(function () {

                var strName = $(this).val();
                if (strName == "") {

                    $(".phone_code_check").html("<img src='images/wrong.png'>请输入短信验证码");

                    $(".phone_code_l").css("border-color", "red");
                }else if(strName != "" && /^[\d]{6,6}$/.test(strName)){
                    $(".phone_code_check").html("");

                    $(".phone_code_l").css("border-color", "#e3e2e2");
                }else if(strName != "" && !/^[\d]{6,6}$/.test(strName)){

                    $(".phone_code_check").html("<img src='images/wrong.png'>格式错误");

                    $(".phone_code_l").css("border-color", "red");
                }
            }
        )

//密码验证
        $("#pwd_input").change(function () {
            var name = /^[\w|\W]{6,25}$/;
            var strName = $(this).val();
            if (!name.test(strName) && strName != "") {

                $(".pwd_check").html("<img src='images/wrong.png'>密码应6-25位之间");

                $(".pwd").css("border-color", "red");
                $(".pwd_gou").hide();
            } else if (strName != "") {
                $(".pwd").css("border-color", "#e3e2e2");
                $(".pwd_gou").show();
                $(".pwd_check").html("<em><span>高</span><span>中</span><span>低</span></em>");
                if (/^\d{6,20}$/.test(strName) && strName != "") {
                    $(".pwd_check").find("span").eq(2).addClass("week").siblings().removeClass();
                } else if (/^[a-zA-Z+0-9_]{6,20}$/.test(strName) && strName != "") {
                    $(".pwd_check").find("span").eq(1).addClass("middle").siblings().removeClass();
                } else if (/^[a-zA-Z+0-9_+\W]{6,20}$/.test(strName) && strName != "") {
                    $(".pwd_check").find("span").eq(0).addClass("strong").siblings().removeClass();
                }
            }
        })
        $("#pwd_input").blur(function () {

                var strName = $(this).val();
                if (strName == "") {
                    $(".pwd_gou").hide();
                    $(".pwd_check").html("<img src='images/wrong.png'>请输入密码");

                    $(".pwd").css("border-color", "red");
                }
            }
        )
//确认密码
        $("#con_pwd_input").blur(function () {

                var strName = $(this).val();
                if (strName == "") {
                    $(".con_pwd_gou").hide();
                    $(".con_pwd_check").html("<img src='images/wrong.png'>请输入确认密码");

                    $(".con_pwd").css("border-color", "red");
                }
            }
        )
        $("#con_pwd_input").change(function () {
                var strName = $(this).val();
                var origin = $("#pwd_input").val();
                if (strName != origin && strName != "") {
                    $(".con_pwd_check").html("<img src='images/wrong.png'>两次密码输入不一致");

                    $(".con_pwd").css("border-color", "red");
                    $(".con_pwd_gou").hide();
                } else if (strName == origin) {
                    $(".con_pwd").css("border-color", "#e3e2e2");
                    $(".con_pwd_gou").show();
                    $(".con_pwd_check").html("");
                }
            }
        )



    //提交
    var pass=[];
        var flag=true;
    $("#submit_btn").click(function () {

        if ($('.read').is(':checked')) {
            $(".read_check").hide();

        } else {
            $(".read_check").show().html("<img src='images/wrong.png'>请阅读交易条款");
        }
        var strNumber = $(".phone_number").val();
        var strCode = $(".code_input").val();
        var strPhoneCode = $(".phone_code_input").val();
        var strPwd = $("#pwd_input").val();
        var strPwdCon = $("#con_pwd_input").val();
        if (strNumber == "") {
            $(".gou").hide();
            $(".number_check").html("<img src='images/wrong.png'>请输入手机号码");
            $(".number").css("border-color", "red");
        }
        if (strCode == "") {
            $(".code_check").html("<img src='images/wrong.png'>请输入验证码");
            $(".code_l").css("border-color", "red");
        }
        if (strPhoneCode == "") {
            $(".phone_code_check").html("<img src='images/wrong.png'>请输入短信验证码");
            $(".phone_code_l").css("border-color", "red");
        }
        if (strPwd == "") {
            $(".pwd_gou").hide();
            $(".pwd_check").html("<img src='images/wrong.png'>请输入密码");
            $(".pwd").css("border-color", "red");
        }
        if (strPwdCon == "") {
            $(".con_pwd_gou").hide();
            $(".con_pwd_check").html("<img src='images/wrong.png'>请输入确认密码");
            $(".con_pwd").css("border-color", "red");
        }
        if($('.read').is(':checked') && /^0{0,1}(13[0-9]|15[7-9]|153|156|177|176|18[7-9])[0-9]{8}$/.test(strNumber) &&
            strCode.toUpperCase() == code.toUpperCase() &&
            /^[\d]{6,6}$/.test(strPhoneCode) &&
            /^[\w|\W]{6,25}$/.test(strPwd) &&
            strPwdCon == strPwd){

         /*   //ajax请求后台数据
            var name=$(".phone_number").val();
            var psd=$("#pwd_input").val();
            $.ajax({
                type: "POST",
                url: "common.php",
                data: "username="+name+"&password="+psd+"&act=reg",
                success: function(data){
                    var data=JSON.parse(data);
                    console.log(data);
                    //判断接口数据
                    if(data.error==0){
                        alert("注册成功！");
                        window.location="login.html";

                    }else if(data.error=="1"){
                        alert("用户名已存在");
                        //console.log(num);
                    }
                }
            });*/
           //cookie注册
            var name=$(".phone_number").val();
            var psd=$("#pwd_input").val();
            var info={"name":name,"psw":psd}

            var str = getCookie("sign");//字符串
            if(str!=undefined){
                var obj8 = JSON.parse(str);//json格式的字符串转对象
            }
            for(var i in obj8){
                if(name==obj8[i].name){
                    alert("用户已存在");
                   flag=false;
                }else{
                    flag=true;
                }
            }
            if(flag==true){
                pass.push(info);
                var strCookie=JSON.stringify(pass);
                setCookie("sign",strCookie,7);
                alert("注册成功");
                window.location="signIn.html";
            }

        }

    })
})
//生成4位验证码
function yzm(){
    var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
    var str = '';
    for(var i = 0 ; i < 4 ; i ++ )
        str += ''+arr[Math.floor(Math.random() * arr.length)];
    return str;
};