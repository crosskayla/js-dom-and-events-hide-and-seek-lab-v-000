 function getFirstSelector(selector){
   return document.querySelector(selector)
 }

 function nestedTarget(){
   return document.querySelector('#nested .target')
 }

function increaseRankBy(n){
    let lists = document.querySelectorAll('.ranked-list')
    for (let l = 0; l < lists.length; l++){
      let list = lists[l].children
      for (let i = 0; i < list.length; i++){
        list[i].innerHTML = (parseInt(list[i].innerHTML) + n)
      }
    }
}

function deepestChild(){
    let list = document.querySelector('div#grand-node')
    while(list.children.length > 0){
      list = list.children[0]
    }
    return list;
}
