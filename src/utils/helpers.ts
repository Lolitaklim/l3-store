// genUUID: Эта функция генерирует уникальный идентификатор (UUID). 
// Она использует текущее время в миллисекундах и, если доступно, производительность браузера, 
// чтобы создать случайное значение. Затем она заменяет определенные символы в строке шаблона 
// на случайные значения, чтобы создать UUID.

export const genUUID = () => {
    let d = new Date().getTime();
    if (window.performance && typeof window.performance.now === 'function') {
        d += performance.now();
    }
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
}

// addElement: Эта функция добавляет новый HTML-элемент в указанный родительский элемент. 
// Она принимает три аргумента: родительский элемент (parent), тип добавляемого элемента (tag) 
// и опциональные параметры (options), которые могут содержать свойства и значения для добавляемого 
// элемента. Функция создает новый элемент с помощью document.createElement, 
// применяет опциональные параметры к элементу с помощью Object.assign, добавляет его к родительскому 
// элементу и возвращает созданный элемент.

export const addElement = (parent: HTMLElement, tag: string, options?: object) => {
  const element = document.createElement(tag) as HTMLElement;

  if (options) Object.assign(element, options);

  parent.appendChild(element);

  return element;
};

// formatPrice: Эта функция принимает цену в копейках и форматирует её в строку 
// с разделителем тысяч и символом российского рубля (₽). 
// Например, если цена равна 123456789, функция вернет строку "123 456 ₽".

export const formatPrice = (price: number) => {
  return (
    Math.round(price / 1000)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽'
  );
};
