var input = document.getElementById("searchBut");
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    getSearchValue();
  }
});

function getSearchValue(){
    //alert("button clicked!")
    // Selecting the input element and get its value 
    var inputVal = document.getElementById('searchBut').value;
    //alert(inputVal);
    //alert(inputVal);
    var count = sessionStorage.getItem("clickCount");
    for(var i = 0; i < (count-3)*3; i++){
      var parentNode = document.getElementById("tobecleared").parentNode
      parentNode.removeChild(document.getElementById("tobecleared"));
    }

    sessionStorage.clear();
    twitSearch(inputVal);
    redditPopularLoad();
    executeSearchYT(inputVal);
    //redditLocalStore();
    
    // Displaying the value
}

function refreshPage(){
  var count;
  if(sessionStorage.getItem("clickCount") != null && sessionStorage.getItem("clickCount") != 0){
    count = sessionStorage.getItem('clickCount');
  }else{
    count = 3;
    sessionStorage.setItem('clickCount', count);
  }
  youtubeRefresh();
  redditRefresh();
  twitterRefresh();
  console.log("count : " + count);
  count++;
  count++;
  count++;
  sessionStorage.setItem('clickCount', count);
}

function zoomButton(){
  var but = document.getElementById("zoomBut");
  console.log(but.getAttribute('data-state'))
  if(but.getAttribute('data-state')=='off'){
    but.setAttribute('data-state','on');
    but.className = "btn btn-outline-success"
    console.log('button is now '+ but.getAttribute('data-state'))
    document.getElementById("stylesheet").setAttribute('href', "css/zoom.css")
  }
  else{
    but.setAttribute('data-state','off');
    but.className = "btn btn-outline-secondary"
    console.log('button is now '+but.getAttribute('data-state'))
    document.getElementById("stylesheet").setAttribute('href', "css/media.css")
  }
  //   document.getElementById("stylesheet").setAttribute('href', "css/zoom.css")
  // }
}


//Get the button:
// mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};
//
//function scrollFunction() {
//  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//    mybutton.style.display = "block";
//  } else {
//    mybutton.style.display = "none";
//  }
//}

// When the user clicks on the button, scroll to the top of the document
//function topFunction() {
//  document.body.scrollTop = 0; // For Safari
//  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//}
function init(){
  redditPopularLoad();
  //redditLocalStore();
}