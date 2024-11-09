(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function e(n){if(n.ep)return;n.ep=!0;const c=a(n);fetch(n.href,c)}})();document.addEventListener("DOMContentLoaded",function(){requestAnimationFrame(()=>{document.querySelectorAll(".nav-pill").forEach(t=>{t.classList.add("animate")})});function i(){const t=document.querySelector(".glitch");t&&setInterval(()=>{const o=Math.random()*10-5,l=Math.random()>.5?"#00F5FF":"#9D4EDD";t.style.transform=`translate(${o}px, ${o}px)`,t.style.textShadow=`2px 2px ${l}`,setTimeout(()=>{t.style.transform="translate(0, 0)",t.style.textShadow=""},50)},3e3)}function r(){const t=document.querySelector(".cyber-dots");if(!t)return;let o=0;setInterval(()=>{o=(o+1)%360,t.style.transform=`rotate(${o}deg)`},50)}function a(){document.querySelectorAll(".primary-btn, .secondary-btn").forEach(o=>{o.addEventListener("mousemove",l=>{const d=o.getBoundingClientRect(),f=l.clientX-d.left,u=l.clientY-d.top;o.style.setProperty("--x",`${f}px`),o.style.setProperty("--y",`${u}px`)})})}function e(){document.querySelectorAll(".nav-pill").forEach(o=>{o.addEventListener("mouseenter",()=>{o.style.transform="scale(1.05)",o.style.boxShadow="0 0 15px rgba(157, 78, 221, 0.5)"}),o.addEventListener("mouseleave",()=>{o.style.transform="scale(1)",o.style.boxShadow="none"})})}window.navigateTo=function(t){const o=document.getElementById(t);o&&(document.querySelectorAll(".nav-pill").forEach(l=>{l.classList.remove("active")}),event.currentTarget.classList.add("active"),o.scrollIntoView({behavior:"smooth",block:"start"}))};function n(){const t=document.querySelector(".cyber-circle");if(!t)return;let o=1,l=!0;setInterval(()=>{l?(o+=.01,o>=1.2&&(l=!1)):(o-=.01,o<=1&&(l=!0)),t.style.transform=`rotate(${Date.now()/50}deg) scale(${o})`},50)}function c(){const t=document.querySelector(".hero-description");if(!t)return;const o=t.textContent;t.textContent="";let l=0;function d(){l<o.length&&(t.textContent+=o.charAt(l),l++,setTimeout(d,50))}d()}function s(){const t=document.querySelector(".hero-content");t&&document.addEventListener("mousemove",o=>{const{clientX:l,clientY:d}=o,f=window.innerWidth/2,u=window.innerHeight/2,m=(l-f)/50,p=(d-u)/50;t.style.transform=`translate3d(${m}px, ${p}px, 0)`})}setTimeout(()=>{document.querySelectorAll(".nav-pill").forEach(t=>{t.classList.add("animate")})},100),i(),r(),a(),e(),n(),c(),s()});document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelectorAll(".achievement-card"),r=document.querySelector(".about-text");let a=!1,e;document.addEventListener("mousemove",n=>{if(a)return;const{clientX:c,clientY:s}=n,t=window.innerWidth/2,o=window.innerHeight/2;i.forEach((u,m)=>{const p=u.getBoundingClientRect(),h=p.left+p.width/2,g=p.top+p.height/2,y=1+m*.2,v=(g-s)/(30/y),x=(c-h)/(30/y),$=20+m*5;requestAnimationFrame(()=>{u.style.transform=`
                    perspective(1000px) 
                    rotateX(${v}deg) 
                    rotateY(${x}deg) 
                    translateZ(${$}px)
                    scale(${1+m*.02})
                `})}),E(c,s);const l=(c-t)/40,d=(s-o)/40,f=(c-t)/window.innerWidth*2;requestAnimationFrame(()=>{r.style.transform=`
                translate(${l}px, ${d}px) 
                rotateZ(${f}deg)
                scale(${1+Math.abs(l)/1e3})
            `})}),document.addEventListener("scroll",()=>{a=!0,i.forEach(n=>{n.style.transform="perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"}),clearTimeout(e),e=setTimeout(()=>{a=!1},150)})});function E(i,r){const a=document.body,e=window.innerWidth,n=window.innerHeight,c=i/e*100,s=r/n*100,t=`
        radial-gradient(
            circle at ${c}% ${s}%,
            rgba(79, 248, 210, 0.15),
            rgba(54, 204, 241, 0.15),
            rgba(41, 121, 255, 0.15),
            transparent 70%
        ),
        linear-gradient(
            ${45+c/5}deg,
            rgba(41, 121, 255, 0.1),
            rgba(101, 31, 255, 0.1)
        )
    `;a.style.backgroundImage=t}function w(){const i=document.createElement("div");i.className="background-shapes",document.body.appendChild(i);const r=["circle","square","triangle"],a=["#4ff8d2","#36ccf1","#2979ff","#651fff"];for(let e=0;e<15;e++){const n=document.createElement("div");n.className=`bg-shape ${r[e%r.length]}`,n.style.cssText=`
            left: ${Math.random()*100}vw;
            top: ${Math.random()*100}vh;
            animation: floatShape ${5+Math.random()*10}s linear infinite;
            animation-delay: -${Math.random()*10}s;
            opacity: ${.1+Math.random()*.2};
            background-color: ${a[e%a.length]};
            transform: scale(${.5+Math.random()}) rotate(${Math.random()*360}deg);
        `,i.appendChild(n)}}function L(){const i=document.querySelector(".particles-container"),r=["#4ff8d2","#36ccf1","#2979ff","#651fff"];function a(){const e=document.createElement("div");e.className="particle";const n=Math.random()*6+2,c=Math.random()*window.innerWidth,s=Math.random()*100,t=r[Math.floor(Math.random()*r.length)];e.style.cssText=`
            width: ${n}px;
            height: ${n}px;
            left: ${c}px;
            bottom: -20px;
            background: ${t};
            box-shadow: 0 0 ${n*2}px ${t};
            transform: translateZ(${s}px);
        `,i.appendChild(e);const o=3+Math.random()*2;e.style.animation=`
            floatParticle ${o}s linear,
            glowPulse ${o/2}s ease-in-out infinite alternate
        `,e.addEventListener("animationend",()=>e.remove())}setInterval(a,150)}function C(){const i=new IntersectionObserver(a=>{a.forEach(e=>{e.isIntersecting&&(e.target.classList.add("active"),e.target.style.transform="translateZ(0) rotateX(0) scale(1)",e.target.style.opacity="1")})},{threshold:.2});document.querySelectorAll(".achievement-card").forEach((a,e)=>{a.style.transform=`
            translateZ(-100px) 
            rotateX(20deg) 
            scale(0.8)
        `,a.style.opacity="0",a.style.transition=`
            transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${e*.2}s,
            opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${e*.2}s
        `,i.observe(a)})}function S(){document.querySelectorAll(".achievement-card").forEach((r,a)=>{let e=!1,n=null;const c=50+a*10;r.addEventListener("mouseenter",()=>{e=!0,r.style.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"}),r.addEventListener("mousemove",s=>{if(!e)return;const t=r.getBoundingClientRect(),o=t.left+t.width/2,l=t.top+t.height/2,d=s.clientX-o,u=(s.clientY-l)/(t.height/2)*15,m=d/(t.width/2)*15;n&&cancelAnimationFrame(n),n=requestAnimationFrame(()=>{r.style.transform=`
                    perspective(1000px) 
                    rotateX(${-u}deg) 
                    rotateY(${m}deg) 
                    translateZ(${c}px)
                    scale(1.05)
                `})}),r.addEventListener("mouseleave",()=>{e=!1,n&&cancelAnimationFrame(n),r.style.transition="transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",r.style.transform="perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)"})})}const M=`
    @keyframes floatParticle {
        0% {
            transform: translateY(0) translateX(0) translateZ(var(--z-offset, 0));
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(var(--x-offset, 0)) translateZ(var(--z-offset, 0));
            opacity: 0;
        }
    }

    @keyframes glowPulse {
        0% {
            filter: brightness(1);
        }
        100% {
            filter: brightness(1.5);
        }
    }

    @keyframes floatShape {
        0% {
            transform: translate(0, 0) rotate(0deg);
        }
        33% {
            transform: translate(100px, 100px) rotate(120deg);
        }
        66% {
            transform: translate(-50px, 200px) rotate(240deg);
        }
        100% {
            transform: translate(0, 0) rotate(360deg);
        }
    }

    body {
        background-color: #0a0a0a;
        transition: background-image 0.3s ease;
    }

    .background-shapes {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    }

    .bg-shape {
        position: absolute;
        width: 50px;
        height: 50px;
        filter: blur(2px);
    }

    .bg-shape.circle {
        border-radius: 50%;
    }

    .bg-shape.square {
        border-radius: 4px;
    }

    .bg-shape.triangle {
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    .achievement-card {
        transform-style: preserve-3d;
        backface-visibility: hidden;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .achievement-card.glow-up {
        box-shadow: 0 0 30px rgba(79, 248, 210, 0.6);
    }

    .particle {
        position: fixed;
        pointer-events: none;
        border-radius: 50%;
        transform-style: preserve-3d;
    }
`,b=document.createElement("style");b.textContent=M;document.head.appendChild(b);document.addEventListener("DOMContentLoaded",()=>{L(),C(),S(),w(),document.querySelectorAll(".achievement-card").forEach((i,r)=>{setTimeout(()=>{i.classList.add("active")},r*200)})});particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:["#64ffda","#63f7ff","#5ca8ff"]},shape:{type:["circle","triangle","polygon"],polygon:{nb_sides:6}},opacity:{value:.5,random:!0,animation:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,animation:{enable:!0,speed:2,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#64ffda",opacity:.2,width:1,triangles:{enable:!0,opacity:.1}},move:{enable:!0,speed:2,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:["repulse","bubble"]},onclick:{enable:!0,mode:["push","remove"]},resize:!0},modes:{repulse:{distance:100,duration:.4},bubble:{distance:200,size:6,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});function Y(i){const r=i.currentTarget,a=r.getBoundingClientRect(),e=i.clientX-a.left,n=i.clientY-a.top,c=a.width/2,s=a.height/2,t=(n-s)/10,o=-(e-c)/10;r.querySelectorAll(".project-header, .project-content").forEach((m,p)=>{const h=p*5;m.style.transform=`translateZ(${h}px)`}),r.style.transform=`
        perspective(1000px)
        rotateX(${t}deg)
        rotateY(${o}deg)
        translateZ(10px)
        scale3d(1.05, 1.05, 1.05)
    `;const d=Math.sqrt(Math.pow(e-c,2)+Math.pow(n-s,2))/100,f=(e-c)/5,u=(n-s)/5;r.style.boxShadow=`
        ${f}px ${u}px 20px rgba(100, 255, 218, ${.2+d*.1}),
        0 0 30px rgba(100, 255, 218, ${.1+d*.05}),
        inset 0 0 15px rgba(100, 255, 218, ${.1+d*.05})
    `,r.style.borderColor=`rgba(100, 255, 218, ${.5+d*.2})`}function q(i){const r=document.querySelectorAll(".project-card"),a=50;r.forEach((e,n)=>{e.style.transition="all 0.4s ease-in-out",setTimeout(()=>{i==="all"||e.getAttribute("data-category")===i?(e.style.display="block",e.style.opacity="1",e.style.transform="scale(1) translateY(0)"):(e.style.opacity="0",e.style.transform="scale(0.8) translateY(20px)",setTimeout(()=>{e.style.display="none"},400))},n*a)})}const X=new IntersectionObserver(i=>{i.forEach((r,a)=>{r.isIntersecting&&setTimeout(()=>{r.target.style.transform="translateY(0) scale(1)",r.target.style.opacity="1"},a*100)})},{threshold:.1,rootMargin:"0px"});function A(i,r){const a=["#64ffda","#63f7ff","#5ca8ff"],e=a[Math.floor(Math.random()*a.length)],n=document.createElement("div");n.className="ripple";const c=Math.max(r.offsetWidth,r.offsetHeight);n.style.width=n.style.height=`${c}px`;const s=r.getBoundingClientRect();n.style.left=`${i.clientX-s.left-c/2}px`,n.style.top=`${i.clientY-s.top-c/2}px`,n.style.backgroundColor=e,r.appendChild(n),n.addEventListener("animationend",()=>{n.remove()})}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".project-card").forEach(e=>{e.addEventListener("mousemove",Y),e.addEventListener("mouseleave",handleCardLeave),X.observe(e)});const r=document.querySelectorAll(".filter-btn");r.forEach(e=>{e.addEventListener("click",n=>{r.forEach(c=>c.classList.remove("active")),e.classList.add("active"),q(e.getAttribute("data-filter"))})}),document.querySelectorAll(".project-stack span").forEach(e=>{e.addEventListener("mouseover",n=>A(n,e))});const a=document.querySelector('.filter-btn[data-filter="all"]');a&&a.click()});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".tilt-card").forEach(s=>{if(!s)return;const t=l=>{const d=s.getBoundingClientRect(),f=l.clientX-d.left,u=l.clientY-d.top,m=d.width/2,p=d.height/2,h=(u-p)/10,g=(m-f)/10;s.style.transform=`perspective(1000px) rotateX(${-h}deg) rotateY(${g}deg)`;const y=f/d.width*100,v=u/d.height*100;s.style.setProperty("--mouse-x",`${y}%`),s.style.setProperty("--mouse-y",`${v}%`)},o=()=>{s.style.transform="perspective(1000px) rotateX(0) rotateY(0)",s.style.transition="transform 0.5s ease"};s.addEventListener("mousemove",t),s.addEventListener("mouseleave",o)});function r(s,t){let o=0;const l=2e3,d=60,f=t/d,u=l/d,m=setInterval(()=>{o+=f,o>=t?(s.textContent=Math.round(t),clearInterval(m)):s.textContent=Math.round(o)},u)}const a={threshold:.1,rootMargin:"0px"},e=new IntersectionObserver(s=>{s.forEach(t=>{if(t.target&&t.isIntersecting){if(t.target.classList.add("visible"),t.target.classList.contains("stat-card")){const o=t.target.querySelector(".stat-number");if(o&&o.dataset.target){const l=parseInt(o.dataset.target);r(o,l)}}t.target.classList.contains("section-title")&&(t.target.style.animation="titleFloat 3s ease-in-out infinite")}})},a);document.querySelectorAll(".animate-on-scroll, .stat-card, .section-title").forEach(s=>{s&&e.observe(s)}),document.querySelectorAll(".glitch-text").forEach(s=>{if(!s)return;const t=s.dataset.text;t&&s.setAttribute("data-text",t)})});
//# sourceMappingURL=index-BsoXd_G3.js.map
