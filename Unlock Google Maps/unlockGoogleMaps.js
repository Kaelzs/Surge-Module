let url = $request.url
url = url.replace(/(mobileCountryCode=).*?(&|$)/,'$1' + '310' + '$2')
url = url.replace(/(countryCode=).*?(&|$)/,'$1' + 'us' + '$2')
url = url.replace(/(previousServerLegalCountryCode=).*?(&|$)/,'$1' + 'us' + '$2')
url = url.replace(/(mobileNetworkCode=).*?(&|$)/,'$1' + '18' + '$2')
url = url.replace(/(deviceRestriction=).*?(&|$)/,'$1' + 'noRestriction' + '$2')

$done({url})