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
  var TO="daffaafrizal7@gmail.com";
  var f=document.getElementById("contactForm"), out=document.getElementById("formOut");
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

  // spectrum canvas (home page only)
  var c=document.getElementById("spec");
  if(!c)return;
  var ctx=c.getContext("2d");
  var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var t=0;
  function css(v){return getComputedStyle(document.documentElement).getPropertyValue(v).trim()}
  function size(){var r=c.getBoundingClientRect(),d=window.devicePixelRatio||1;c.width=r.width*d;c.height=r.height*d;ctx.setTransform(d,0,0,d,0,0)}
  // three Wi-Fi channels (1, 6, 11) as carriers
  var carriers=[{x:.12,w:.07,h:.62},{x:.5,w:.07,h:.88},{x:.88,w:.07,h:.5}];
  function draw(){
    var w=c.clientWidth,h=c.clientHeight;
    var line=css("--line"),acc=css("--accent"),sig=css("--signal"),bg=css("--bg");
    ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
    ctx.strokeStyle=line;ctx.lineWidth=1;
    for(var i=1;i<10;i++){var gx=w*i/10;ctx.beginPath();ctx.moveTo(gx,0);ctx.lineTo(gx,h);ctx.stroke()}
    for(var j=1;j<6;j++){var gy=h*j/6;ctx.beginPath();ctx.moveTo(0,gy);ctx.lineTo(w,gy);ctx.stroke()}
    var pts=[],N=Math.max(120,Math.floor(w/2));
    for(var k=0;k<=N;k++){
      var x=k/N, y=.06+.03*Math.sin(k*1.7+t*3)*Math.cos(k*.31+t)+.02*Math.random()*(reduce?0:1);
      carriers.forEach(function(cr,ci){
        var d=(x-cr.x)/cr.w, flat=Math.exp(-Math.pow(Math.abs(d),6));
        y+=cr.h*flat*(0.92+.08*Math.sin(t*2+ci*2));
      });
      pts.push([x*w,h-y*h*.95]);
    }
    var g=ctx.createLinearGradient(0,0,0,h);
    g.addColorStop(0,acc);g.addColorStop(1,"transparent");
    ctx.globalAlpha=.22;ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(0,h);
    pts.forEach(function(p){ctx.lineTo(p[0],p[1])});ctx.lineTo(w,h);ctx.closePath();ctx.fill();ctx.globalAlpha=1;
    ctx.strokeStyle=acc;ctx.lineWidth=1.6;ctx.beginPath();
    pts.forEach(function(p,i){i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1])});ctx.stroke();
    // marker on peak
    var peak=pts.reduce(function(a,b){return b[1]<a[1]?b:a});
    ctx.fillStyle=sig;ctx.beginPath();ctx.moveTo(peak[0],peak[1]-4);ctx.lineTo(peak[0]-5,peak[1]-12);ctx.lineTo(peak[0]+5,peak[1]-12);ctx.closePath();ctx.fill();
    ctx.font="11px "+css("--f-mono");ctx.fillStyle=sig;ctx.textAlign="center";
    ctx.fillText("M1 "+(-38-(Math.sin(t*2)*1.5)).toFixed(1)+" dBm",Math.min(Math.max(peak[0],48),w-48),Math.max(peak[1]-18,12));
    t+=.016;
    if(!reduce)requestAnimationFrame(draw);
  }
  size();window.addEventListener("resize",function(){size();if(reduce)draw()});
  draw();
})();
