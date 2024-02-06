import { View } from './view';

// Класс ViewTemplate представляет собой шаблон представления (view template) 
// для работы с HTML-шаблонами в веб-приложении. 

export class ViewTemplate {
  root!: any; // Корневой элемент представления

  // _template: Приватное свойство, которое хранит HTML-шаблон в виде элемента HTMLTemplateElement.

  private _template: HTMLTemplateElement; // Приватное свойство для хранения HTML-шаблона

  // applyText: Статический метод, который применяет данные модели к текстовым элементам 
  // в HTML-шаблоне. Он использует атрибуты data-text для определения, какие элементы 
  // должны быть обновлены, и применяет значения из модели данных.

  // Статический метод для применения данных к текстовым элементам в шаблоне
  static applyText(element: HTMLElement | DocumentFragment, dataModel?: any) {
    if (dataModel) {
      (element.querySelectorAll('[data-text]') as NodeListOf<any>).forEach((el) => {
        const text = el.dataset.text;
        if (text && dataModel[text]) {
          const place = el.dataset.place || 'innerText';
          el[place] = dataModel[text];
        }
      });
    }
  }

  // getView: Статический метод, который создает экземпляр класса View из HTML-элемента. 
  // Он привязывает элементы с атрибутом data-tag к свойствам представления и устанавливает 
  // корневой элемент представления.

  // Статический метод для получения экземпляра представления из HTML-элемента
  static getView(element: HTMLElement, dataModel?: any) {
    if (dataModel) {
      ViewTemplate.applyText(element, dataModel);
    }
    const view = new View(); // Создание нового экземпляра View
    // Проход по элементам с атрибутом data-tag и привязка их к свойствам представления
    (element.querySelectorAll('[data-tag]') as NodeListOf<HTMLElement>).forEach((el) => {
      if (el.dataset.tag) view[el.dataset.tag] = el;
    });
    view.root = element; // Установка корневого элемента представления
    // Привязка методов querySelector и querySelectorAll к элементу представления
    view.querySelector = element.querySelector.bind(element);
    view.querySelectorAll = element.querySelectorAll.bind(element);
    return view; // Возвращение экземпляра представления
  }

  // constructor: Конструктор класса, который принимает HTML-строку в качестве шаблона 
  // и создает соответствующий HTML-элемент. Он также применяет данные модели к текстовым элементам, 
  // если они предоставлены.

  constructor(html: string, dataModel?: any) {
    this._template = document.createElement('template'); // Создание нового HTML-шаблона
    this._template.innerHTML = html; // Установка содержимого HTML-шаблона
    if (dataModel) {
      ViewTemplate.applyText(this._template.content, dataModel); // Применение данных к текстовым элементам шаблона
    }
  }

  // cloneView: Метод, который клонирует представление с учетом новых данных модели. 
  // Он клонирует содержимое HTML-шаблона и применяет данные модели 
  // к текстовым элементам нового представления.

  // Метод для клонирования представления с данными
  cloneView(dataModel?: any) {
    // Клонирование содержимого HTML-шаблона и преобразование его в HTML-элемент
    const element = (this._template.content.cloneNode(true) as HTMLElement).firstElementChild as HTMLElement;
    // Получение экземпляра представления из склонированного элемента с применением данных
    return ViewTemplate.getView(element, dataModel || {});
  }
}
