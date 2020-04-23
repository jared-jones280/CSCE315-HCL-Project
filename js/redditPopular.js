

function redditPopularLoad(){
var request = new XMLHttpRequest();
var numposts = '30';
var searchTerm = document.getElementById('searchBut').value;
var fixedSearchTerm = encodeURIComponent(searchTerm);

if(searchTerm=''){
    //This one to see trending / popular posts
    request.open('GET','https://www.reddit.com/r/popular/.json?limit='+numposts,true);
}
else{
    //This one for searched content (put search (can include spaces) in searchTerm)
    request.open('GET','https://www.reddit.com/r/all/search.json?limit='+numposts+'&q='+fixedSearchTerm+'&restrict_sr=on&include_over_18=on&sort=relevance&t=all');
}

request.onload = function(){
    if(request.status == 200){
        var redditPopularPosts = JSON.parse(this.response);
        for(const i in redditPopularPosts.data.children){
            try{
                var divTitle = "reddit"+i;
                var postTitle = "reddit"+i+"title";
                var subTitle = "reddit"+i+"sub";
                var link = "https://reddit.com"+redditPopularPosts.data.children[i].data.permalink;
                var links= "https://reddit.com/r/"+redditPopularPosts.data.children[i].data.subreddit;
                document.getElementById(divTitle).innerHTML += '<a id ='+postTitle+'>reddittitle</a>';
                document.getElementById(postTitle).href = link;
                document.getElementById(postTitle).innerText = redditPopularPosts.data.children[i].data.title;
                document.getElementById(divTitle).insertAdjacentHTML("afterend","<br>");
                document.getElementById(divTitle).insertAdjacentHTML("afterend","<a id ="+subTitle+">redditsub</a>");
                document.getElementById(subTitle).href = links;
                document.getElementById(subTitle).innerText = 'r/'+redditPopularPosts.data.children[i].data.subreddit;

                if(redditPopularPosts.data.children[i].data.post_hint == "image"){
                    if(redditPopularPosts.data.children[i].data.thumbnail != "image"){
                        document.getElementById(subTitle).insertAdjacentHTML("afterend","<br><img src="+redditPopularPosts.data.children[i].data.thumbnail+">");
                    }
                    else{
                      document.getElementById(subTitle).insertAdjacentHTML("afterend","<br><img src="+redditPopularPosts.data.children[i].data.url+">");
                    }
                }
                else if(redditPopularPosts.data.children[i].data.post_hint =="link"){
                    document.getElementById(subTitle).insertAdjacentHTML("afterend","<br><a href ="+redditPopularPosts.data.children[i].data.url+">Link to Source</a>");

                }
                else if(redditPopularPosts.data.children[i].data.post_hint =="hosted:video"){
                    //document.getElementById(subTitle).insertAdjacentHTML("afterend","<h4>vid</h4>");
                    document.getElementById(subTitle).insertAdjacentHTML("afterend","<br><iframe src ="+redditPopularPosts.data.children[i].data.media.reddit_video.fallback_url+"></iframe>")
                }
                else if(redditPopularPosts.data.children[i].data.post_hint =="rich:video"){
                    //document.getElementById(subTitle).insertAdjacentHTML("afterend",'<h4>rich:video</h4>');
                    document.getElementById(subTitle).insertAdjacentHTML("afterend","<br><div id=iframeWrapper>"+decodeURI(redditPopularPosts.data.children[i].data.media.oembed.html).replace("&lt;","<").replace("&gt;",">").replace("iframe "+"iframe class=\"redditVideo\" ")+"</div>");
                }
                else{
                    //document.getElementById(subTitle).insertAdjacentHTML("afterend","<h4>none</h4>");

                }


               // document.getElementById("testBox").value=redditPopularPosts.data.children[1].data.title +" - "+redditPopularPosts.data.children[1].data.title;
               console.log(i,"/r/"+redditPopularPosts.data.children[i].data.subreddit,redditPopularPosts.data.children[i].data.title,"https://reddit.com"+redditPopularPosts.data.children[i].data.permalink);
               // //need to figure out how to output hyperlinked title and subreddit
               // //redditPopularPosts.data.children
               // var t = "reddit"+i+"title";
               // var s = "reddit"+i+"sub";
               // var im = "reddit"+i+"img";
               // var link = "https://reddit.com"+redditPopularPosts.data.children[i].data.permalink;
               // var links= "https://reddit.com/r/"+redditPopularPosts.data.children[i].data.subreddit;
               // //var url = redditPopularPosts.children[i].data.url;
               // document.getElementById(t).href = link;
               // document.getElementById(t).innerText = redditPopularPosts.data.children[i].data.title;
               // document.getElementById(s).href = links;
               // document.getElementById(s).innerText = 'r/'+redditPopularPosts.data.children[i].data.subreddit;
               // if(redditPopularPosts.data.children[i].data.thumbnail!='self')
               //     document.getElementById(im).src = redditPopularPosts.data.children[i].data.thumbnail;
                
            }
            catch(e){
                console.log("err:",e);
            }
        }
    }else{
        console.log('Error');
    }
}

request.send();
}

function init(){
    redditPopularLoad();
    redditLocalStore();
}


function redditLocalStore(){
var request = new XMLHttpRequest();
var numposts = '30';
var searchTerm = document.getElementById('searchBut').value;
var fixedSearchTerm = encodeURIComponent(searchTerm);

if(searchTerm=''){
    //This one to see trending / popular posts
    request.open('GET','https://www.reddit.com/r/popular/.json?limit='+numposts,true);
}
else{
    //This one for searched content (put search (can include spaces) in searchTerm)
    request.open('GET','https://www.reddit.com/r/all/search.json?limit='+numposts+'&q='+fixedSearchTerm+'&restrict_sr=on&include_over_18=on&sort=relevance&t=all');
}

request.onload = function(){
    if(request.status == 200){
        var redditPopularPosts = JSON.parse(this.response);
        for(const i in redditPopularPosts.data.children){
            try{
                var divTitle = "reddit"+i;
                var postTitle = "reddit"+i+"title";
                var subTitle = "reddit"+i+"sub";
                var link = "https://reddit.com"+redditPopularPosts.data.children[i].data.permalink;
                var links= "https://reddit.com/r/"+redditPopularPosts.data.children[i].data.subreddit;
                var innerHTMLDat = "";
                innerHTMLDat= '<a id ='+postTitle+ 'href ='+link+'>'+redditPopularPosts.data.children[i].data.title+'</a>';
                innerHTMLDat+="<br>";
                innerHTMLDat+="<a id ="+subTitle+" href = "+links+">r/"+redditPopularPosts.data.children[i].data.subreddit+"</a>"
                

                if(redditPopularPosts.data.children[i].data.post_hint == "image"){
                    if(redditPopularPosts.data.children[i].data.thumbnail != "image"){
                        innerHTMLDat+="<br><img src="+redditPopularPosts.data.children[i].data.thumbnail+">"
                    }
                    else{
                      innerHTMLDat+="<br><img src="+redditPopularPosts.data.children[i].data.url+">";
                    }
                }
                else if(redditPopularPosts.data.children[i].data.post_hint =="link"){
                    innerHTMLDat+="<br><a href ="+redditPopularPosts.data.children[i].data.url+">Link to Source</a>";

                }
                else if(redditPopularPosts.data.children[i].data.post_hint =="hosted:video"){
                    //document.getElementById(subTitle).insertAdjacentHTML("afterend","<h4>vid</h4>");
                    innerHTMLDat+="<br><iframe src ="+redditPopularPosts.data.children[i].data.media.reddit_video.fallback_url+"></iframe>";
                }
                else if(redditPopularPosts.data.children[i].data.post_hint =="rich:video"){
                    //document.getElementById(subTitle).insertAdjacentHTML("afterend",'<h4>rich:video</h4>');
                    innerHTMLDat+="<br><div id=iframeWrapper>"+decodeURI(redditPopularPosts.data.children[i].data.media.oembed.html).replace("&lt;","<").replace("&gt;",">").replace("iframe "+"iframe class=\"redditVideo\" ")+"</div>";
                }
                else{
                    //document.getElementById(subTitle).insertAdjacentHTML("afterend","<h4>none</h4>");

                }
                
                localStorage.setItem(divTitle,innerHTMLDat);
                
               // document.getElementById("testBox").value=redditPopularPosts.data.children[1].data.title +" - "+redditPopularPosts.data.children[1].data.title;
               // //need to figure out how to output hyperlinked title and subreddit
               // //redditPopularPosts.data.children
               // var t = "reddit"+i+"title";
               // var s = "reddit"+i+"sub";
               // var im = "reddit"+i+"img";
               // var link = "https://reddit.com"+redditPopularPosts.data.children[i].data.permalink;
               // var links= "https://reddit.com/r/"+redditPopularPosts.data.children[i].data.subreddit;
               // //var url = redditPopularPosts.children[i].data.url;
               // document.getElementById(t).href = link;
               // document.getElementById(t).innerText = redditPopularPosts.data.children[i].data.title;
               // document.getElementById(s).href = links;
               // document.getElementById(s).innerText = 'r/'+redditPopularPosts.data.children[i].data.subreddit;
               // if(redditPopularPosts.data.children[i].data.thumbnail!='self')
               //     document.getElementById(im).src = redditPopularPosts.data.children[i].data.thumbnail;
                
            }
            catch(e){
                console.log("err:",e);
            }
        }
    }else{
        console.log('Error');
    }
}

request.send();
}


    
function redditRefresh(){
    try{
        var name = "reddit" + window.localStorage.getItem("");
    }
    catch{
        console.log('cannot get local storage clickcount');
    }
    const div = document.createElement('div');
    div.className = 'col-md-4';
    try{
        var post = window.localStorage.getItem(name);
    }
    catch{
        console.log('cannot get local storage reddit post');
    }  
    div.innerHTML = post;
    document.getElementById('container').appendChild(div);
}
