
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        }
    });
});


const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.addEventListener('DOMContentLoaded', function() {
    
    const swiper1 = new Swiper('.mySwiper1', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    const swiper2 = new Swiper('.mySwiper2', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    
});

window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollPosition = window.scrollY;
    
    const progress = (scrollPosition / documentHeight) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
});

// Функция для открытия картинки в полном размере
function openFullscreen(button) {
    const img = button.previousElementSibling; // Берём картинку перед кнопкой
    const imgSrc = img.src;
    const imgAlt = img.alt;
    
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    modal.style.zIndex = '10000';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.cursor = 'zoom-out';
    modal.style.flexDirection = 'column';
    
    // Создаем картинку в модальном окне
    const fullscreenImg = document.createElement('img');
    fullscreenImg.src = imgSrc;
    fullscreenImg.alt = imgAlt;
    fullscreenImg.style.maxWidth = '90%';
    fullscreenImg.style.maxHeight = '80%';
    fullscreenImg.style.objectFit = 'contain';
    fullscreenImg.style.borderRadius = '8px';
    fullscreenImg.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    
    // Создаем подпись
    const caption = document.createElement('div');
    caption.textContent = imgAlt;
    caption.style.color = 'white';
    caption.style.marginTop = '20px';
    caption.style.fontSize = '18px';
    caption.style.textAlign = 'center';
    caption.style.maxWidth = '80%';
    
    // Добавляем элементы в модальное окно
    modal.appendChild(fullscreenImg);
    modal.appendChild(caption);
    
    // Закрытие по клику
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // Закрытие по ESC
    function closeOnEsc(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.removeEventListener('keydown', closeOnEsc);
        }
    }
    document.addEventListener('keydown', closeOnEsc);
    
    // Добавляем модальное окно на страницу
    document.body.appendChild(modal);
    
    // Предотвращаем закрытие при клике на саму картинку
    fullscreenImg.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Добавь в katyn.js
document.getElementById('hamburger').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    const progressBar = document.getElementById('progress-bar');
    const isMenuOpen = navMenu.classList.contains('active');
    
    if (isMenuOpen) {
        // Меню открывается - скрываем прогресс-бар
        progressBar.style.display = 'none';
    } else {
        // Меню закрывается - показываем прогресс-бар
        progressBar.style.display = 'block';
    }
});

// Восстанавливаем прогресс-бар при клике на ссылки
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 991) {
            setTimeout(() => {
                document.getElementById('progress-bar').style.display = 'block';
            }, 300);
        }
    });
});