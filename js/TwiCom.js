/*window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

twttr.widgets.createTweet(
  '20',
  document.getElementById('twitterEmmbed'),
  {
  }
);*/

const contentPane1 = document.getElementById('tweetTest')

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET','http://localhost:8127', true)
request.onload = function() {
  console.log(request.status)
  // Begin accessing JSON data here
  if(request.status == 200){
    var data = JSON.parse(this.response)
  }
  //
  //twttr.widgets.load()
  //console.log(this.response)
}

// Send request
request.send()