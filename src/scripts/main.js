(function(){
  // copy buttons
  function copyText(t, btn){
    var done=function(){btn.textContent="Copied";setTimeout(function(){btn.textContent="Copy"},1500)};
    try{navigator.clipboard.writeText(t).then(done,function(){btn.textContent="Select text"})}catch(e){btn.textContent="Select text"}
  }
  document.querySelectorAll(".copy").forEach(function(b){
    b.addEventListener("click",function(){copyText(document.getElementById(b.dataset.copy).textContent,b)});
  });

  // form: opens a pre-filled email to Daffa (Gmail compose, with a mail-app fallback link)
  var f=document.getElementById("contactForm"), out=document.getElementById("formOut");
  var TO=f?f.dataset.to:""; // set from src/data/profile.ts
  if(f)f.addEventListener("submit",function(e){
    e.preventDefault();
    var n=f.fName.value.trim(), m=f.fMail.value.trim(), msg=f.fMsg.value.trim();
    if(!n||!m||!msg){out.textContent="Please fill in your name, email, and message first.";return}
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m)){out.textContent="Invalid email format, e.g. name@company.com";return}
    var su=encodeURIComponent("Portfolio contact from "+n);
    var body=encodeURIComponent(msg+"\n\n--\n"+n+"\n"+m);
    var gmail="https://mail.google.com/mail/?view=cm&fs=1&to="+TO+"&su="+su+"&body="+body;
    var mailto="mailto:"+TO+"?subject="+su+"&body="+body;
    window.open(gmail,"_blank","noopener");
    out.textContent="Gmail opened in a new tab with your message. Just press Send. Not using Gmail? ";
    var a=document.createElement("a");a.href=mailto;a.textContent="Open in your email app";
    out.appendChild(a);out.appendChild(document.createTextNode("."));
  });

  // highlight the menu item of the section currently on screen
  var links=[].slice.call(document.querySelectorAll(".nav ul a"));
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){links.forEach(function(a){a.classList.toggle("active",a.getAttribute("href")==="#"+en.target.id)})}})},{rootMargin:"-45% 0px -50% 0px"});
    document.querySelectorAll("main section").forEach(function(s){io.observe(s)});
  }

  // scroll effects
  var reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var bar=document.createElement("div");bar.className="scroll-progress";bar.setAttribute("aria-hidden","true");
  document.body.appendChild(bar);
  var ticking=false;
  function setProgress(){
    var max=document.documentElement.scrollHeight-window.innerHeight;
    bar.style.transform="scaleX("+(max>0?Math.min(window.scrollY/max,1):0)+")";
    ticking=false;
  }
  window.addEventListener("scroll",function(){if(!ticking){ticking=true;requestAnimationFrame(setProgress)}},{passive:true});
  window.addEventListener("resize",setProgress);
  setProgress();

  if(!reduceMotion&&"IntersectionObserver" in window){
    var items=[].slice.call(document.querySelectorAll(".hero .ch,.hero h1,.hero .role,.hero .btns,.avatar,main section:not(.hero) .ch,main section:not(.hero) h2,.about-grid>*,.edu h3,.edu-item,.skills h3,.skill-grid>div,.proj,.cert,.chan,#contactForm"));
    // siblings appear one after another
    items.forEach(function(el){
      var i=[].indexOf.call(el.parentNode.children,el);
      el.style.setProperty("--d",Math.min(i,5)*90+"ms");
      el.classList.add("reveal");
    });
    // works in both directions: an element that left through the top slides back down when scrolling up
    var ro=new IntersectionObserver(function(es){es.forEach(function(en){
      var el=en.target;
      if(en.isIntersecting){el.classList.add("in")}
      else{el.classList.remove("in");el.classList.toggle("from-top",en.boundingClientRect.top<0)}
    })},{rootMargin:"0px 0px -8% 0px",threshold:.08});
    items.forEach(function(el){ro.observe(el)});
  }

  // back-to-top button
  var top=document.createElement("button");
  top.type="button";top.className="to-top";top.setAttribute("aria-label","Back to top");top.textContent="↑";
  document.body.appendChild(top);
  top.addEventListener("click",function(){window.scrollTo({top:0,behavior:reduceMotion?"auto":"smooth"})});
  function toggleTop(){top.classList.toggle("show",window.scrollY>600)}
  window.addEventListener("scroll",toggleTop,{passive:true});
  toggleTop();
})();
