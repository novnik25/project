<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тренер-навигатор | Найди идеального тренера</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">
    <style>
        :root {
            --primary: #4361ee;
            --primary-light: #4895ef;
            --secondary: #3f37c9;
            --dark: #1b263b;
            --light: #f8f9fa;
            --gray: #adb5bd;
            --success: #4cc9f0;
            --warning: #f72585;
            --border-radius: 8px;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        body {
            background-color: var(--light);
            color: var(--dark);
            line-height: 1.6;
        }

        /* Preloader */
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--light);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }

        .preloader--hidden {
            opacity: 0;
        }

        .preloader-spinner {
            width: 50px;
            height: 50px;
            border: 5px solid var(--gray);
            border-top-color: var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .content--hidden {
            opacity: 0;
        }

        /* Layout */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            background-color: white;
            box-shadow: var(--shadow);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .logo i {
            font-size: 1.8rem;
        }

        .header__search {
            display: flex;
            gap: 0.5rem;
            flex-grow: 1;
            max-width: 500px;
            margin: 0 2rem;
        }

        .header__search-input {
            flex-grow: 1;
            padding: 0.5rem 1rem;
            border: 1px solid var(--gray);
            border-radius: var(--border-radius);
            font-size: 1rem;
            transition: var(--transition);
        }

        .header__search-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.2);
        }

        .header__search-button {
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: var(--border-radius);
            padding: 0.5rem 1.5rem;
            cursor: pointer;
            transition: var(--transition);
        }

        .header__search-button:hover {
            background-color: var(--primary-light);
        }

        .header__navigation-list {
            display: flex;
            list-style: none;
            gap: 1.5rem;
        }

        .header__navigation-link {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            transition: var(--transition);
            position: relative;
        }

        .header__navigation-link:hover {
            color: var(--primary);
        }

        .header__navigation-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--primary);
            transition: var(--transition);
        }

        .header__navigation-link:hover::after {
            width: 100%;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 5rem 0;
            text-align: center;
        }

        .hero__title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .hero__subtitle {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 2rem;
            opacity: 0.9;
        }

        .hero__button {
            background-color: white;
            color: var(--primary);
            border: none;
            border-radius: var(--border-radius);
            padding: 0.8rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            box-shadow: var(--shadow);
        }

        .hero__button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        /* Filters */
        .filters {
            background-color: white;
            padding: 2rem 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .filter-form {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .filter-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .filter-label {
            font-weight: 500;
            font-size: 0.9rem;
            color: var(--dark);
        }

        .filter-select, .filter-input {
            padding: 0.6rem 1rem;
            border: 1px solid var(--gray);
            border-radius: var(--border-radius);
            font-size: 1rem;
            transition: var(--transition);
        }

        .filter-select:focus, .filter-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.2);
        }

        .filter-radio-group {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .filter-radio-label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }

        .filter-radio-input {
            appearance: none;
            width: 18px;
            height: 18px;
            border: 2px solid var(--gray);
            border-radius: 50%;
            transition: var(--transition);
            position: relative;
            cursor: pointer;
        }

        .filter-radio-input:checked {
            border-color: var(--primary);
        }

        .filter-radio-input:checked::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 10px;
            height: 10px;
            background-color: var(--primary);
            border-radius: 50%;
        }

        .filter-form__button {
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: var(--border-radius);
            padding: 0.8rem;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            align-self: flex-end;
        }

        .filter-form__button:hover {
            background-color: var(--primary-light);
        }

        /* Trainers Section */
        .section {
            padding: 4rem 0;
        }

        .section__header {
            margin-bottom: 2rem;
            text-align: center;
        }

        .section__title {
            font-size: 2rem;
            color: var(--dark);
            margin-bottom: 0.5rem;
        }

        .section__subtitle {
            color: var(--gray);
            max-width: 600px;
            margin: 0 auto;
        }

        .swiper-container {
            padding: 1rem;
        }

        .trainer-card {
            background-color: white;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: var(--transition);
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .trainer-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .trainer-card__figure {
            width: 100%;
            height: 200px;
            overflow: hidden;
        }

        .trainer-card__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }

        .trainer-card:hover .trainer-card__image {
            transform: scale(1.05);
        }

        .trainer-card__content {
            padding: 1.5rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }

        .trainer-card__name {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: var(--dark);
        }

        .trainer-card__specialization {
            font-weight: 500;
            color: var(--primary);
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
        }

        .trainer-card__meta {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem 1.5rem;
            margin-bottom: 1rem;
            font-size: 0.85rem;
            color: var(--gray);
        }

        .trainer-card__meta i {
            margin-right: 0.3rem;
            color: var(--primary-light);
        }

        .trainer-card__description {
            margin-bottom: 1.5rem;
            color: var(--dark);
            font-size: 0.9rem;
            flex-grow: 1;
        }

        .trainer-card__link {
            display: inline-block;
            padding: 0.6rem 1rem;
            background-color: var(--primary);
            color: white;
            text-decoration: none;
            border-radius: var(--border-radius);
            font-size: 0.9rem;
            font-weight: 500;
            text-align: center;
            transition: var(--transition);
            margin-top: auto;
        }

        .trainer-card__link:hover {
            background-color: var(--primary-light);
        }

        .swiper-button-next, .swiper-button-prev {
            color: var(--primary) !important;
        }

        .swiper-pagination-bullet-active {
            background-color: var(--primary) !important;
        }

        /* Articles */
        .articles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .article-item {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .article-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .article-item__title {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
        }

        .article-item__title a {
            color: var(--dark);
            text-decoration: none;
            transition: var(--transition);
        }

        .article-item__title a:hover {
            color: var(--primary);
        }

        .article-item__description {
            color: var(--gray);
            font-size: 0.9rem;
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
        }

        .article-item__description i {
            color: var(--primary);
            font-size: 1.2rem;
            margin-top: 0.2rem;
        }

        /* Footer */
        footer {
            background-color: var(--dark);
            color: white;
            padding: 3rem 0 1.5rem;
        }

        .footer__grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer__logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .footer__logo i {
            font-size: 1.8rem;
        }

        .footer__about {
            max-width: 300px;
            font-size: 0.9rem;
            opacity: 0.8;
            line-height: 1.6;
        }

        .footer__title {
            font-size: 1.1rem;
            margin-bottom: 1rem;
            font-weight: 600;
        }

        .footer__navigation-list {
            list-style: none;
        }

        .footer__navigation-item {
            margin-bottom: 0.6rem;
        }

        .footer__navigation-link {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            transition: var(--transition);
            font-size: 0.9rem;
        }

        .footer__navigation-link:hover {
            color: white;
            padding-left: 5px;
        }

        .footer__social-list {
            display: flex;
            gap: 1rem;
            list-style: none;
        }

        .footer__social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: white;
            transition: var(--transition);
        }

        .footer__social-link:hover {
            background-color: var(--primary);
            transform: translateY(-3px);
        }

        .footer__bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 1.5rem;
            text-align: center;
            font-size: 0.8rem;
            opacity: 0.7;
        }

        /* Scroll to top button */
        .scroll-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: var(--shadow);
            transition: var(--transition);
            opacity: 0;
            visibility: hidden;
            z-index: 99;
        }

        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }

        .scroll-to-top:hover {
            background-color: var(--primary-light);
            transform: translateY(-3px);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .header__inner {
                flex-direction: column;
                gap: 1rem;
            }

            .header__search {
                width: 100%;
                margin: 1rem 0;
            }

            .filter-form {
                grid-template-columns: 1fr;
            }

            .hero {
                padding: 3rem 0;
            }

            .hero__title {
                font-size: 2rem;
            }

            .section {
                padding: 2rem 0;
            }
        }

        /* Utility classes */
        .text-center {
            text-align: center;
        }

        .mt-1 { margin-top: 0.5rem; }
        .mt-2 { margin-top: 1rem; }
        .mt-3 { margin-top: 1.5rem; }
        .mt-4 { margin-top: 2rem; }
    </style>
</head>
<body>
    <!-- Preloader -->
    <div class="preloader">
        <div class="preloader-spinner"></div>
    </div>

    <div class="content content--hidden">
        <!-- Header -->
        <header class="header">
            <div class="container">
                <div class="header__inner">
                    <a href="#" class="logo">
                        <i class="fas fa-dumbbell"></i>
                        <span>Тренер-навигатор</span>
                    </a>

                    <div class="header__search">
                        <input type="text" class="header__search-input" placeholder="Найти тренера...">
                        <button class="header__search-button">Поиск</button>
                    </div>

                    <nav class="header__navigation">
                        <ul class="header__navigation-list">
                            <li><a href="#trainers" class="header__navigation-link">Тренеры</a></li>
                            <li><a href="#articles" class="header__navigation-link">Статьи</a></li>
                            <li><a href="#about" class="header__navigation-link">О нас</a></li>
                            <li><a href="#contacts" class="header__navigation-link">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1 class="hero__title">Найдите идеального тренера</h1>
                <p class="hero__subtitle">Персональные тренеры, коучи и инструкторы для достижения ваших целей в фитнесе, йоге и не только</p>
                <button class="hero__button">Начать поиск</button>
            </div>
        </section>

        <!-- Filters Section -->
        <section class="filters">
            <div class="container">
                <form class="filter-form">
                    <div class="filter-group">
                        <label for="specialization-select" class="filter-label">Специализация</label>
                        <select id="specialization-select" class="filter-select">
                            <option value="">Все специализации</option>
                            <option value="Фитнес">Фитнес</option>
                            <option value="Йога">Йога</option>
                            <option value="Плавание">Плавание</option>
                            <option value="Бокс">Бокс</option>
                            <option value="Питание">Питание</option>
                        </select>
                    </div>

                    <div class="filter-group">
                        <label class="filter-label">Опыт работы</label>
                        <div class="filter-radio-group">
                            <label class="filter-radio-label">
                                <input type="radio" name="experience" value="any" class="filter-radio-input" checked>
                                Любой
                            </label>
                            <label class="filter-radio-label">
                                <input type="radio" name="experience" value="1-3" class="filter-radio-input">
                                1-3 года
                            </label>
                            <label class="filter-radio-label">
                                <input type="radio" name="experience" value="3-5" class="filter-radio-input">
                                3-5 лет
                            </label>
                            <label class="filter-radio-label">
                                <input type="radio" name="experience" value="5+" class="filter-radio-input">
                                5+ лет
                            </label>
                        </div>
                    </div>

                    <div class="filter-group">
                        <label for="location-select" class="filter-label">Местоположение</label>
                        <select id="location-select" class="filter-select">
                            <option value="">Все районы</option>
                            <option value="Центр">Центр</option>
                            <option value="Север">Север</option>
                            <option value="Юг">Юг</option>
                            <option value="Восток">Восток</option>
                            <option value="Запад">Запад</option>
                        </select>
                    </div>

                    <div class="filter-group">
                        <label class="filter-label">Стоимость (руб/час)</label>
                        <div style="display: flex; gap: 0.5rem;">
                            <input type="number" id="cost-min" class="filter-input" placeholder="От" style="flex: 1;">
                            <input type="number" id="cost-max" class="filter-input" placeholder="До" style="flex: 1;">
                        </div>
                    </div>

                    <button type="button" class="filter-form__button">Применить фильтры</button>
                </form>
            </div>
        </section>

        <!-- Trainers Section -->
        <section class="section" id="trainers">
            <div class="container">
                <div class="section__header">
                    <h2 class="section__title">Наши тренеры</h2>
                    <p class="section__subtitle">Профессионалы с проверенной квалификацией и опытом</p>
                </div>

                <div class="swiper-container">
                    <div class="swiper-wrapper" id="trainer-cards-container">
                        <!-- Тренеры будут загружены через JavaScript -->
                    </div>

                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </section>

        <!-- Articles Section -->
        <section class="section" id="articles">
            <div class="container">
                <div class="section__header">
                    <h2 class="section__title">Популярные статьи</h2>
                    <p class="section__subtitle">Полезные материалы о фитнесе, здоровье и тренировках</p>
                </div>

                <div class="articles-grid" id="articles-container">
                    <!-- Статьи будут загружены через JavaScript -->
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer__grid">
                    <div class="footer__col">
                        <a href="#" class="footer__logo">
                            <i class="fas fa-dumbbell"></i>
                            <span>Тренер-навигатор</span>
                        </a>
                        <p class="footer__about">
                            Сервис для поиска профессиональных тренеров и инструкторов. Помогаем найти идеального специалиста для ваших целей.
                        </p>
                    </div>

                    <div class="footer__col">
                        <h3 class="footer__title">Навигация</h3>
                        <ul class="footer__navigation-list">
                            <li class="footer__navigation-item"><a href="#trainers" class="footer__navigation-link">Тренеры</a></li>
                            <li class="footer__navigation-item"><a href="#articles" class="footer__navigation-link">Статьи</a></li>
                            <li class="footer__navigation-item"><a href="#about" class="footer__navigation-link">О нас</a></li>
                            <li class="footer__navigation-item"><a href="#contacts" class="footer__navigation-link">Контакты</a></li>
                        </ul>
                    </div>

                    <div class="footer__col">
                        <h3 class="footer__title">Контакты</h3>
                        <ul class="footer__navigation-list">
                            <li class="footer__navigation-item">
                                <i class="fas fa-map-marker-alt"></i> г. Москва, ул. Примерная, 123
                            </li>
                            <li class="footer__navigation-item">
                                <i class="fas fa-phone"></i> +7 (123) 456-78-90
                            </li>
                            <li class="footer__navigation-item">
                                <i class="fas fa-envelope"></i> info@trainer-navigator.ru
                            </li>
                        </ul>
                    </div>

                    <div class="footer__col">
                        <h3 class="footer__title">Соцсети</h3>
                        <ul class="footer__social-list">
                            <li><a href="#" class="footer__social-link"><i class="fab fa-vk"></i></a></li>
                            <li><a href="#" class="footer__social-link"><i class="fab fa-telegram"></i></a></li>
                            <li><a href="#" class="footer__social-link"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#" class="footer__social-link"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer__bottom">
                    <p>&copy; <span id="current-year">2023</span> Тренер-навигатор. Все права защищены.</p>
                </div>
            </div>
        </footer>

        <!-- Scroll to top button -->
        <button id="scrollToTopBtn" class="scroll-to-top">
            <i class="fas fa-arrow-up"></i>
        </button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const preloader = document.querySelector('.preloader');
            const content = document.querySelector('.content');

            function hidePreloader() {
                if (preloader && content) {
                    preloader.classList.add('preloader--hidden');
                    content.classList.remove('content--hidden');
                    preloader.addEventListener('transitionend', () => {
                        preloader.remove();
                    });
                }
            }

            setTimeout(hidePreloader, 1500);
            window.addEventListener('load', hidePreloader);

            const filterForm = document.querySelector('.filter-form');
            const experienceFilters = filterForm ? filterForm.querySelectorAll('input[name="experience"]') : [];
            const specializationSelect = filterForm ? filterForm.querySelector('#specialization-select') : null;
            const locationFilter = filterForm ? filterForm.querySelector('#location-select') : null;
            const costMinFilter = filterForm ? filterForm.querySelector('#cost-min') : null;
            const costMaxFilter = filterForm ? filterForm.querySelector('#cost-max') : null;
            const applyFiltersButton = filterForm ? filterForm.querySelector('.filter-form__button') : null;

            function saveFiltersToLocalStorage() {
                if (!filterForm) return;

                const filters = {
                    specialization: specializationSelect ? specializationSelect.value : '',
                    experience: Array.from(experienceFilters).find(radio => radio.checked)?.value || 'any',
                    location: locationFilter ? locationFilter.value : '',
                    costMin: costMinFilter ? costMinFilter.value : '',
                    costMax: costMaxFilter ? costMaxFilter.value : ''
                };
                localStorage.setItem('trainerFilters', JSON.stringify(filters));
            }

            function loadFiltersFromLocalStorage() {
                if (!filterForm) return;

                const savedFilters = localStorage.getItem('trainerFilters');
                if (savedFilters) {
                    const filters = JSON.parse(savedFilters);
                    if (specializationSelect) specializationSelect.value = filters.specialization;
                    if (locationFilter) locationFilter.value = filters.location;
                    if (costMinFilter) costMinFilter.value = filters.costMin;
                    if (costMaxFilter) costMaxFilter.value = filters.costMax;

                    experienceFilters.forEach(radio => {
                        if (radio.value === filters.experience) {
                            radio.checked = true;
                        }
                    });
                }
            }

            loadFiltersFromLocalStorage();

            if (filterForm) {
                filterForm.addEventListener('change', saveFiltersToLocalStorage);
                filterForm.addEventListener('input', saveFiltersToLocalStorage);
            }

            const trainerCardsContainer = document.getElementById('trainer-cards-container');
            const trainerTitlesList = document.getElementById('trainer-titles-list');
            let allTrainerCardsData = [];

            async function loadTrainers() {
                try {
                    // Пример данных (в реальном проекте загружаем с сервера)
                    allTrainerCardsData = [
                        {
                            id: 'trainer1',
                            name: 'Алексей Петров',
                            specialization: 'Фитнес, Кроссфит',
                            experience: '5 лет',
                            location: 'Центр',
                            cost: 2500,
                            rating: 4.9,
                            description: 'Сертифицированный тренер по функциональному тренингу. Помогу достичь любых целей: от похудения до подготовки к соревнованиям.',
                            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
                        },
                        {
                            id: 'trainer2',
                            name: 'Мария Иванова',
                            specialization: 'Йога, Пилатес',
                            experience: '7 лет',
                            location: 'Север',
                            cost: 2000,
                            rating: 5.0,
                            description: 'Преподаватель хатха-йоги и пилатеса. Индивидуальный подход к каждому ученику, занятия для любого уровня подготовки.',
                            image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
                        },
                        {
                            id: 'trainer3',
                            name: 'Дмитрий Смирнов',
                            specialization: 'Бокс, Кикбоксинг',
                            experience: '3 года',
                            location: 'Юг',
                            cost: 1800,
                            rating: 4.7,
                            description: 'Тренер по боксу и самообороне. Научу основам техники, помогу улучшить физическую форму и уверенность в себе.',
                            image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
                        },
                        {
                            id: 'trainer4',
                            name: 'Елена Кузнецова',
                            specialization: 'Плавание',
                            experience: '4 года',
                            location: 'Восток',
                            cost: 2200,
                            rating: 4.8,
                            description: 'Тренер по плаванию для взрослых и детей. Научу плавать с нуля или помогу улучшить технику.',
                            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
                        },
                        {
                            id: 'trainer5',
                            name: 'Иван Васильев',
                            specialization: 'Питание, Фитнес',
                            experience: '6 лет',
                            location: 'Запад',
                            cost: 3000,
                            rating: 4.9,
                            description: 'Сертифицированный нутрициолог и фитнес-тренер. Составлю индивидуальный план питания и тренировок.',
                            image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
                        }
                    ];

                    renderTrainerCards(allTrainerCardsData);
                    extractAndDisplayTrainerTitles(allTrainerCardsData);
                    initializeSwiper();

                } catch (error) {
                    console.error("Не удалось загрузить данные о тренерах:", error);
                    if (trainerCardsContainer) {
                        trainerCardsContainer.innerHTML = '<p>Не удалось загрузить информацию о тренерах. Пожалуйста, попробуйте позже.</p>';
                    }
                }
            }

            function renderTrainerCards(trainers) {
                if (!trainerCardsContainer) return;

                trainerCardsContainer.innerHTML = '';
                if (trainers.length === 0) {
                    trainerCardsContainer.innerHTML = '<p>Тренеры не найдены по заданным критериям.</p>';
                    return;
                }

                trainers.forEach(trainer => {
                    const trainerCard = document.createElement('div');
                    trainerCard.classList.add('trainer-card', 'swiper-slide');
                    trainerCard.setAttribute('data-specialization', trainer.specialization);
                    trainerCard.setAttribute('data-location', trainer.location);
                    trainerCard.setAttribute('data-cost', trainer.cost);
                    trainerCard.setAttribute('data-experience', trainer.experience);

                    trainerCard.innerHTML = `
                        <figure class="trainer-card__figure">
                            <img src="${trainer.image || 'https://placehold.co/150x150/cccccc/333333?text=Тренер'}" alt="Фото ${trainer.name}" class="trainer-card__image" width="150" height="150">
                        </figure>
                        <div class="trainer-card__content">
                            <h3 class="trainer-card__name">${trainer.name}</h3>
                            <p class="trainer-card__specialization">${trainer.specialization}</p>
                            
                            <div class="trainer-card__meta">
                                <span><i class="fas fa-clock"></i> ${trainer.experience}</span>
                                <span><i class="fas fa-map-marker-alt"></i> ${trainer.location}</span>
                                <span><i class="fas fa-star"></i> ${trainer.rating}</span>
                                <span><i class="fas fa-ruble-sign"></i> ${trainer.cost}/час</span>
                            </div>
                            
                            <p class="trainer-card__description">${trainer.description}</p>
                            <a href="#${trainer.id}"
