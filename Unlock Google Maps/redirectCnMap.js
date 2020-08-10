let url = $request.url
url = url.replace(/google\.cn/,'google.com')

$done({url})