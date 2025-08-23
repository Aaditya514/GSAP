var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline()
tl.to("#full",{
    right:"0",
    duration:0.5,
})

tl.from("#full h4",{
    x:150,
    duration:0.6,
    stagger:0.25, // for multiple elements to animate one after another
    opacity:0,
})

tl.from("#full i",{
    opacity:0,
    rotate:270,
    duration:0.3
})

tl.pause()

menu.addEventListener("click",()=>{
    tl.play()
})
cross.addEventListener("click",()=>{
    tl.reverse();
    
})