 // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		
	  
	  var playerArray = [];
	  var search = false;
      /*var player;
	  var player1;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '225',
          width: '348',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
          }
        });
      }*/

      function onPlayerReady(event) {
        //event.target.playVideo();
	    //execute();
      }
	  
	  function init() {
      gapi.client.setApiKey('AIzaSyAvxlGrZrzHyQVzPvWcMED8oBL4YFawDWo');
      gapi.client.load('youtube', 'v3', function() {
		  if(search){
			  executeSearch('1600 hp supra dyno');
		  }
		  else{
			  executeTrending();
		  }
        
      });
	  }
	  
	  function executeTrending() {
		  playerArray = [];
      return gapi.client.youtube.videos.list({
      part: 'snippet,contentDetails,statistics',
      chart: 'mostPopular',
      regionCode: 'US',
	  maxResults: '30'
	  
      })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
				console.log("Test",'dasdasdasdas');
				console.log(response.result);
                console.log("Response", response);
				console.log("id",response.result.items[0].id);
				console.log("desc",response.result.items[0].snippet.localized.description);
				
				var i;
				for (i=0;i<3;i++){
					playerArray.push(new YT.Player('player'+i.toString(10), {
						height: '225',
						width: '348',
						videoId: response.result.items[i].id
					}));
					document.getElementById('description'+i.toString(10)).innerHTML = response.result.items[i].snippet.localized.description;
				}
				for(i=3;i<30;i++){
					sessionStorage.setItem('player'+i.toString(10), response.result.items[i].id);
					sessionStorage.setItem('description'+i.toString(10), response.result.items[i].snippet.localized.description);
				}
              },
              function(err) { console.error("Execute error of YT js execute", err); });
     }
	 
	 function executeSearchYT(searchTerm) {
		 var i;
			for (i=0;i<3;i++){
				var parentNode = document.getElementById('player'+i.toString(10)).parentNode
				parentNode.removeChild(document.getElementById('player'+i.toString(10)));
				var node = document.createElement("div");
				node.id = 'player'+i.toString(10);
				parentNode.prepend(node);
				document.getElementById('description'+i.toString(10)).innerHTML = '';
			}
      return gapi.client.youtube.search.list({
      "part": "snippet",
      "maxResults": 30,
      "q": searchTerm
    })
        .then(function(response) {
			console.log(response.result);
                console.log("Response", response);
                var i;
				for (i=0;i<3;i++){
					playerArray.push(new YT.Player('player'+i.toString(10), {
						height: '225',
						width: '348',
						videoId: response.result.items[i].id.videoId
					}));
					document.getElementById('description'+i.toString(10)).innerHTML = response.result.items[i].snippet.description;
				}
				for(i=3;i<30;i++){
					sessionStorage.setItem('player'+i.toString(10), response.result.items[i].id.videoId);
					sessionStorage.setItem('description'+i.toString(10), response.result.items[i].snippet.description);
				}
              },
              function(err) { console.error("Execute error", err); });
  }
  /*
  function loadNextYT(pageNo){
	  if(pageNo > 27){
		  pageNo = 27;
	  }
	  for(int i=pageNo;i<pageNo+3;i++){
		  playerArray.push(new YT.Player('player'+pageNo.toString(10), {
						height: '225',
						width: '348',
						videoId: sessionStorage.getItem('player'+pageNo.toString(10));
		  }));
		  document.getElementById('description'+pageNo.toString(10)).innerHTML = sessionStorage.getItem('description'+pageNo.toString(10));
	  }
  }*/