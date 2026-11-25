(function(){
  var d=document;
  function each(l,f){[].forEach.call(l,f)}
  function smooth(fn){if(!d.startViewTransition)return fn();var v=d.startViewTransition(fn);v.ready&&v.ready.catch(function(){})}
  /* each group remembers the latest choice, so a click during a transition is not lost */
  function pick(b,attr,apply){
    var p=b.parentNode;
    if((p._w||p.querySelector("["+attr+'="true"]'))==b)return;
    p._w=b;
    smooth(function(){
      each(p.children,function(x){x.setAttribute(attr,x==p._w)});
      apply(p._w,p);
    });
  }
  d.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest("button");
    if(!b)return;
    if(b.dataset.c){
      pick(b,"aria-pressed",function(w){
        var c=w.dataset.c;
        each(d.querySelectorAll("#list li"),function(li){
          li.hidden=!(c=="all"||(" "+li.dataset.c+" ").indexOf(" "+c+" ")>-1);
        });
      });
    }else if(b.getAttribute("role")=="tab"){
      pick(b,"aria-selected",function(w,p){
        each(p.children,function(x){
          x.tabIndex=x==w?0:-1;
          d.getElementById(x.getAttribute("aria-controls")).hidden=x!=w;
        });
      });
    }
  });
  d.addEventListener("keydown",function(e){
    var b=e.target;
    if(!b.getAttribute||b.getAttribute("role")!="tab"||(e.key!="ArrowRight"&&e.key!="ArrowLeft"))return;
    var k=b.parentNode.children,n=k[([].indexOf.call(k,b)+(e.key=="ArrowRight"?1:-1)+k.length)%k.length];
    n.click();n.focus();e.preventDefault();
  });
})();
