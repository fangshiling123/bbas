function getUserinfo() {
    $.ajax({
     type:'GET', 
     url: "/my/userinfo",
     success: (res) => {
        console.log(res);
        if (res.status !== 0) return layer.msg("获取用户信息失败！");
        layer.msg("获取用户信息成功！");
    },
});
}

// 渲染用户信息

const renderAvatar=()=>{
console.log(user);
let uname=user.nickname||user.username;
$('#welcome').html(`欢迎${uname}`);
if(user.user_pic!==null){
    $('layui-nav-img').attr('src',user,user.user_pic)
    $('text-avatar').hide();
}else{
    $('layui-nav-img').hide()
    ('text-avatar').html(uname[0].toUpperCase());
}
}

$('#btn-aab').click(()=>{
    layui.layer.confirm(
        "确定退出登录？",
        { icon: 3, title: "" },
        function (index) {
            localStorage.removeItem('token');
            location.href="/login.html";
            });
});
getUserinfo();