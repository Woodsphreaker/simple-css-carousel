document
.querySelector('#items')
.addEventListener('wheel', (event) => {
  const {
    deltaY,
    target
  } = event

  if (deltaY > 0) {
    console.log('up', target)
    target.scrollBy(300,0)
  }

  if (deltaY < 0) {
    console.log('down')
    target.scrollBy(-300,0)
  }

})