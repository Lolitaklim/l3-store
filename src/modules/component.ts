import { ViewTemplate } from '../utils/viewTemplate';
import { View } from '../utils/view';

// код определяет базовый класс Component для создания компонентов веб-интерфейса. 
// Определяет класс Component и экспортирует его из модуля, чтобы он мог быть использован в других частях кода.
export class Component {
  view: View;
  data: any;

  constructor(html: any) {
    this.data = {};
    this.view = new ViewTemplate(html).cloneView();
  }

  attach($root: HTMLElement) {
    $root.innerHTML = '';
    $root.appendChild(this.view.root);
  }

  update(data: any) {
    this.data = data;
    this.render();
  }

  render() {}
}
