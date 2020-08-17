const currentConfirmationUsernameKey = `KYJikeCurrentFollowName`

const requestBody = JSON.parse($request.body)
const username = requestBody[`username`]

const currentFollowUsername = $persistentStore.read(currentConfirmationUsernameKey)

if (username == currentFollowUsername) {
	$done({})
} else {
	$persistentStore.write(username, currentConfirmationUsernameKey)
	const response = {
		"status": 400,
		"headers": $request.headers,
		"body": JSON.stringify({
			success: true,
			error: "请再次点击以确认关注"
		})
	}
	$done({response})
}