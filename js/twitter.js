

//const contentPane1 = document.getElementById('tweetTest')
function trending(){
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
  request.open('GET','http://twitudit.herokuapp.com/twitter/$Trending', true)
  request.onload = function() {
    //console.log(request.status)
    // Begin accessing JSON data here
    if(request.status == 200){
      
      //console.log(this.response);
      var data = JSON.parse(this.response)
      //console.log(data.statuses)
      for(i in data.statuses){
        //console.log(i);
        var tweet = document.getElementById("tweet"+i);
        //console.log(data.statuses[i].id_str)
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
  request.open('GET','http://twitudit.herokuapp.com/twitter/'+searchTerm+'/5', true)
  request.onload = function() {
    //console.log(request.status)
    // Begin accessing JSON data here
    if(request.status == 200){
      
      //console.log(this.response);
      var data = JSON.parse(this.response)
      //console.log(data.statuses)
      for(i in data.statuses){
        //console.log(i);
        var tweet = document.getElementById("tweet"+i);
        tweet.innerHTML = "";
        //console.log(data.statuses[i].id_str)
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

function fillTweet(tweet,tweetNum){
  var request = new XMLHttpRequest()

  var searchTerm = document.getElementById('searchBut').value;

  if(searchTerm == ""){
    searchTerm = '$Trending'
  }

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET','http://twitudit.herokuapp.com/twitter/'+searchTerm+'/300', true)
  request.onload = function() {
    //console.log(request.status)
    // Begin accessing JSON data here
    if(request.status == 200){
      
    //console.log(this.response);
    var data = JSON.parse(this.response)
      //var tweet = document.getElementById("tweet"+tweetNum-6);
      tweet.innerHTML = "";
      //console.log(data.statuses[i].id_str)
      tweet.setAttribute("tweetID",data.statuses[tweetNum].id_str)
      var id = tweet.getAttribute("tweetID");
      twttr.widgets.createTweet(id, tweet)
    }

    //
    //twttr.widgets.load()
    //console.log(this.response)
  }
  // Send request
  request.send()
}

function twitterRefresh(){
  console.log("add more tweets")
  var postcount = sessionStorage.getItem("clickCount");
  for(var i = 0; i < 3; i++){
      var name = "twitter"+postcount;
      const div1 = document.createElement('div');
      div1.className = 'col-md-4';
      div1.id = "tobecleared";
      //post = sessionStorage.getItem(name.toString());
      const div2 = document.createElement('div');
      div2.className = 'card mb-4 shadow-sm';
      const tweet = document.createElement('div');
      tweet.className = 'card-body';
      tweet.id = 'name';
      tweet.setAttribute('tweetID','00')
      fillTweet(tweet,postcount);
      div2.appendChild(tweet);
      div1.appendChild(div2);
      document.getElementById('row').appendChild(div1); 
      postcount++;
  }
}