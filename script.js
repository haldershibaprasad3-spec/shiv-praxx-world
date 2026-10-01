const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{
  glow.style.left=e.clientX+"px"; glow.style.top=e.clientY+"px";
});
const reveals=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver(entries=>{
  entries.forEach((entry,i)=>{
    if(entry.isIntersecting){
      entry.target.style.transitionDelay=(entry.target.closest(".skill-grid,.project-list,.about-grid") ? (i%4)*70 : 0)+"ms";
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

const nav=document.querySelector(".nav"), menu=document.querySelector(".menu");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    const target=document.querySelector(a.getAttribute("href"));
    if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth"});}
  });
});
