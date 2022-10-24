const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        isVisibleCart: false,
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

        filterGoods() {
            this.filteredGoods = this.goods.filter((e) => { return e.product_name.includes(this.searchLine) })
        },
    },

    mounted() {
        this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            this.filteredGoods = JSON.parse(goods);
        });
    },
});

Vue.component('goods-list', {
    props: ['goods'],
    template: `
    <div class="goods-list">
    <h2>Каталог товаров</h2>
    <goods-item v-for="good in goods" :good="good"></goods-item>
    </div>
    `
})

Vue.component('goods-item', {
    props: ['good'],
    template: `
    <div class="goods-item">
    <h3>{{ good.product_name }}</h3>
    <p>{{ good.price }}</p>
    </div>`
})

Vue.component('search', {
    template: `
    <input class="goods-search" @input="$emit('input', $event.target.value)" />`
})

Vue.component('basket', {
    template: `
    <div class="basket">
                    <h2>Корзина</h2>
                    <h4>Корзина пуста</h4>
                </div>`
})
