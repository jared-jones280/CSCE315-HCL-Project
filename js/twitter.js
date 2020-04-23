

//const contentPane1 = document.getElementById('tweetTest')
function trending(){
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
  request.open('GET','http://immense-harbor-19732.herokuapp.com/twitter/$Trending', true)
  request.onload = function() {
    //console.log(request.status)
    // Begin accessing JSON data here
    if(request.status == 200){
      
      console.log(this.response);
      var data = JSON.parse(this.response)
      console.log(data.statuses)
      for(i in data.statuses){
        console.log(i);
        var tweet = document.getElementById("tweet"+i);
        console.log(data.statuses[i].id_str)
        tweet.setAttribute("tweetID",data.statuses[i].id_str)
        var id = tweet.getAttribute("tweetID");
        twttr.widgets.createTweet(id, tweet)
      }
  }
  //
  //twttr.widgets.load()
  //console.log(this.response)
}
// Send request
request.send()
}

function twitSearch(searchTerm){
  console.log("searchingTwitter for "+searchTerm)
  var request = new XMLHttpRequest()

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET','http://immense-harbor-19732.herokuapp.com/twitter/'+searchTerm+'/5', true)
  request.onload = function() {
    //console.log(request.status)
    // Begin accessing JSON data here
    if(request.status == 200){
      
      console.log(this.response);
      var data = JSON.parse(this.response)
      console.log(data.statuses)
      for(i in data.statuses){
        console.log(i);
        var tweet = document.getElementById("tweet"+i);
        tweet.innerHTML = "";
        console.log(data.statuses[i].id_str)
        tweet.setAttribute("tweetID",data.statuses[i].id_str)
        var id = tweet.getAttribute("tweetID");
        twttr.widgets.createTweet(id, tweet)
      }
    }
    //
    //twttr.widgets.load()
    //console.log(this.response)
  }
  // Send request
  request.send()
}

function twitRefresh(){
  var container = getElementById("contentDeck");

  var request = new XMLHttpRequest()

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET','http://immense-harbor-19732.herokuapp.com/twitter/'+searchTerm+'/5', true)
  request.onload = function() {
    //console.log(request.status)
    // Begin accessing JSON data here
    if(request.status == 200){
      
      console.log(this.response);
      var data = JSON.parse(this.response)
      console.log(data.statuses)
      for(i in data.statuses){
        //console.log(i);
        //var tweet = document.getElementById("tweet"+i);
        //tweet.innerHTML = "";
        container.innerHTML+='<div class="col-md-4"><div class="card mb-4 shadow-sm">'
        console.log(data.statuses[i].id_str)
        tweet.setAttribute("tweetID",data.statuses[i].id_str)
        var id = tweet.getAttribute("tweetID");
        twttr.widgets.createTweet(id, tweet)
      }
    }
    //
    //twttr.widgets.load()
    //console.log(this.response)
  }
  // Send request
  request.send()


}