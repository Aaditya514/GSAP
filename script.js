// gsap.from("#box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:0.5,
// })
// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:0.5,
// })

// gsap.to("#box2",{
//     x:500,
//     y:300,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"purple",
// })

// gsap.from("h1",{
//     // color:"red",
//     opacity:0,
//     y:30,
//     duration:2,
//     delay:1,
//     stagger:1
// })

// gsap.to("#box",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat:-1,  // Repeat the animation once
//     yoyo:true, // Make the animation alternate back and forth
//     backgroundColor:"blue",
//     scale:0.5,
//     borderRadius:"50%",
// })

// gsap.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1,
// })
// gsap.to("#box2",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:2.5,
// })
// gsap.to("#box3",{
//     x:1500,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4,
// })
// var tl = gsap.timeline();

// tl.to("#box1",{
//      x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1,
// })
// tl.to("#box2",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5,
// })
// tl.to("#box3",{
//     x:1500,
//     borderRadius:"50%",
//     duration:1.5,
// })

// tl.from("h2", {
//   y: -30,
//   opacity: 0,
//   duration: 1,
//   delay: 0.5,
// });
// tl.from("h4", {
//   y: -30,
//   opacity: 0,
//   duration: 1,
//   delay: 0.5,
//   stagger: 0.3,
// });


//Scroll Trigger

// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,

// })
// gsap.from("#page2 #box",{
//     scale:0,
//     opacity:0,
//     duration:1,
//     rotate:720,
//     scrollTrigger: {
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers :true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2,    // Scrub the animation to the scroll position from 1 to 5
//         pin:true, // Pin the element during the scroll
//     } 
// })

// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//     }
// })
// gsap.from("#page2 h2",{
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//     }
// })
 // for pinning the animation as we scroll the h1 element on page2 as we scroll 
gsap.to("#page2 h1", {
    transform:"translateX(-175%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%", //for starting the animation as we reach that page's start
        end:"top -100%", //for ending the animation as we reach that page's end
        scrub:2, // Scrub the animation to the scroll position from 1 to 5
        pin:true, // Pin the element during the scroll
    }
})