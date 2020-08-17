const currentConfirmationIDKey = `KYJikeCurrentLikeID`

const requestBody = JSON.parse($request.body)
const id = requestBody[`id`]

const currentLikeID = $persistentStore.read(currentConfirmationIDKey)

if (id == currentLikeID) {
	$done({})
} else {
	$persistentStore.write(id, currentConfirmationIDKey)
	const response = {
		"status": 400,
		"headers": $request.headers,
		"body": JSON.stringify({
			success: true,
			error: "请再次点击以确认点赞"
		})
	}
	$done({response})
}