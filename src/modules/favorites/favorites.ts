import { Component } from '../component';
import html from './favorites.tpl.html';

// import { Product } from '../product/product';
import { ProductList } from '../productList/productList';
// import { formatPrice } from '../../utils/helpers';

class Favorites extends Component {
    productList: ProductList;
  
    constructor(props: any) {
      super(props);
  
      this.productList = new ProductList();
    //   this.productList.attach(this.view.products);
    }
  
    async render() {
    //   const productsResp = await fetch('/api/getProducts');
    //   const products = await productsResp.json();
    //   this.productList.update(products);
    }
  }
  
  export const favoritesComp = new Favorites(html);