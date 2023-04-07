var lang = 'en';

var resources = {
  en: {
    title: 'Q&A System',
    langEn: 'English',
    langZh: '中文',
    showAnswer: 'Show Answer',
    hideAnswer: 'Hide Answer',
  },
  zh: {
    title: '問答系統',
    langEn: 'English',
    langZh: '中文',
    showAnswer: '顯示答案',
    hideAnswer: '隱藏答案',
  },
};

function localize() {
  var elements = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < elements.length; i++) {
    var key = elements[i].getAttribute('data-i18n');
    elements[i].innerHTML = resources[lang][key];
  }
}

localize();

var xhr = new XMLHttpRequest();
xhr.open('GET', 'question.json', true);
xhr.onload = function () {
  if (xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    var questions = data[lang];
    var output = '';
    for (var i in questions) {
      if (questions[i].id > 3) {
        // 只顯示id大於3的題目
        output += '<div class="question">';
        output += '<h2>' + questions[i].title + '</h2>';
        output += '<p class="answer">' + questions[i].answer + '</p>';
        output +=
          '<button class="show-answer">' +
          resources[lang].showAnswer +
          '</button>';
        output += '</div>';
      }
    }
    document.getElementById('questions').innerHTML = output;
    var buttons = document.querySelectorAll('.show-answer');
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].addEventListener('click', function () {
        var answer = this.parentNode.querySelector('.answer');
        if (answer.style.display === 'none') {
          answer.style.display = 'block';
          this.innerHTML = resources[lang].hideAnswer;
        } else {
          answer.style.display = 'none';
          this.innerHTML = resources[lang].showAnswer;
        }
      });
    }
  }
};
xhr.send();

var langButtons = document.querySelectorAll('.lang-button');

for (var j = 0; j < langButtons.length; j++) {
  langButtons[j].addEventListener('click', function () {
    lang = this.getAttribute('data-lang');
    localize();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'question.json', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var questions = data[lang];
        var output = '';
        for (var i in questions) {
          if (questions[i].id > 3) {
            // 只顯示id大於3的題目
            output += '<div class="question">';
            output += '<h2>' + questions[i].title + '</h2>';
            output += '<p class="answer">' + questions[i].answer + '</p>';
            output +=
              '<button class="show-answer">' +
              resources[lang].showAnswer +
              '</button>';
            output += '</div>';
          }
        }
        document.getElementById('questions').innerHTML = output;
        var buttons = document.querySelectorAll('.show-answer');
        for (var j = 0; j < buttons.length; j++) {
          buttons[j].addEventListener('click', function () {
            var answer = this.parentNode.querySelector('.answer');
            if (answer.style.display === 'none') {
              answer.style.display = 'block';
              this.innerHTML = resources[lang].hideAnswer;
            } else {
              answer.style.display = 'none';
              this.innerHTML = resources[lang].showAnswer;
            }
          });
        }
      } else {
        console.log('Error: ' + xhr.status);
      }
    };
    xhr.send();
  });
}
