import localforage from 'localforage';
import { ProductData } from 'types';
import { CartService } from "./cart.service";

const FAVORITES_DB = '__wb-favorites';

class FavoritesService extends CartService{
 
  async clear() {
    await localforage.removeItem(FAVORITES_DB);
    this._updCounters();
  }

  async get(): Promise<ProductData[]> {
    return (await localforage.getItem(FAVORITES_DB)) || [];
  }

  async set(data: ProductData[]) {
    await localforage.setItem(FAVORITES_DB, data);
    this._updCounters();
  }

  protected async _updCounters() {
    const products = await this.get();
    const count = products.length >= 10 ? '9+' : products.length;

    //@ts-ignore
    document.querySelectorAll('.js__favorites-counter').forEach(($el: HTMLElement) => ($el.innerText = String(count || '')));

    const favoritesLink = document.querySelector('.js__favorites') as HTMLElement;
    if (products.length > 0) {
      favoritesLink.style.display = 'block';
    } else {
      favoritesLink.style.display = 'none';
    }
  }
}

export const favoritesService = new FavoritesService();
