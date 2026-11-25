(function(){
  var d=document,root=d.documentElement,ac,theme=root.dataset.theme;
  function each(l,f){[].forEach.call(l,f)}
  function tick(f){
    try{
      ac=ac||new(window.AudioContext||window.webkitAudioContext)();
      if(ac.state=="suspended")ac.resume();
      var t=ac.currentTime,o=ac.createOscillator(),g=ac.createGain();
      o.type="sine";
      o.frequency.setValueAtTime(f,t);
      o.frequency.exponentialRampToValueAtTime(f*1.5,t+.07);
      g.gain.setValueAtTime(.0001,t);
      g.gain.exponentialRampToValueAtTime(.05,t+.008);
      g.gain.exponentialRampToValueAtTime(.0001,t+.16);
      o.connect(g);g.connect(ac.destination);
      o.start(t);o.stop(t+.18);
    }catch(e){}
  }
  function smooth(fn){if(!d.startViewTransition)return fn();var v=d.startViewTransition(fn);v.ready&&v.ready.catch(function(){})}
  function showTheme(){
    root.dataset.theme=theme;
    each(d.querySelectorAll(".theme button"),function(x){x.setAttribute("aria-pressed",x.dataset.t==theme)});
  }
  showTheme();
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
    if(b.dataset.t){
      try{localStorage.theme=b.dataset.t}catch(e){}
      if(theme==b.dataset.t)return;
      theme=b.dataset.t;
      tick(theme=="dark"?440:660);
      smooth(showTheme);
    }else if(b.dataset.c){
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
