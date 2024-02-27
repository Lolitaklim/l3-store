import { Component } from '../component';
import html from './favorites.tpl.html';
import { addElement } from '../../utils/helpers';

// import { Product } from '../product/product';
import { ProductList } from '../productList/productList';



class Favorites extends Component {
    favoritesProducts: ProductList;
  
    constructor(props: any) {
      super(props);
  
      this.favoritesProducts = new ProductList();
    //   this.favoritesProducts.attach(this.view.products);
    }
  
    async render() {
    //   const productsResp = await fetch('/api/getProducts');
    //   const products = await productsResp.json();
    //   this.productList.update(products);
    }
  }
  
  export const favoritesComp = new Favorites(html);


// class Homepage extends Component {
//   popularProducts: ProductList;

//   constructor(props: any) {
//     super(props);

//     this.popularProducts = new ProductList();
//     this.popularProducts.attach(this.view.popular);
//   }

//   render() {
//     fetch('/api/getPopularProducts')
//       .then((res) => res.json())
//       .then((products) => {
//         this.popularProducts.update(products);
//       });

//     const isSuccessOrder = new URLSearchParams(window.location.search).get('isSuccessOrder');
//     if (isSuccessOrder != null) {
//       const $notify = addElement(this.view.notifies, 'div', { className: 'notify' });
//       addElement($notify, 'p', {
//         innerText:
//           'Заказ оформлен. Деньги спишутся с вашей карты, менеджер может позвонить, чтобы уточнить детали доставки'
//       });
//     }
//   }
// }

// export const homepageComp = new Homepage(html);