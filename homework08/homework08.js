const API_URL = 'https://localhost:3000';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        baskets: [],
        filteredGoods: [],
        basketGoods: [],
        searchLine: '',
        isVisibleCart: false,
        totalPriceMessage: '',
        totalPriceCoin: '0',
    },

    methods: {
        makeGETRequest(url, callback) {
            var xhr;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }
            xhr.open('GET', url, true);
            xhr.send();
        },

        makePOSTRequest(url, data, callback) {
            let xhr;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            xhr.send(data);
        },

        addBasket() {
            let toBasket;
            this.goods.forEach(function (item) {
                if (event.target.id == item.id) {
                    toBasket = { count: item.count, id: item.id, product_name: item.product_name, price: item.price }
                }
            });
            findelem = this.baskets.findIndex(item => item.id == toBasket.id)
            if (findelem === -1) {
                findelem = this.goods.findIndex(item => item.id == toBasket.id);
                this.baskets.push(this.goods[findelem]);
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(toBasket),
                }
                const cart = fetch('/addToCart', options);
            }
            else {
                this.baskets[findelem].count++;
            }
            this.basketPrice();
            alert('Товар успешно добавлен в корзину!')
        },

        basketPrice() {
            this.totalPriceCoin = this.baskets.reduce(function (price, basket) {
                return price + basket.price * basket.count;
            }, 0);
        },

        deleteElCart() {
            let toBasket;
            this.goods.forEach(function (item) {
                if (event.target.id == item.id) {
                    toBasket = { count: item.count, id: item.id, product_name: item.product_name, price: item.price }
                }
            });
            findelem = this.baskets.findIndex(item => item.id == toBasket.id)
            console.log(findelem);
            if (this.baskets[findelem].count === 1) {
                this.baskets.splice(findelem, 1);
            }
            else {
                this.baskets[findelem].count--;
            }
            this.basketPrice();
        },

        addElCart() {
            let toBasket;
            this.goods.forEach(function (item) {
                if (event.target.id == item.id) {
                    toBasket = { count: item.count, id: item.id, product_name: item.product_name, price: item.price }
                }
            });
            findelem = this.baskets.findIndex(item => item.id == toBasket.id)
            console.log(findelem);
            this.baskets[findelem].count++;

            this.basketPrice();
        },

        deleteItem() {
            let toBasket;
            this.goods.forEach(function (item) {
                if (event.target.id == item.id) {
                    toBasket = { count: item.count, id: item.id, product_name: item.product_name, price: item.price }
                }
            });
            findelem = this.baskets.findIndex(item => item.id == toBasket.id)
            this.baskets.splice(findelem, 1);
            this.basketPrice();
        },

        filterGoods() {
            this.filteredGoods = this.goods.filter((e) => { return e.product_name.includes(this.searchLine) })
        },
    },

    mounted() {
        this.makeGETRequest(`/catalogData`, (goods) => {
            this.goods = JSON.parse(goods);
            this.filteredGoods = JSON.parse(goods);
        });
    }
});

// Vue.component('goods-list', {
//     props: ['goods'],
//     template: `
//     <div class="goods-list">
//     <h2>Каталог товаров</h2>
//     <goods-item v-for="good in goods" :good="good"></goods-item>
//     </div>
//     `
// })

// Vue.component('goods-item', {
//     props: ['good'],
//     template: `
//     <div class="goods-item">
//     <h3>{{ good.product_name }}</h3>
//     <p>{{ good.price }}</p>
//     <button :id="good.id" v-on:click="addBasket(event)">Добавить</button>
//     </div>`
// })

// Vue.component('search', {
//     template: `
//     <input class="goods-search" @input="$emit('input', $event.target.value)" />`
// })

// Vue.component('basket-list', {
//     props: ['goods'],
//     template: `
//     <div class="basket">
//                     <h2>Корзина</h2>
//                     <basket-item v-for="good in goods" :key="good.id" :good="good"></basket-item>
//                 </div>`
// })

// Vue.component('basket-item', {
//     props: ['good'],
//     template: `
//     <div class="basket-item">
//     <h3>{{ good.product_name }}</h3>
//     <p>{{ good.price }}</p>
//     </div>`
// })
