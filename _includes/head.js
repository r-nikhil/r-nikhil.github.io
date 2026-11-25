(function(){
  var r=document.documentElement,ss;
  try{ss=sessionStorage}catch(e){}
  function theme(){var t;try{t=localStorage.theme}catch(e){}r.dataset.theme=t||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light")}
  theme();
  try{if(ss.seen)r.className="seen";ss.seen=1}catch(e){}
  /* slide direction: Writing sits left of About, and any post sits to the right of both */
  function rank(u){var p=new URL(u,location.href).pathname;return p=="/"?0:/^\/about/.test(p)?1:2}
  function dir(from,to,a){
    var back=rank(to)<rank(from);
    /* browser Back and Forward follow the history order, whatever the pages are */
    if(a&&a.navigationType=="traverse"&&a.from&&a.entry&&a.from.index>-1&&a.entry.index>-1)back=a.entry.index<a.from.index;
    r.dataset.dir=back?"back":"fwd";
    return r.dataset.dir;
  }
  function reveal(){
    var a=window.navigation&&navigation.activation;
    if(a&&a.from&&a.entry)dir(a.from.url,a.entry.url,a);
    else try{if(ss.dir){r.dataset.dir=ss.dir}}catch(e){}
  }
  reveal();
  addEventListener("pagereveal",reveal);
  /* the leaving page records the direction for browsers that cannot tell the arriving page where it came from */
  addEventListener("pageswap",function(e){var a=e.activation;if(a&&a.entry){var v=dir(location.href,a.entry.url,a);try{ss.dir=v}catch(x){}}});
  addEventListener("pageshow",function(e){if(e.persisted)theme()});
})();
