// from GSAP
let typeSplit = new SplitType('.gsap1', {
    types: 'lines, words, chars',
    tagName: 'span'
  })
  
  gsap.from('.gsap1 .word', {
    y: '100%',
    opacity: 0,
    duration: 0.5,
    ease: 'power1.out',
    stagger: 0.1
  })