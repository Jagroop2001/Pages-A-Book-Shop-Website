
let typeSplit = new SplitType('.gsap2', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('.gsap2 .char', {
  opacity: 0.3,
  duration: 0.5,
  ease: 'power1.out',
  stagger: 0.1,
  
})