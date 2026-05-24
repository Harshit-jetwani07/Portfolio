const progress=document.getElementById("progress");

window.addEventListener("scroll",()=>{
const scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
progress.style.width=height>0?`${(scrollTop/height)*100}%`:"0";
});

const roles=["Data Scientist","Full Stack Developer","Problem Solver"];
let roleIndex=0;
let charIndex=0;
let deleting=false;

function type(){
const el=document.getElementById("typing");
const current=roles[roleIndex];
el.textContent=current.substring(0,charIndex);

if(!deleting && charIndex<current.length){
charIndex++;
}else if(deleting && charIndex>0){
charIndex--;
}else if(!deleting && charIndex===current.length){
deleting=true;
setTimeout(type,900);
return;
}else{
deleting=false;
roleIndex=(roleIndex+1)%roles.length;
}

setTimeout(type,deleting?55:95);
}

type();

if(window.particlesJS){
particlesJS("particles-js",{
particles:{
number:{value:170,density:{enable:true,value_area:900}},
color:{value:"#94a3b8"},
shape:{type:"circle"},
opacity:{value:0.80,random:true},
size:{value:4,random:true},
line_linked:{enable:true,distance:135,color:"#64748b",opacity:0.22,width:1},
move:{enable:true,speed:6,direction:"none",random:false,straight:false,out_mode:"out"}
},
interactivity:{
detect_on:"canvas",
events:{onhover:{enable:true,mode:"grab"},onclick:{enable:true,mode:"push"},resize:true},
modes:{grab:{distance:150,line_linked:{opacity:0.5}},push:{particles_nb:3}}
},
retina_detect:true
});
}
