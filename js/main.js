const INTERFACE = {
  BUTTON: {
    PLUS: document.querySelector('.plus'),
    MINUS: document.querySelector('.minus'),
    CLEAR: document.querySelector('.clear'),
  },
  OUT: document.querySelector('.out')
}

function counterTest() {
  const isCounterNotOk = typeof(Number(localStorage.counter)) !== "number" || isNaN(Number(localStorage.counter))

  if(isCounterNotOk){
    console.log(typeof(Number(localStorage.counter)));
    console.log(localStorage.counter);
    localStorage.counter = 0
  }
}

function show() {
  INTERFACE.OUT.innerText = localStorage.counter
}

function plus() {
  localStorage.counter++
  show()
}

function minus() {
  localStorage.counter--
  show()
}

function clear() {
  localStorage.clear()
  localStorage.counter = 0
  show()
}

counterTest()
show()
INTERFACE.BUTTON.PLUS.addEventListener('click', plus)
INTERFACE.BUTTON.MINUS.addEventListener('click', minus)
INTERFACE.BUTTON.CLEAR.addEventListener('click', clear)


