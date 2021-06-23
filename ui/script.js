// Initialize params
url = null;
requestType = null;
bodyType = null;
bodyContent = null;

let submit = document.getElementById("subBtn");

submit.onclick = () => {
    url = document.getElementById("url").value;
    requestType = document.getElementById("requestType").value;
    bodyType = document.getElementById("bodyType").value;
    bodyContent = document.getElementById("body").value;
    console.log(url, requestType, bodyType, bodyContent);
};

// handle requests
