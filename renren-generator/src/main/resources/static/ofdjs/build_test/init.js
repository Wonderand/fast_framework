var myFile;
let remoteFileUrl;
var waterMark;

(function () {

    //listen_userValue(reader,"userValue");

    // listen_readablePage(reader,"readablePage");
    // getsetTitle();//tit取值于地址栏中参数t
    // getBrowser();//判断浏览器类型

    initLogin();

})();
function getsetConfig() {
    configUrl = rootPath+"/config";
    var params = {};
    $.ajax({
        type: "POST",
        url: configUrl,
        data: params,
        async: false,
        success:function (result) {
            setConfig(result);
        }
    });
}
function setReader() {

    var fl = GetQueryString("fl"); //链接里的fl
    var labelPage = GetQueryString("labelPage"); //链接里的labelPage
    reader.labelPage = labelPage;
    if(loggingStatus === true){

        var flag = setReader_login(fl);
        // var labelPage = setReader_login(labelPage);
        if(flag === false){
            login_expired();
        }else {
            //打开阅读器，立即验证
            login_verify(reader.token,reader.userValue,reader.fileValue);
        }

    }else {
        setReader_share(fl,accessLimit);
    }

    //readLimit关闭时，全页可读（为fz开发人员提供）
    if(readLimit === false){
        reader.readablePage = -1;
    }

}
function initLogin() {
    //1. 先获取登录状态
    // var login_str = window.localStorage.getItem(loginkey);
    //
    // loggingStatus = login_str==="true";

    //2. 获取后端配置并赋值
    // getsetConfig();

    //3. 设置reader
    // setReader();

    setInterval(function () {
        login_verify(1,11,1);
        console.log("定时调用接口")
    },5000);

    //4. 设置定时调用接口
    // if(loggingStatus === true){
    //     if( callTime>0 && (verifyUrl!==undefined || verifyUrl!=="") ){
    //
    //         interval = setInterval(function () {
    //             login_verify(reader.token,reader.userValue,reader.fileValue);
    //         },callTime*1000);
    //
    //     }
    // }

}

function login_verify(token,user,file) {

    var params = {"token":token, "userId": user,"pdfId":file};
    $.ajax({
        type: "POST",
        url: "/ofd/config/verify",
        data: JSON.stringify(params),
        async: true,
        contentType: "application/json",
        success:function (result) {
            var status = result.status;
            //var status = 0;
            console.log("status="+status)
            var ok_evt;
            var cancle_evt;
            if(status==1){

                // ok_evt = function(){
                //     tobackpage();
                // };
                alert("授权已过期");
                tobackpage();
                // aTip(title,"授权已过期","确定","",ok_evt,cancle_evt);
                //login_expired(0,status);
            }

        },

        error:function(XMLHttpRequest, textStatus, errorThrown){
            var status = XMLHttpRequest.status;
            // login_expired(1,status);
        }
    });
}
function tobackpage() {
    history.back();
}
