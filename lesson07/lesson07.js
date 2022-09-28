const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                    <button class="btn-clear" id="${good.id_product_cart}">Удалить</button>
                </div>`;
    }
}

const catalogItem = {
    render(cat) {
        return `<div class="cat">
                    <div><b>Наименование</b>: ${cat.product_name}</div>
                    <div><b>Цена за шт.</b>: ${cat.price}</div>
                    <button class="btn-catalog" id="${cat.id_product_ctlg}">Добавить в корзину</button>
                </div>`;
    }
}

const buyItem = {
    render() {
        return `<h2>АДРЕС ДОСТАВКИ</h2>
        <h3>В корзине ${cart.goods.length} позиций(я) стоимостью ${cart.getCartPrice()}</h3>
        <form class="form_total" action="#">
            <p class="state_name">Город</p>
            <input class="state" id="town" placeholder="Введите город" type="text" autofocus required> 
            <p class="state_name">Улица</p>
            <input class="state" id="street" placeholder="Введите улицу" type="text">
            <p class="state_name">Дом</p>
            <input class="state" id="home" placeholder="Введите дом" type="text">
            <button class="btn-confirm" type="submit">Подтвердить адрес доставки</button>
        </form>`;
    }
}

const comments = {
    render() {
        return `<h2>КОММЕНТАРИИ К ЗАКАЗУ</h2>
        <form class="form_name" action="#">
            <p class="state_name">Имя</p>
            <input class="state" id="town" placeholder="Введите имя" type="name" autofocus required> 
            <p class="state_name">E-mail</p>
            <input class="state" id="street" placeholder="Введите e-mail" type="email">
            <p class="state_name">Комментарий</p>
            <input class="state" id="home" placeholder="" type="text">
            <button class="btn-name" type="submit">Оформить заказ</button>
        </form>`;
    }
}

const back = {
    render() {
        return `<H2>КОРЗИНА</H2>
        <div class="cart-list"></div>
        <button class="cart-btn">Очистить корзину</button>
        <button class="cart-buy">Купить</button>
        <H2>КАТАЛОГ</H2>
        <div class="catalog-list">
        </div>`;
    }
};

const cart = {
    cartListBlock: null,
    cartButton: null,
    clearItemBtn: null,
    cartItem,
    goods: [
        {
            id_product_ctlg: 523,
            id_product_cart: 522,
            product_name: 'Чайник',
            price: 600,
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
            this.addEventClickClear();
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

    addEventClickClear() {
        for (let i = 0; i < this.goods.length; i++) {
            var ids = this.goods[i].id_product_cart;
            this.clearItemBtn = document.getElementById(ids);
            this.clearItemBtn.addEventListener('click', e => this.clearItem(e));
        }
    },

    clearItem(e, product, findelem) {
        product = e.target.id;
        console.log(product);
        findelem = this.goods.findIndex(item => item.id_product_cart == product);
        console.log(findelem);
        this.goods.splice(findelem, 1);
        this.cartListBlock.innerHTML = '';
        this.render();
    }
};

const catalog = {
    cart,
    catalogItem,
    catalogListBlock: null,
    catalogButton: null,
    cats: [
        {
            id_product_ctlg: 523,
            id_product_cart: 522,
            product_name: 'Чайник',
            price: 600,
            quantity: 1,
        },
        {
            id_product_ctlg: 223,
            id_product_cart: 222,
            product_name: 'Машинка',
            price: 1000,
            quantity: 1,
        },
        {
            id_product_ctlg: 452,
            id_product_cart: 451,
            product_name: 'Руль',
            price: 2000,
            quantity: 1,
        },
        {
            id_product_ctlg: 112,
            id_product_cart: 111,
            product_name: 'Чехол на телефон',
            price: 500,
            quantity: 1,
        },
        {
            id_product_ctlg: 325,
            id_product_cart: 324,
            product_name: 'Планшет',
            price: 10000,
            quantity: 1,
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
            var ids = this.cats[i].id_product_ctlg;
            this.catalogButton = document.getElementById(ids);
            this.catalogButton.addEventListener('click', e => this.addCart(e));
        }
    },

    addCart(e, product, findelem) {
        product = e.target.id;
        findelem = this.cats.findIndex(item => item.id_product_ctlg == product);
        this.cart.goods.push(this.cats[findelem]);
        this.cart.cartListBlock.innerHTML = '';
        this.cart.render();
    }
}

const buy = {
    cartBuy: null,
    cartCont: null,
    buyConfirm: null,
    buyBack: null,
    buyItem,
    comments,
    catalog,
    back,
    cart,
    initBuy() {
        this.cartCont = document.querySelector('.container');
        this.cartBuy = document.querySelector('.cart-buy');
        this.cartBuy.addEventListener('click', this.buyCart.bind(this));
    },
    buyCart() {
        if (this.cart.goods.length) {
            this.cartCont.innerHTML = '';
            this.cartCont.insertAdjacentHTML('beforeend', this.buyItem.render());
            this.renderComments();
        }
        else {
            alert('Ошибка покупки! Корзина пуста!');
        }
    },

    renderComments() {
        this.buyConfirm = document.querySelector('.btn-confirm');
        this.buyConfirm.addEventListener('click', this.initComments.bind(this));
    },

    initComments() {
        this.cartCont.innerHTML = '';
        this.cartCont.insertAdjacentHTML('beforeend', this.comments.render());
        this.renderBack();
    },

    renderBack() {
        this.buyBack = document.querySelector('.btn-name');
        this.buyBack.addEventListener('click', this.initBack.bind(this));
    },

    initBack() {
        this.cartCont.innerHTML = '';
        let date = new Date().toLocaleDateString();
        alert('Ваш заказ от ' + date + ' на сумму ' + this.cart.getCartPrice() + ' передан в обработку.')
        this.cartCont.insertAdjacentHTML('beforeend', this.back.render());
        this.cart.goods = [];
        this.catalog.init();
        this.initBuy();
    }
}

catalog.init();
buy.initBuy();