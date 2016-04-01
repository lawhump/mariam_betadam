'use strict';

var container = document.getElementById('placeholder');
var destination = location.hash;

var fadeContentIn = function() {
  container.firstChild.className += ' fade-in';
}

var responseProjsHandler = function(res) {
  // TODO Error checking
  container.innerHTML = res;
  initializeGrid();
  fadeContentIn();
};

var responseProjHandler = function(res) {
  // TODO Error checking
  container.innerHTML = res;
  fadeContentIn();
};

var responseWorkHandler = function(res) {
  console.log(res);
  // TODO Error checking
  container.innerHTML = res;
  fadeContentIn();
};

var responseContHandler = function(res) {
  console.log(res);
  // TODO Error checking
  container.innerHTML = res;
  fadeContentIn();
};

var route = function() {
  console.log(destination);
  if (destination == '#work') {
    getMarkup('../markup/work.html', responseWorkHandler);
  }

  else if (destination == '#about') {
    break;
  }

  else if (destination.includes('project')) {
    getMarkup('../markup/project.html', responseProjHandler);
  }

  else {
    getMarkup('../markup/projects.html', responseProjsHandler);
  }
};


function initializeGrid() {
  var grid = document.querySelector('.projects');
  var options = {
    itemSelector: '.project',
    isFitWidth: true,
    columnWidth: '.grid-sizer',
    gutter: 38
  };
  var msnry = new Masonry(grid, options);

  document.querySelector('.projects').addEventListener('click', clickHandler);
}

function getMarkup(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText);
    }
  }
  xmlHttp.open('GET', url, true); // true for asynchronous
  xmlHttp.send(null);
}

function clickHandler(e) {
  if(e.target && e.target.nodeName == 'DIV') {
		// List item found!  Output the ID!
    console.log(e.target.dataset.projectNumber);
    document.querySelector('.projects').className += 'fade-out';
    window.location.hash = '#project/' + e.target.dataset.projectNumber;
    destination = location.hash;
	}
}

window.onhashchange = route;

(function() {
  route();
})();
