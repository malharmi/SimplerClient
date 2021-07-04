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
    bodyContent = document.getElementById("postBody").value;
    console.log(url, requestType, bodyType, bodyContent);
    handleRequest(url, requestType, bodyType, bodyContent);
}

function handleRequest(url, requestType, bodyType, bodyContent) {
    if (requestType === "GET") {
        console.log("Getting...");
        handleGet(url);
    } else if (requestType === "POST") {
        console.log("Posting...");
        handlePost(url, bodyType, bodyContent);
    }
}

async function handleGet(url) {
    console.log("in");
    let response = await fetch(url);
    let stat = response.status;
    let responseBody = respnse.json();
    return console.log(stat, responseBody);
}

async function handlePost(url, bodyType, bodyContent) {
    if (bodyType === "JSON") {
        var config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: bodyContent, // string in JSON format
        };
        console.log(config.body);
    }
    try {
        const response = await fetch(url, config);
        const responseBody = await response.json();
        const stat = response.status;
        console.log(stat, responseBody);
    } catch (error) {
        console.log(error);
    }
}
