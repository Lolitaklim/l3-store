// описывает службу корзины (CartService), которая используется для управления 
// товарами в корзине покупок веб-приложения. 

import localforage from 'localforage';
import { ProductData } from 'types'; //импортирует тип ProductData из модуля 'types'. 

// константа DB, которая содержит имя ключа для хранения данных корзины в локальном хранилище браузера.
const DB = '__wb-cart';

class CartService {

  // метод init() инициализирует службу корзины. 
  // В данном случае он вызывает приватный метод _updCounters(), 
  // который обновляет счетчик элементов в корзине.

  init() {
    this._updCounters();
  }

  // метод addProduct() добавляет продукт в корзину. 
  // Он получает текущий список продуктов из локального хранилища, 
  // добавляет новый продукт к этому списку и 
  // сохраняет обновленный список обратно в хранилище.

  async addProduct(product: ProductData) {
    const products = await this.get();
    await this.set([...products, product]);
  }

  // Этот метод removeProduct() удаляет продукт из корзины. 
  // Он получает текущий список продуктов, фильтрует его, 
  // оставляя только те продукты, которые не соответствуют удаляемому продукту, и 
  // сохраняет обновленный список обратно в хранилище.

  async removeProduct(product: ProductData) {
    const products = await this.get();
    await this.set(products.filter(({ id }) => id !== product.id));
  }

  // метод clear() очищает корзину путем удаления всех данных из локального хранилища и 
  // затем обновляет счетчик элементов в корзине.

  async clear() {
    await localforage.removeItem(DB);
    this._updCounters();
  }

  // метод get() получает текущий список продуктов из локального хранилища.

  async get(): Promise<ProductData[]> {
    return (await localforage.getItem(DB)) || [];
  }

  // метод set() сохраняет список продуктов в локальное хранилище и 
  // затем обновляет счетчик элементов в корзине.

  async set(data: ProductData[]) {
    await localforage.setItem(DB, data);
    this._updCounters();
  }

  // метод isInCart() проверяет, содержится ли указанный продукт уже в корзине.

  async isInCart(product: ProductData) {
    const products = await this.get();
    return products.some(({ id }) => id === product.id);
  }

  // приватный метод _updCounters() обновляет счетчик элементов в корзине на веб-странице. 
  // Он получает текущий список продуктов из корзины, вычисляет количество элементов и 
  // обновляет соответствующие элементы на странице, отображающие количество продуктов в корзине.

  private async _updCounters() {
    const products = await this.get();
    const count = products.length >= 10 ? '9+' : products.length;

    //@ts-ignore
    document.querySelectorAll('.js__cart-counter').forEach(($el: HTMLElement) => ($el.innerText = String(count || '')));
  }
}

// экспортирует созданный экземпляр CartService, 
// который может быть импортирован и использован в других частях приложения 
// для управления корзиной покупок.

export const cartService = new CartService();
