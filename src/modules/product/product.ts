import { ViewTemplate } from '../../utils/viewTemplate';
import { View } from '../../utils/view';
import { formatPrice } from '../../utils/helpers'
import html from './product.tpl.html';
import { ProductData } from 'types';

// код определяет класс Product, который представляет собой компонент 
// для отображения информации о продукте на веб-странице.

// Определяет тип ProductComponentParams, который представляет объект с произвольными свойствами и значениями.
type ProductComponentParams = { [key: string]: any };

// Определяет класс Product и экспортирует его из модуля.
export class Product {

  // view: View;: Объявляет переменную view типа View, которая будет содержать представление компонента.
  // product: ProductData;: Объявляет переменную product типа ProductData, которая будет содержать информацию о продукте.
  // params: ProductComponentParams;: Объявляет переменную params, которая будет содержать дополнительные параметры компонента, переданные при создании.

  view: View;
  product: ProductData;
  params: ProductComponentParams;

  // Определяет конструктор класса Product, который принимает объект product типа ProductData 
  // и объект params типа ProductComponentParams. 
  // Параметр params имеет значение по умолчанию пустого объекта {}. 
  // В конструкторе инициализируются переменные product и params, 
  // а также создается экземпляр класса ViewTemplate с использованием html, 
  // после чего вызывается метод cloneView(), возвращающий корневой элемент представления, 
  // который сохраняется в view.

  constructor(product: ProductData, params: ProductComponentParams = {}) {
    this.product = product;
    this.params = params;
    this.view = new ViewTemplate(html).cloneView();
  }

  // Метод attach принимает элемент $root типа HTMLElement 
  // и добавляет корневой элемент представления компонента к этому элементу.

  attach($root: HTMLElement) {
    $root.appendChild(this.view.root);
  }

  // Метод render отвечает за отображение данных о продукте на веб-странице. 
  // Он извлекает необходимые данные из объекта product (id, name, src, salePriceU) 
  // и обновляет соответствующие элементы представления (this.view). 
  // Затем, если в параметрах (params) указано, 
  // что компонент должен отображаться горизонтально (isHorizontal === true), 
  // он добавляет соответствующий класс к корневому элементу представления.

  render() {
    const { id, name, src, salePriceU } = this.product;

    this.view.root.setAttribute('href', `/product?id=${id}`);
    this.view.img.setAttribute('src', src);
    this.view.title.innerText = name;
    this.view.price.innerText = formatPrice(salePriceU);

    if (this.params.isHorizontal) this.view.root.classList.add('is__horizontal')
  }
}