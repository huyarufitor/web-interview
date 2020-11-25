// 检测邮箱格式合法性
function ischeckemail(){
var email = document.getElementById("emailname").value;
  if(email != "") {
     var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
     //调用正则验证test()函数
     isok= reg.test(email);
       if(!isok) {
            alert("邮箱格式不正确，请重新输入！");
            document.getElementById("emailname").focus();
            return false;
        }
    };
}