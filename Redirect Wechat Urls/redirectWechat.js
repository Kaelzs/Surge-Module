let captured = /url=([^&]+)/.exec($request.url)[1];
let redirectUrl = decodeURIComponent(captured)

let headers = {
    "Location": redirectUrl,
    "Cache-Control": "no-cache, must-revalidate",
    "Connection": "keep-alive",
}

let response = {
    status: 302,
    headers: headers,
    body: ""
}

$done({response})