(function(){
  var d=document,root=d.documentElement,ac;
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
  /* the address is assembled here so the host does not inject its e-mail decoding script on every page */
  each(d.querySelectorAll("[data-m]"),function(x){x.href="mailto:"+x.dataset.m+"@rnikhil"+".com"});
  /* sidebar index: mark the section being read */
  var links=d.querySelectorAll(".toc a");
  if(links.length){
    var heads=[],busy;
    each(links,function(a){var h=d.getElementById(decodeURIComponent(a.hash.slice(1)));if(h)heads.push([h,a])});
    function mark(){
      busy=0;
      var on=null,end=innerHeight+scrollY>=root.scrollHeight-2;
      heads.forEach(function(x){if(end||x[0].getBoundingClientRect().top<=140)on=x[1]});
      each(links,function(a){a.classList.toggle("on",a==on);if(a==on)a.setAttribute("aria-current","true");else a.removeAttribute("aria-current")});
    }
    addEventListener("scroll",function(){if(!busy)busy=requestAnimationFrame(mark)},{passive:true});
    mark();
  }
  d.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest("button");
    if(!b)return;
    if(b.dataset.t){
      root.dataset.theme=b.dataset.t;
      try{localStorage.theme=b.dataset.t}catch(e){}
      tick(b.dataset.t=="dark"?440:660);
    }
  });
})();
