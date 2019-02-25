
//- Define a function `getFirstSelector(selector)`, which accepts a selector and returns the first element that matches.
    const comp = document.getElementById('app')

  
function getFirstSelector(selector){
 return document.querySelector(selector)
 
}


function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
    for (let i = 0; i < lis.length; i++){
	var msiinte = parseInt(lis[i].innerHTML) + n
  lis[i].innerHTML = msiinte
    }
  }
