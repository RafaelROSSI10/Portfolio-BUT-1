/* =================================================================
   SCRIPT PARTAGÉ — navigation, menu mobile, révélations au scroll
   ================================================================= */

/* --- Remplit le nom/footer depuis PROFIL si disponible --- */
document.addEventListener('DOMContentLoaded', ()=>{
  if(typeof PROFIL !== 'undefined'){
    document.querySelectorAll('[data-profil-nom]').forEach(el=>el.textContent = PROFIL.nom);
    document.querySelectorAll('[data-profil-initiale]').forEach(el=>el.textContent = (PROFIL.nom.trim().charAt(0) || '?').toUpperCase());
    document.querySelectorAll('[data-profil-formation]').forEach(el=>el.textContent = PROFIL.formation);
  }

  /* --- Nav : marque la page active --- */
  const current = (location.pathname.split('/').pop() || 'index.html').replace('','');
  const page = current === '' ? 'index.html' : current;
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href') === page) a.classList.add('active');
  });

  /* --- Menu mobile --- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', ()=> links.classList.toggle('open'));
  }

  /* --- Nav qui se densifie au scroll --- */
  const nav = document.querySelector('.topnav');
  const onScroll = ()=>{ if(nav) nav.classList.toggle('scrolled', window.scrollY > 30); };
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  /* --- Révélations au scroll --- */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.12, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach((el,i)=>{ el.style.transitionDelay=(i%6*55)+'ms'; io.observe(el); });
});

/* =================================================================
   MODAL PARTAGÉ (compétences + projets)
   ================================================================= */
function setupModal(){
  const modal = document.getElementById('modal');
  if(!modal) return null;
  const close = ()=>{ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('locked'); };
  modal.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click', close));
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') close(); });
  return { modal, close };
}
