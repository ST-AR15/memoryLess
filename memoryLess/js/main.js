// 这个JS文件里主要记录UI的交互等，与游戏内容无关

// 设置cookie
function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

// 获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

// 载入页面时对主游戏页面长宽的定义
window.onload = function() {
    // 获取屏幕高度和宽度
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    // 设置主游戏页面的高度宽度都等于屏幕高宽
    getDom("mainGame").style.width = width + "px";
    getDom("mainGame").style.height = height + "px";
    // 如果宽度大于1024px，则启动PC模式，否则启动移动端模式。这个宽度是从微信API抄的
    if(width>1024) {
        PCLoad();
    } else {
        PhoneLoad();
    }
}

// PC模式
function PCLoad() {
    // 载入pc.css样式表
    getDom("head").innerHTML += "<link rel=\"stylesheet\" href=\"css/pc.css\">";
}

// 移动端模式
function PhoneLoad() {
    // 载入mobile.css样式表
    getDom("head").innerHTML += "<link rel=\"stylesheet\" href=\"css/mobile.css\">";
}

// 获取元素
function getDom(domID) {
    return document.getElementById(domID);
}

// 弹框提示
function message(message,title) {
    // 设置弹框标题
    function setMessageTitle(messageTitle) {
        getDom("tipsTitle").innerText = messageTitle;
    }
    // 设置弹框内容
    function setMessageContainer(messageContainer) {
        getDom("tipsContainer").innerText = messageContainer;
    }
}

// 继续游戏
function continueGame() {
    message("很抱歉，暂时不支持存档功能！");
}