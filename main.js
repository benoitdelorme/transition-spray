import './style.css'
import gsap from "gsap"

let toggle = 0

document.addEventListener('click', () => {
  let svg = document.querySelector('svg')
  let path = svg.querySelector('path')
  let randomColor = Math.floor(Math.random()*16777215).toString(16);

  if(!toggle) { 
    gsap.to(path, { duration: 1, delay:0.1, strokeWidth: 230, ease: "cubic-1"})
    gsap.to(path, { duration: 1, strokeDashoffset: 0, ease: "cubic-1"})
  } else {
    gsap.to(path, { duration: 1, delay:0.1, strokeWidth: 0, ease: "cubic-1"})
    gsap.to(path, { duration: 1, strokeDashoffset: path.getTotalLength(), ease: "cubic-1"})
  }
  
  gsap.to(path, { duration: 0.6, stroke: "#"+randomColor})

  toggle = !toggle
})