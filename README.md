
# GSAP  Playground 🚀

Welcome to my **GSAP learning project**

This repo is where I experiment with animations using [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/). It's hands-on, beginner-friendly, and constantly evolving as I learn.

---

## 📌 What I've Learned So Far

✅ Basic GSAP animations  
✅ ScrollTrigger: triggering animations on scroll  
✅ Pinning elements while scrolling  
✅ Scrubbing animations  
✅ Scroll-based timelines

---

## 🔧 Tech Stack

- **GSAP** (core + ScrollTrigger plugin)
- HTML5
- CSS3
- JavaScript
- VS Code

---

## 📁 Project Structure

```
/gsap-scrolltrigger-playground
├── index.html         # Main HTML file
├── style.css          # Styling for the layout and elements
├── script.js          # GSAP + ScrollTrigger animations
```

---

## ✨ Features

- Smooth, scroll-triggered animations using GSAP
- Element pinning and scrubbing effects
- Responsive design with animated sections
- Experimental playground for testing scroll ideas

---

## 📸 Demo

> A live demo will be added soon (maybe via GitHub Pages).

---

## 🧠 Notes to Self

### 🔹 Common GSAP Methods

- `gsap.to(target, vars)`: Animates to the given properties  
- `gsap.from(target, vars)`: Starts from the given properties and animates to current  
- `gsap.timeline()`: Chains multiple animations with more control  
- `yoyo: true`: Makes the animation reverse after finishing  
- `stagger: value`: Adds delay between each item in a group (e.g., `stagger: 0.2`)  

### 🔹 ScrollTrigger Options & Concepts

- `ScrollTrigger.create({ ... })`: Manually create a scroll-triggered animation  
- `trigger`: Element that starts the scroll trigger  
- `start`: When the animation starts (e.g., `"top 80%"`)  
- `end`: When the animation ends (e.g., `"bottom 20%"`)  
- `scrub: true`: Syncs animation progress with scroll position  
- `pin: true`: Keeps the element "stuck" during the animation  
- `toggleActions`: Controls play/pause/reset on scroll in/out (e.g., `"play pause resume reset"`)  
- `markers: true`: Shows visual markers to debug scroll position  

```js
// Example ScrollTrigger
gsap.to(".box", {
  x: 500,
  duration: 2,
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
    pin: true,
    toggleActions: "play pause resume reverse",
    markers: true
  }
});
```

---

## 🔄 Next Steps

- [ ] Add more sections with unique scroll effects
- [ ] Create custom cursor,text,timeline animation
- [ ] Animate SVGs on scroll
- [ ] Deploy live demo

---

## 📚 Resources

- [GSAP Docs](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/scrolltrigger/)
- [GSAP Starter CodePens](https://codepen.io/GreenSock)

---

## 🙌 Contributing

I'm learning, but if you want to suggest improvements or share your GSAP tips, feel free to open an issue or PR!

---

## License

This project is for learning purposes. Free to use and modify.
