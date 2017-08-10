/**
 * Created by Administrator on 2017/8/5.
 */
$(function() {
    $(".phone").hover(function () {
        $(".phone_con").show();
    }, function () {
        $(".phone_con").hide();

    });
    $("#account_input").blur(function () {

            var strName = $(this).val();
            if (strName == "") {

                $(".account_check").html("<img src='images/wrong.png'>请输入账号");

                $(".account").css("border-color", "red");
            }else{
                $(".account").css("border-color", "#e3e2e2");
                $(".account_check").html("");
            }
        }
    )
    $("#sign_pwd_input").blur(function () {

            var strName = $(this).val();
            if (strName == "") {

                $(".pwd_sign_check").html("<img src='images/wrong.png'>请输入密码");

                $(".sign_pwd").css("border-color", "red");
            }else{
                $(".sign_pwd").css("border-color", "#e3e2e2");
                $(".pwd_sign_check").html("");
            }
        }
    )

    var flag=false;
    $(".signIn_submit").click(function () {
         if($("#account_input").val()==""){
             $(".account_check").html("<img src='images/wrong.png'>请输入账号");

             $(".account").css("border-color", "red");
         }
         if( $("#sign_pwd_input").val()==""){
             $(".pwd_sign_check").html("<img src='images/wrong.png'>请输入密码");

             $(".sign_pwd").css("border-color", "red");
         }


     /*   $.ajax({
            type: "POST",
            url: "common.php",
            //向接口传参
            data: "username="+name+"&password="+psd+"&act=login",
            success: function(data){
                //var data=JSON.parse(data);
                console.log(data)
                if(data.error==0){
                    location.href="index.html";
                }else if(data.error==1){
                    alert("用户名或密码错误");
                }

            }
        });*/
        //利用cookie登陆验证
            var name=$("#account_input").val();
            var psd=$("#sign_pwd_input").val();
            var str8 = getCookie("sign");//字符串
            if(str8!=undefined){
                var obj8 = JSON.parse(str8);//json格式的字符串转对象
            }
            for(var i in obj8){
                if(name==obj8[i].name && psd==obj8[i].psw){
                   alert("登录成功");
                    window.location="index.html";
                    flag=true;
                }else{
                    flag=false;
                }
            }

            if(flag==false){
                alert("登录错误,用户名或密码错误");
                window.location="register.html";
            }





    }
    )













})