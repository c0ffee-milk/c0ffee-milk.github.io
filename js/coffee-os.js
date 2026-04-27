
(function(){
  const boot=document.querySelector('.boot');
  const skip=document.querySelector('.skip-boot');
  const finish=()=>{ if(boot) boot.classList.add('done'); };
  if(boot){ setTimeout(finish, 900); if(skip) skip.addEventListener('click', finish); }
  const uptime=document.querySelector('[data-uptime]');
  if(uptime){
    const start=new Date('2025-06-24T00:00:00+08:00').getTime();
    const tick=()=>{ const d=Date.now()-start; const days=Math.max(0,Math.floor(d/86400000)); const hrs=Math.floor(d/3600000)%24; const mins=Math.floor(d/60000)%60; uptime.textContent=`${days}d ${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}`; };
    tick(); setInterval(tick,60000);
  }
  document.addEventListener('keydown',e=>{
    const items=[...document.querySelectorAll('.nav-item')]; if(!items.length) return;
    const active=items.findIndex(x=>x.classList.contains('active'));
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){
      e.preventDefault(); const next=e.key==='ArrowDown' ? Math.min(items.length-1,active+1) : Math.max(0,active-1); items[next]?.focus();
    }
    if(e.key==='Enter' && document.activeElement?.classList.contains('nav-item')) document.activeElement.click();
  });
})();
