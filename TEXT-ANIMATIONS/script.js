function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent; // Select the h1 element and get its text content

  var splittedText = h1Text.split(""); // Split the text content into an array of individual characters
  var halfValue = Math.floor(splittedText.length / 2); // Calculate the halfway point of the text length

  var clutter = ""; // Initialize an empty string to hold the new HTML structure

  splittedText.forEach((elem, idx) => {
    if(idx<=halfValue){
        clutter += `<span class="front">${elem}</span>`;
    }else{
        clutter += `<span class="back">${elem}</span>`;
    }
  });
  h1.innerHTML = clutter; // Set the innerHTML of the h1 element to the new HTML structure
}
breakTheText();
// Animation for the first half of the text
gsap.from(".front",{// Select all elements with the class "front"
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.15,
    ease:"back.out(1.7)"
})
// Animation for the second half of the text
gsap.from(".back",{// Select all elements with the class "back"
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:-0.15,
    ease:"back.out(1.7)"
})
// last gsap animation I added on my own trying some other stuff for future 
gsap.to("h1",{
    color:"#8000ffff",
    scale:0.25,
    x: -window.innerWidth / 2.25 , 
    y: -window.innerHeight / 2.25 , 
    delay:3,
    duration:2
})
