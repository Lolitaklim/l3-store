// код представляет собой простой маршрутизатор (Router) для веб-приложения

import { catalogComp } from './modules/catalog/catalog';
import { notFoundComp } from './modules/notFound/notFound';
import { homepageComp } from './modules/homepage/homepage';
import { productDetailComp } from './modules/productDetail/productDetail';
import { checkoutComp } from './modules/checkout/checkout';

// ROUTES: Это объект, который связывает пути (URL) с соответствующими компонентами. 
// Каждый путь соответствует экземпляру компонента, который должен быть отображен на странице.

// Объект, который связывает пути с соответствующими компонентами
const ROUTES = {
  '/': homepageComp,
  '/catalog': catalogComp,
  '/product': productDetailComp,
  '/checkout': checkoutComp
};

// Router класс: Это класс, который представляет маршрутизатор. 
// Он содержит корневой элемент приложения ($appRoot) и устанавливает обработчики 
// событий для загрузки страницы и изменения хэша.

export default class Router {
  $appRoot: HTMLElement;

  constructor() {
    // @ts-ignore
    this.$appRoot = document.querySelector('.js__root');

    // Обработка событий: Обработчики событий (load и hashchange) вызывают метод route, 
    // чтобы обновить страницу на основе текущего маршрута.

    // Добавление обработчиков событий для загрузки страницы и изменения хэша (hashchange)
    window.addEventListener('load', this.route.bind(this));
    window.addEventListener('hashchange', this.route.bind(this));
  }

  // route метод: Это метод класса Router, который обрабатывает изменения маршрута. 
  // Он предотвращает стандартное поведение события, определяет компонент на основе текущего пути 
  // и затем прикрепляет и отображает этот компонент на странице.

  // Метод для обработки маршрута
  route(e: any) {
    e.preventDefault();

    // @ts-ignore
    // Определение компонента на основе текущего пути или использование notFoundComp, если путь не совпадает
    const component = ROUTES[window.location.pathname] || notFoundComp;

    // Прикрепление компонента к корневому элементу приложения и его отрисовка
    component.attach(this.$appRoot);
    component.render();
  }
}


// Этот маршрутизатор использует хэш-маршрутизацию, 
// так как он реагирует на изменения хэша в URL (например, #catalog, #product). 
// В зависимости от текущего пути он выбирает соответствующий компонент и отображает его на странице. 
// Если путь не совпадает с заданными маршрутами, используется компонент notFoundComp.