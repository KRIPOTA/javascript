class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div
    class="goods-item"><h3 class="title">Наименование: ${this.title}</h3><p class="info">Цена: ${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ]
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * 1;
        }, 0);
    }

    totalBasketPrice() {
        document.querySelector('.get-price').insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(я) стоимостью ${this.getCartPrice()}`);
    }
}

class Basket {
    constructor() {
        // В классе корзины массив с добавленными товарами
        this.addGoods = [];
    }
    // Добавление товара в корзину
    addToBasket() { }

    // Удаление товара из корзины
    deleteFromBasket() { }

    // Очистка корзины
    clearBasket() { }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.totalBasketPrice();
