let question = Array.from(document.querySelectorAll('.question-section'));
let hidden = Array.from(document.querySelectorAll('.hidden'));
let plus = Array.from(document.querySelectorAll('.plus'));

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', () => {
    if (hidden[i].style.display == 'none') {
      hidden[i].style.display = 'block';
      plus[i].classList.add('plus-rotate');
    } else {
      hidden[i].style.display = 'none';
      plus[i].classList.remove('plus-rotate');
    }
  })
}


