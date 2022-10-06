const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title, price) =>
    `<div class="goods-item">
      <h3 class="tagname">Наименование товара: ${title}</h3>
      <p>Цена: ${price}</p>
    </div>`;

const renderGoodsList = list => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

window.onload = () => {
    renderGoodsList(goods);
};