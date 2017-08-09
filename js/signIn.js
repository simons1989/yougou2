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
    $(".signIn_submit").click(function () {
         if($("#account_input").val()==""){
             $(".account_check").html("<img src='images/wrong.png'>请输入账号");

             $(".account").css("border-color", "red");
         }
         if( $("#sign_pwd_input").val()==""){
             $(".pwd_sign_check").html("<img src='images/wrong.png'>请输入密码");

             $(".sign_pwd").css("border-color", "red");
         }
         //补写账户密码匹配后登陆成功的部分
        var name=$("#account_input").val();
        var psd=$("#sign_pwd_input").val();
        $.ajax({
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
        });




    }
    )













})