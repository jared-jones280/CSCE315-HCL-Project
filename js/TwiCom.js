const contentPane1 = document.getElementById('tweetTest')

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.twitter.com/oauth/authenticate', true)
request.setRequestHeader('header','authorization: OAuth oauth_consumer_key="kQyt4wYdHOJHiSgwljKaOwCmX", oauth_nonce="generated-nonce", oauth_signature="generated-signature", oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp", oauth_token="access-token-for-authed-user", oauth_version="1.0"')

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  //twttr.widgets.load()
  console.log(data)
}

// Send request
request.send()