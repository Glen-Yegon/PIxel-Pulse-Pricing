(function(){
  const accessBtn     = document.getElementById('accessBtn');
  const overlay       = document.getElementById('pageOverlay');
  const pricingTarget = document.getElementById('pricing');

  if(!accessBtn || !overlay || !pricingTarget) return;

  document.body.classList.add('lock-scroll');    // hero remains unscrollable

  accessBtn.addEventListener('click', e=>{
    e.preventDefault();

    overlay.classList.remove('exit');
    overlay.classList.add('active');

    /* Wait for overlay to fully cover (0.8 s) */
    setTimeout(()=>{
      pricingTarget.classList.remove('hidden');   // 🔸 REVEAL the section
      pricingTarget.scrollIntoView({behavior:'smooth', block:'start'});

      /* after a short pause, dismiss overlay */
      setTimeout(()=>{
        overlay.classList.add('exit');
        overlay.addEventListener('transitionend', ()=>{
          overlay.classList.remove('active','exit');
          document.body.classList.remove('lock-scroll'); // unlock page scroll
        },{once:true});
      }, 600);
    }, 800);
  });
})();
