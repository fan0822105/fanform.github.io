var xmlHttp = new XMLHttpRequest(); 
function send(){
    var theUrl = "http://203.64.84.214:8003/httptest/Post.aspx?id=111";
    xmlHttp.open("POST", theUrl, true); // false for synchronous request
    xmlHttp.send(newxml);
}
xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4) {
      //  alert(xmlHttp.responseText)
        }
}

var sourceSTR = "http://203.64.84.214:8003/httptest/Post.aspx?id=111";
var ret;
function HTTPGetData(urlStr) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", urlStr, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            ret = rawFile.responseText;
             alert("data retrieved");
        }
    }
    rawFile.send();
}

function HTTPPostData(urlStr, dataStr ) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("POST", urlStr, true);
  
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            ret = rawFile.responseText;
            alert(ret);
        }
    }
    rawFile.send(dataStr);
}