# My Portfolio

This is my portfolio that turned in to my biggest passion project so far! I acually find this project more exhilarating than the individual portfolio projects it contains. It's an expression of my personal style and technical journey.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

    - Experience a nostalgic, colorful, and playful 90s computer desktop environment.
    - Effortlessly navigate through the portfolio in both Swedish and English.
    - Enjoy the site's full responsiveness, ensuring a seamless experience across various devices and screen sizes.
    - Utilize a sophisticated scroll function, especially on smaller screens, for smooth and intuitive navigation.
    - Interact with a dynamic UI, showcasing my projects in a unique, engaging manner.

### Links

- Solution URL: [Netlify](https://andrea-axelsson-portfolio.netlify.app/)

## My process

### Built with

    - React & Custom Hooks: Leveraged the power of React and custom hooks for state management and UI interactivity.
    - Reusable Code: Emphasized on writing reusable components to avoid redundancy and maintain code efficiency.
    - Flexbox Layout: Used Flexbox for layout arrangements due to its flexibility and ease of use over Grid.
    - React Refs: Utilized useRef() for DOM manipulation, marking my shift from traditional JavaScript approaches like getElementById.

### What I learned

This project was a significant learning curve for me, particularly in mastering React's features such as state management, useRef(), and conditional rendering. I faced a notable challenge in implementing the scroll functionality; initially starting with if-else statements, I later moved to a more efficient useEffect and scrollToElement function, which greatly improved the user experience.

```js
const scrollToElement = (windowId) => {
    setTriggerScroll(windowId)
  }

  const scrollToProjectWindows = () => {
    scrollToElement(3);
  };

  const portfolioRef = useRef()
  const contactRef = useRef()
  const aboutRef = useRef()
  const projectRef = useRef()

  const windowRefs = {
    1: aboutRef,
    2: contactRef,
    3: projectRef,
    4: portfolioRef,
  }

  useEffect(() => {
    if (triggerScroll && windowRefs[triggerScroll] && windowRefs[triggerScroll].current) {
      windowRefs[triggerScroll].current.scrollIntoView({behavior: "smooth", block: "center"})
      setTriggerScroll(null)
    }
  }, [triggerScroll])
}
```

The project also gave me the chance to fully dive into UI design, exploring styles that truly represent me. The result was a nostalgic, colorful and playful 90s computer desktop, with a design that is fully responsive.

Incorporating a bilingual feature into my project was a delightful and rewarding experience. Users can now enjoy exploring my portfolio in both Swedish and English, enhancing accessibility and personalization.

One of the areas I found challenging was CSS class naming. While I tried using BEM methodology, I believe there is room for improvement in its consistent application throughout the project.

### Continued development

Moving forward, I plan to further enhance this portfolio project by adding more features like games (e.g., Minesweeper), a music player, and Easter eggs to gamify the experience. I also aim to improve my understanding and application of BEM methodology in CSS.

## Author

- GitHub - [Andrea Axelsson](https://github.com/Andrea-Axelsson)
- LinkedIn - [Andrea Axelsson](https://www.linkedin.com/in/axelsson-andrea/)
