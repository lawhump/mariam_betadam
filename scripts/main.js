"use strict";function initializeGrid(){var e=document.querySelector(".projects"),n={itemSelector:".project",isFitWidth:!0,columnWidth:".grid-sizer",gutter:38};new Masonry(e,n);document.querySelector(".projects").addEventListener("click",clickHandler)}function getMarkup(e,n){var t=new XMLHttpRequest;t.onreadystatechange=function(){4==t.readyState&&200==t.status&&n(t.responseText)},t.open("GET",e,!0),t.send(null)}function clickHandler(e){e.target&&"DIV"==e.target.nodeName&&(console.log(e.target.dataset.projectNumber),document.querySelector(".projects").className+="fade-out",window.location.hash="#project/"+e.target.dataset.projectNumber)}var container=document.getElementById("placeholder"),destination=location.hash,fadeContentIn=function(){container.firstChild.className+=" fade-in"},responseProjsHandler=function(e){container.innerHTML=e,initializeGrid(),fadeContentIn()},responseProjHandler=function(e){container.innerHTML=e,fadeContentIn()},responseWorkHandler=function(e){console.log(e),container.innerHTML=e,fadeContentIn()},responseContHandler=function(e){console.log(e),container.innerHTML=e,fadeContentIn()},route=function(){if(destination=location.hash,console.log(destination),"#work"==destination)getMarkup("../work.html",responseWorkHandler);else if(0==destination.length)getMarkup("../projects.html",responseProjsHandler);else{if(!destination.includes("project"))return;getMarkup("../project.html",responseProjHandler)}};window.onhashchange=route,function(){route()}();