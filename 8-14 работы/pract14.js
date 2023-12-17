// TASK 1

let contents = document.getElementById('contents');

contents.addEventListener('click', function(event) {
  let element = event.target;
  if (element.tagName.toLowerCase() === 'a') {
    event.preventDefault();
    const result = confirm('Вы точно хотите перейти по ссылке?');
    if (result) {
      window.open(element.href, '_blank');
    }
  }
})

// TASK 2

let images = document.querySelector('.images');

images.addEventListener('click', function(event) {
  let currentImage = document.getElementById('current-img');
  let newImage = event.target;
  if (newImage.tagName.toLowerCase() === 'img') {
    currentImage.src = newImage.src;
  }
})

// TASK 3

document.addEventListener('DOMContentLoaded', function() {
  let cards = document.querySelectorAll('.card');

  cards.forEach(currentCard => {
    currentCard.addEventListener('click', function(event) {
      let ctrlPressed = event.ctrlKey || event.metaKey;
      event.preventDefault();

      if (!ctrlPressed) {
        cards.forEach(card => {
          if(card != currentCard)
            card.classList.remove('selected');
        })
      }
      
      // Выделяем текущий элемент
      currentCard.classList.toggle('selected');
    })
  }) 
})

// TASK 4

document.addEventListener('DOMContentLoaded', function() {
  let slider = document.querySelector('.slider');
  let handle = slider.querySelector('.handle');
  let task4 = document.querySelector('.task4');
  let isDragging = false;

  handle.addEventListener('mousedown', function(event) {
    isDragging = true;
    event.preventDefault();
  });

  task4.addEventListener('mousemove', function(event) {
    if (isDragging) {
      let sliderRect = slider.getBoundingClientRect();
      let newPosition = event.clientX - sliderRect.left;

      // Ограничиваем координаты перемещения бегунка в пределах слайдера
      if (newPosition < 0) {
        newPosition = 0;
      } else if (newPosition > sliderRect.width - handle.offsetWidth) {
        newPosition = sliderRect.width - handle.offsetWidth;
      }

      handle.style.left = newPosition + 'px';
    }
  });

  task4.addEventListener('mouseup', function() {
    isDragging = false;
  });
});

// TASK 5

document.addEventListener('DOMContentLoaded', function() {
  const cart = document.querySelector('.cart');
  const totalPriceElement = document.getElementById('totalPrice');
  const cartItems = document.querySelector('.cart-items');
  let totalPrice = 0;

  // Отменяем действие по умолчанию при dragover
  cart.addEventListener('dragover', function(event) {
    event.preventDefault();
  });

  // Обработчик события drop
  cart.addEventListener('drop', function(event) {
    event.preventDefault();

    // Получаем данные из перетаскиваемого элемента
    const itemName = event.dataTransfer.getData('text');
    const itemPrice = parseFloat(itemName.split('$')[1]);

    if (!isNaN(itemPrice)) {
      // Обновляем общую стоимость
      totalPrice += itemPrice;
      totalPriceElement.textContent = totalPrice;

      // Создаем новый элемент в корзине без изображения
      const newItem = document.createElement('div');
      newItem.textContent = `--> ${itemName}`;
      cartItems.appendChild(newItem);
    }
  });

  // Обработчик события dragstart для перетаскиваемых элементов
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    product.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text', this.innerText);
    });
  });
});

// TASK 6 

const animatedElement = document.querySelector('.dance');
const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f'];
let currentColorIndex = 0;

function changeColor() {
  animatedElement.style.transition = 'background-color 1s ease-in-out';
  animatedElement.style.backgroundColor = colors[currentColorIndex];

  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

setInterval(changeColor, 1000);

const dancingCat = document.getElementById('dancing-cat');
let step = 0;
let transformX = 0;
let direction = 1;

function dance() {
  if (step % 6 === 0 && step !== 0) {
    direction *= -1;
    step = 0;
    return;
  }

  dancingCat.style.transform = `translateX(${transformX}px) scaleX(${-direction})`;
  transformX += direction * 70;
  step++;
}

setInterval(dance, 500);


