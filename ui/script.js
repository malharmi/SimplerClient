const responseBody = document.getElementById("responseBody");

//Initialize params
url = null;
requestType = null;
bodyType = null;
bodyContent = null;

function submission() {
    url = document.getElementById("url").value;
    requestType = document.getElementById("requestType").value;
    bodyType = document.getElementById("bodyType").value;
    bodyContent = document.getElementById("body").value;
    console.log(url, requestType, bodyType, bodyContent);
}
