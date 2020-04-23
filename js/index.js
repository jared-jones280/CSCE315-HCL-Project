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
    twitSearch(inputVal);
    redditPopularLoad();
    executeSearchYT(inputVal);
    redditLocalStore();
    
    // Displaying the value
}

function refreshPage(){
  var count;
  if(sessionStorage.getItem("clickCount") != null){
    count = sessionStorage.getItem('clickCount');
  }else{
    sessionStorage.clear();
    count = 3;
    sessionStorage.setItem('clickCount', count);
  }
  redditRefresh();
  //YouTubeRefresh();
  //TwiterRefresh();
  console.log("count : " + count);
  count++;
  count++;
  count++;
  sessionStorage.setItem('clickCount', count);
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

// window.onbeforeunload = function(){
//   sessionStorage.setItem("origin", window.location.href);
// }

// window.onload = function(){
//   if(window.location.href == sessionStorage.getItem("origin")){
//       sessionStorage.removeItem('clickCount');
//   }
// }

function YouTubeRefresh(){

}