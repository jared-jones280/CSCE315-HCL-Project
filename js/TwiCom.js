const contentPane1 = document.getElementById('tweetTest')

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.twitter.com/oauth/authenticate', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  //twttr.widgets.load()
  console.log(data)
}

// Send request
request.send()