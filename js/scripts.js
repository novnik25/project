// ====== Анимация при прокрутке ======
document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для навигации
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Анимация появления элементов при скролле
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .testimonial, .quote');
        elements.forEach(el => {
            const elPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            if (elPosition < screenPosition) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Начальные стили для анимации
    document.querySelectorAll('.service-card, .testimonial, .quote').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Инициализация при загрузке

    // ====== Слайдер для отзывов ======
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'flex' : 'none';
        });
    }

    // Инициализация слайдера
    if (testimonials.length > 0) {
        showTestimonial(0);
        
        // Автопереключение каждые 5 сек
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    // ====== Обработка форм ======
    // Форма входа
    const loginForm = document.querySelector('#login form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Вход выполнен! (Это демо, данные не отправляются)');
            this.reset();
        });
    }

    // Форма пробной версии
    const trialForm = document.querySelector('#trial form');
    if (trialForm) {
        trialForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо! Доступ к пробной версии активирован. Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }

    // ====== Поиск по сайту ======
    const searchInput = document.querySelector('.search-section input');
    const searchButton = document.querySelector('.search-section button');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchText = searchInput.value.toLowerCase();
            if (searchText.trim() === '') {
                alert('Введите поисковый запрос');
                return;
            }
            
            // Простой поиск по тексту страницы (для демо)
            const elements = document.querySelectorAll('h2, h3, p, li');
            let found = false;
            
            elements.forEach(el => {
                if (el.textContent.toLowerCase().includes(searchText)) {
                    el.style.backgroundColor = '#ffeb3b';
                    setTimeout(() => {
                        el.style.backgroundColor = '';
                    }, 2000);
                    if (!found) {
                        el.scrollIntoView({ behavior: 'smooth' });
                        found = true;
                    }
                }
            });
            
            if (!found) {
                alert('Ничего не найдено. Попробуйте другой запрос.');
            }
        });
    }

    // ====== Таймер мотивации ======
    const motivationTimer = document.createElement('div');
    motivationTimer.style.position = 'fixed';
    motivationTimer.style.bottom = '20px';
    motivationTimer.style.right = '20px';
    motivationTimer.style.backgroundColor = '#1e5799';
    motivationTimer.style.color = 'white';
    motivationTimer.style.padding = '10px';
    motivationTimer.style.borderRadius = '5px';
    motivationTimer.style.zIndex = '1000';
    motivationTimer.innerHTML = '<h4>Ты сильнее, чем думаешь!</h4>';
    document.body.appendChild(motivationTimer);

    // Смена мотивационных сообщений
    const messages = [
        "Сегодняшние усилия - завтрашние результаты!",
        "Не сдавайся! Ты ближе к цели, чем вчера.",
        "Каждая тренировка делает тебя сильнее.",
        "Мечты не работают, пока не работаешь ты."
    ];

    let messageIndex = 0;
    setInterval(() => {
        motivationTimer.querySelector('h4').textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }, 5000);

    // ====== Анимация кнопок ======
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
