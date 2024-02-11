import { Component } from '../component';
import { ProductList } from '../productList/productList';
import { formatPrice } from '../../utils/helpers';
import { ProductData } from 'types';
import html from './productDetail.tpl.html';
import { cartService } from '../../services/cart.service';

// : Определяет класс ProductDetail, который расширяет функциональность базового класса Component.
class ProductDetail extends Component {

  // Объявляет переменную more типа ProductList, предположительно это компонент списка продуктов.
  more: ProductList;

  // Объявляет переменную product типа ProductData как необязательную, которая будет содержать информацию о продукте.
  product?: ProductData;

  // Определяет конструктор класса ProductDetail, 
  // который вызывает конструктор базового класса Component с переданными свойствами (props), 
  // а затем инициализирует переменную more как новый экземпляр ProductList 
  // и прикрепляет его к элементу this.view.more.
  constructor(props: any) {
    super(props);

    this.more = new ProductList();
    this.more.attach(this.view.more);
  }

  // Переопределяет метод render базового класса Component. 
  // Этот метод отвечает за рендеринг информации о продукте на странице. 
  async render() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = Number(urlParams.get('id'));

    const productResp = await fetch(`/api/getProduct?id=${productId}`);
    this.product = await productResp.json();

    if (!this.product) return;

    // Внутри метода асинхронно получается информация о продукте через API, 
    // затем обновляется представление (this.view) с данными о продукте, 
    // включая фото, название, описание, цену и т. д. 
    const { id, src, name, description, salePriceU } = this.product;

    this.view.photo.setAttribute('src', src);
    this.view.title.innerText = name;
    this.view.description.innerText = description;
    this.view.price.innerText = formatPrice(salePriceU);
    this.view.btnBuy.onclick = this._addToCart.bind(this);

    // Также проверяется, есть ли продукт в корзине, 
    // и соответствующим образом обновляется кнопка покупки.
    const isInCart = await cartService.isInCart(this.product);

    if (isInCart) this._setInCart();

    // После этого асинхронно загружается список популярных продуктов и обновляется представление more.
    fetch(`/api/getProductSecretKey?id=${id}`)
      .then((res) => res.json())
      .then((secretKey) => {
        this.view.secretKey.setAttribute('content', secretKey);
      });

    fetch('/api/getPopularProducts')
      .then((res) => res.json())
      .then((products) => {
        this.more.update(products);
      });
  }

  // Приватный метод _addToCart, который вызывается при нажатии кнопки "купить" и 
  // добавляет текущий продукт в корзину через сервис корзины.
  private _addToCart() {
    if (!this.product) return;

    cartService.addProduct(this.product);
    this._setInCart();
  }

  // Приватный метод _setInCart, который изменяет текст кнопки "купить" на "в корзине" и 
  // отключает кнопку.
  private _setInCart() {
    this.view.btnBuy.innerText = '✓ В корзине';
    this.view.btnBuy.disabled = true;
  }
}

export const productDetailComp = new ProductDetail(html);
