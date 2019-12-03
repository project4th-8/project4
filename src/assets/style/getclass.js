
function children(curEle,tagName){
  var nodeList = curEle.childNodes;
  var ary = [];
  if(/MSIE(6|7|8)/.test(navigator.userAgent)){
      for(var i=0;i<nodeList.length;i++){
          var curNode = nodeList[i];
          if(curNode.nodeType ===1){
             ary[ary.length] = curNode;
          }
      }
  }else{
      ary = Array.prototype.slice.call(curEle.children);
  }
  
  // 获取指定子元素
  if(typeof tagName === "string"){
      for(var k=0;k<ary.length;k++){
      var  curTag = ary[k];
        if(curTag.nodeName.toLowerCase() !== tagName.toLowerCase()){
         ary.splice(k,1);
         k--;
        }
      }
  }

  return ary;
}

export {
  children
}