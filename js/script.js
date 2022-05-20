const resultBoxHtml = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
   console.log("FizzBuzz")
    resultBoxHtml.innerHTML += `<div class="div col square fizzbuzzbg">fizzbuzz</div>`;
  } else if (i % 3 === 0) {
   console.log("Fizz")
    resultBoxHtml.innerHTML += `<div class="div col square fizzbg">fizz</div>`;
  } else if (i % 5 === 0) {
   console.log("Buzz")
    resultBoxHtml.innerHTML += `<div class="div col square buzzbg">buzz</div>`;
  } else {
   console.log(i)
    resultBoxHtml.innerHTML += `<div class="div col square">${i}</div>`;
  }
}
