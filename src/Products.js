import React from "react" 

const products = [
    {id: 1, name: 'Футбольный мяч', price: 25},
    {id: 2, name: 'Теннисная ракетка', price: 70},
    {id: 3, name: 'Баскетбольное кольцо', price: 120},
    {id: 4, name: 'Велосипед', price: 300},
    {id: 5, name: 'Беговая дорожка', price: 600},
];



function Products(){
    return (
    <div>
        <h3>Мои товары - новый компонент</h3>
        <b>Первый способ</b>
        <div className="my">
            <div>Товар {products[0].name} стоит {products[0].price}</div>
            <div>Товар {products[1].name} стоит {products[1].price}</div>
            <div>Товар {products[2].name} стоит {products[2].price}</div>
            <div>Товар {products[3].name} стоит {products[3].price}</div>
            <div>Товар {products[4].name} стоит {products[4].price}</div>
        </div> 
        <b>Второй способ</b>
        <ul className="my">
        {products.map((product) => (
            <li>Товар {product.name} стоит {product.price} руб.</li>
        ))}
        </ul>
   </div>)
}

export default Products