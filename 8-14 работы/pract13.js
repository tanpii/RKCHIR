// ЗАДАНИЕ 1

document.addEventListener("DOMContentLoaded", function() {
  replaceImg();
  let task1 = document.querySelector(".task1");
  task1.addEventListener("click", function(event) {
    let coord = document.querySelector('.coord');
    coord.textContent = 'x: ' + event.clientX + ', y: ' + event.clientY;
  })
})

window.addEventListener('resize', function() {
  replaceImg();
});

function replaceImg() {
  let task1Img = document.querySelector(".task1-img");
  task1Img.style.top = ((window.innerHeight - task1Img.offsetHeight) / 2) + 'px';
  task1Img.style.left = ((window.innerWidth - task1Img.offsetWidth) / 2) + 'px';
}

// ЗАДАНИЕ 2

let notificationCounter = 0;
let notificationInterval;
let notifications = ["🍪 Новое печенье OREO BOOM уже в продаже", "🧸 Промокод на покупку CRUNCH10 для вас", "💝 Подарок PINK BANG для вас", "🧸 Бесплатная доставка для первого заказа", 
"📦 Доставка бесплатная 27 ноября", "💗 MONSTER CRUNCH любит вас всем сердцем", "☕️ Пейте чай с нашими печеньками!", "🍰 Торт или печенье, что лучше?", "🕶️ Оставляй отзывы на MONSTER CRUNCH"]

function startNotifications() {
  notificationInterval = setInterval(addNotification, 1000);
}

function stopNotifications() {
  clearInterval(notificationInterval);
}

function addNotification() {
  notificationCounter++;
  const notificationsDiv = document.querySelector('.notifications');
  const notification = document.createElement('div');
  const notificationText = notifications[notificationCounter % 9];
  notification.innerHTML = `<span class="notification-emoji">${String.fromCodePoint(notificationText.codePointAt(0))}</span> <span class="notification-text">${notificationText.slice(2)}</span> <i class="fa-solid fa-circle-xmark"></i>`;
  notificationsDiv.appendChild(notification);
  notification.classList.add('notification');
  // обновляем счетчик новых уведомлений
  updateNotificationCounter();
}

function updateNotificationCounter() {
  const counterElement = document.querySelector('.notification-counter');
  if (counterElement) {
    counterElement.innerText = `Новых уведомлений: ${notificationCounter}`;
  } else {
    const notificationsContainer = document.querySelector('.notification-container');
    const counter = document.createElement('div');
    counter.classList.add('notification-counter');
    counter.innerText = `Новых уведомлений: ${notificationCounter}`;
    notificationsContainer.append(counter);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let notifications = document.querySelector(".notifications");
  notifications.addEventListener("click", function(event) {
    let notificationDelete = event.target;
    if (notificationDelete.classList.contains('fa-circle-xmark')) {
      let notification = notificationDelete.parentNode;
      notification.remove();
      notificationCounter--;
      const counterElement = document.querySelector('.notification-counter');
      counterElement.innerText = `Новых уведомлений: ${notificationCounter}`;
    }
  })
})

// ЗАДАНИЕ 3

function parallaxScroll() {
  var scrollPosition = window.scrollY;

  var task3 = document.querySelector('.task3');
  var task3OffsetTop = task3.offsetTop; // позиция верхнего края task3 относительно верха страницы
  var task3Height = task3.offsetHeight; // высота task3

  var windowHeight = window.innerHeight;

  if (
    scrollPosition > task3OffsetTop - windowHeight &&
    scrollPosition < task3OffsetTop + task3Height
  ) {
    var distanceFromTop = scrollPosition - (task3OffsetTop - windowHeight);

    var flowers = document.querySelector('.background');
    var monster1 = document.getElementById('monster1');
    var text = document.getElementById('text');

    if (monster1 && text) {
      var parallaxOffsetFlowers = (distanceFromTop * 0.4) + 'px';
      var parallaxOffsetMonster1 = (distanceFromTop * -0.6) + 'px';
      var parallaxOffsetText = (distanceFromTop * 0.8) + 'px';

      flowers.style.transform = 'translateY(' + parallaxOffsetFlowers + ')';
      monster1.style.transform = 'translateY(' + parallaxOffsetMonster1 + ')';
      text.style.transform = 'translateY(' + parallaxOffsetText + ')';
    }
  }
}
window.addEventListener('scroll', parallaxScroll);

// ЗАДАНИЕ 4

let pics = ['images/cats/cat1.jpg', 'images/cats/cat2.jpg', 'images/cats/cat3.jpg', 'images/cats/cat4.jpg', 'images/cats/cat5.jpg', 'images/cats/cat6.jpg', 'images/cats/cat7.jpg', 'images/cats/cat8.jpg', 'images/cats/cat9.jpg']
let info = ['≽^•⩊•^≼', 'зевает', '•ᴗ•', 'кот', '(ฅ^•ﻌ•^ฅ)', 'ещё кот',
"(´⊙ω⊙`)ᵒᵐᵍᵎᵎᵎ", "ᨐᵉᵒʷ", "( ͡° ͜ʖ ͡°)"]
let iterator = 0;
function loadMoreContent() {
    // создаем новый элемент картинки
    const newImage = document.createElement('img');
    newImage.src = pics[iterator % pics.length];

    // создаем новый элемент с текстом
    const newText = document.createElement('p');
    newText.textContent = info[iterator % pics.length];
    
    const newSpan = document.createElement('span');

    // находим элемент с классом infoCard внутри элемента с классом infoBlock
    const infoCard = document.querySelector('.infoBlock .infoCard');
    iterator++;
    
    // добавляем созданные элементы в infoCard
    infoCard.appendChild(newImage);
    infoCard.appendChild(newText);
    infoCard.appendChild(newSpan);
}

function checkPosition() {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
  
    // Записываем, сколько пикселей пользователь уже проскроллил:
    const scrolled = window.scrollY;
  
    // Обозначим порог, по приближении к которому
    // будем вызывать какое-то действие.
    // В нашем случае — четверть экрана до конца страницы:
    const threshold = height - screenHeight / 4;
  
    // Отслеживаем, где находится низ экрана относительно страницы:
    const position = scrolled + screenHeight;
  
    if (position >= threshold) {
      loadMoreContent();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', checkPosition);
});