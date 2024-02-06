// Этот код определяет TypeScript тип ProductData, 
// который представляет собой структуру данных, описывающую продукт. 

export type ProductData = {
    brand: string;
    brandId: number;
    colors: Array<{
        name: string;
        id: number;
    }>;
    diffPrice: boolean;
    extended: any;
    feedbacks: number;
    has_video?: boolean;
    id: number;
    isAdult?: boolean;
    isNew: boolean;
    kindId: number;
    name: string;
    offsize: boolean;
    option: {
        name: string;
        id: number;
    };
    outOfStock?: boolean;
    pics: number;
    price: number;
    priceU: number;
    promoTextCard: string;
    promoTextCat: string;
    quantity: number;
    rating: number; // @deprecated
    reviewRating: number;
    rids: Array<string>;
    positions?: Array<{
        rid: string;
        wh: number;
        return_fee?: number;
    }>;
    root: number;
    sale: number;
    salePrice: number;
    salePriceU: number;
    saleConditions: number;
    siteBrandId: number;
    logisticsCost?: number;
    volume?: number;
    sizes: Array<any>;
    subjectId: number;
    time1?: number;
    time2?: number;
    wh: number;
    subjectParentId: number;
    supplierId: number;
    disabledForRegion?: boolean;
    return_fee?: number;
    time?: number; // timestamp
    dist?: number,
    log?: any;
    src: string;
    description: string;
}

// Файл с расширением .d.ts является файлом объявлений типов (TypeScript declaration file). 
// Он используется для описания структур данных, интерфейсов, типов и прочих аспектов TypeScript-кода, 
// который компилируется в JavaScript. Файлы объявлений типов не компилируются в JavaScript, 
// они используются исключительно во время разработки для статической типизации 
// и поддержки инструментов разработки, таких как редакторы кода и средства автодополнения.

// brand: Строка, представляющая бренд продукта.
// brandId: Число, идентификатор бренда.
// colors: Массив объектов, представляющих доступные цвета продукта. Каждый объект содержит имя цвета и его идентификатор.
// diffPrice: Булево значение, указывающее, есть ли различия в цене продукта.
// extended: Любой тип данных, расширенная информация о продукте.
// feedbacks: Число, количество отзывов о продукте.
// has_video: Необязательное булево значение, указывающее, есть ли видео о продукте.
// id: Число, идентификатор продукта.
// isAdult: Необязательное булево значение, указывающее, является ли продукт для взрослых.
// isNew: Булево значение, указывающее, является ли продукт новым.
// kindId: Число, идентификатор типа продукта.
// name: Строка, название продукта.
// offsize: Булево значение, указывающее, есть ли продукт вне стандартных размеров.
// option: Объект, представляющий дополнительную опцию продукта.
// outOfStock: Необязательное булево значение, указывающее, отсутствует ли продукт на складе.
// pics: Число, количество изображений продукта.
// price: Число, цена продукта.
// priceU: Число, цена продукта в другой валюте.
// promoTextCard: Строка, текст промо-акции для карточки продукта.
// promoTextCat: Строка, текст промо-акции для категории продукта.
// quantity: Число, количество продукта.
// rating: Число, рейтинг продукта (устаревший).
// reviewRating: Число, рейтинг продукта на основе отзывов.
// rids: Массив строк, идентификаторы.
// positions: Массив объектов, представляющих позиции продукта.
// root: Число, идентификатор корневого продукта.
// sale: Число, скидка на продукт.
// salePrice: Число, цена продукта со скидкой.
// salePriceU: Число, цена продукта со скидкой в другой валюте.
// saleConditions: Число, условия скидки на продукт.
// siteBrandId: Число, идентификатор бренда на сайте.
// logisticsCost: Необязательное число, стоимость логистики.
// volume: Необязательное число, объем продукта.
// sizes: Массив, представляющий доступные размеры продукта.
// subjectId: Число, идентификатор предмета.
// time1: Необязательное число.
// time2: Необязательное число.
// wh: Число, ширина продукта.
// subjectParentId: Число, идентификатор родительского предмета.
// supplierId: Число, идентификатор поставщика продукта.
// disabledForRegion: Необязательное булево значение, указывающее, отключен ли продукт для региона.
// return_fee: Необязательное число, возвращаемая плата.
// time: Необязательное число, временная метка.
// dist: Необязательное число, расстояние.
// log: Любой тип данных, логи.
// src: Строка, источник продукта.
// description: Строка, описание продукта.