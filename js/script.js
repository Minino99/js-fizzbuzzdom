const resultBoxHtml = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    resultBoxHtml.innerHTML += `<div class="div col square fizzbuzzbg">fizzbuzz</div>`;
  } else if (i % 3 === 0) {
    resultBoxHtml.innerHTML += `<div class="div col square fizzbg">fizz</div>`;
  } else if (i % 5 === 0) {
    resultBoxHtml.innerHTML += `<div class="div col square buzzbg">buzz</div>`;
  } else {
    resultBoxHtml.innerHTML += `<div class="div col square">${i}</div>`;
  }
}
