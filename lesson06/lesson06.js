const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const catalogItem = {
    render(cat) {
        return `<div class="cat">
                    <div><b>Наименование</b>: ${cat.product_name}</div>
                    <div><b>Цена за шт.</b>: ${cat.price}</div>
                    <button class="btn-catalog" id="${cat.id_product}">Добавить в корзину</button>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [
        {
            id_product: 111,
            product_name: 'Кабель',
            price: 600,
            quantity: 1,
        },
        {
            id_product: 456,
            product_name: 'Блок питания',
            price: 1000,
            quantity: 1,
        },
        {
            id_product: 112,
            product_name: 'Чехол на телефон',
            price: 500,
            quantity: 1,
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));
        this.render();
    },
    render() {
        if (this.goods.length > 0) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(я) стоимостью ${this.getCartPrice()}`);
        } else {
            this.renderEmptyCart();
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
    renderEmptyCart() {
        this.cartListBlock.innerHTML = '';
        this.cartListBlock.textContent = 'Корзина пуста.';
    },
};

const catalog = {
    cart,
    catalogItem,
    catalogListBlock: null,
    catalogButton: null,
    cats: [
        {
            id_product: 523,
            product_name: 'Чайник',
            price: 600,
            quantity: 1,
            place: 0
        },
        {
            id_product: 236,
            product_name: 'Машинка',
            price: 1000,
            quantity: 1,
            place: 1
        },
        {
            id_product: 452,
            product_name: 'Руль',
            price: 2000,
            quantity: 1,
            place: 2
        },
        {
            id_product: 112,
            product_name: 'Чехол на телефон',
            price: 500,
            quantity: 1,
            place: 3
        },
        {
            id_product: 444,
            product_name: 'Планшет',
            price: 10000,
            quantity: 1,
            place: 4
        }
    ],
    init() {
        if (this.cats.length) {
            this.cart.init();
            this.catalogListBlock = document.querySelector('.catalog-list');
            this.render();
        }
        else {
            this.catalogListBlock.textContent = 'Каталог пуст';
        }
    },
    render() {
        this.cats.forEach(cat => {
            this.catalogListBlock.insertAdjacentHTML('beforeend', this.catalogItem.render(cat));
        });
        this.addEventClick();
    },

    addEventClick() {
        for (let i = 0; i < this.cats.length; i++) {
            var ids = this.cats[i].id_product;
            this.catalogButton = document.getElementById(ids);
            this.catalogButton.addEventListener('click', e => this.addCart(e));
        }
    },

    addCart(e, product, findelem) {
        product = e.target.id;
        findelem = this.cart.goods.findIndex(item => item.id_product == product);
        if (findelem === -1) {
            findelem = this.cats.findIndex(item => item.id_product == product);
            this.cart.goods.push(this.cats[findelem]);
            this.cart.cartListBlock.innerHTML = '';
            this.cart.render();
        }
        else {
            this.cart.goods[findelem].quantity++;
            this.cart.cartListBlock.innerHTML = '';
            this.cart.render();
        }
    }
}


catalog.init();