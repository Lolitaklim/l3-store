import { Component } from '../component';
import html from './favorites.tpl.html';
import { ProductList } from '../productList/productList';
import { favoritesService } from '../../services/favorites.service';

class Favorites extends Component {
  favoritesProducts: ProductList;

  constructor(props: any) {
    super(props);
    this.favoritesProducts = new ProductList();
    this.favoritesProducts.attach(this.view.favorites);
  }

  async render() {
    const favoritesData = await favoritesService.get(); 

    this.favoritesProducts.update(favoritesData);
  }
}
  
export const favoritesComp = new Favorites(html);
