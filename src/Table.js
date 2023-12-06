import React from "react";

const products = [
    {id: 1, name: 'Футбольный мяч', price: 25},
    {id: 2, name: 'Теннисная ракетка', price: 70},
    {id: 3, name: 'Баскетбольное кольцо', price: 120},
    {id: 4, name: 'Велосипед', price: 300},
    {id: 5, name: 'Беговая дорожка', price: 600},
];



function Table(){
    const rows = products.map(function(item){
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>
        )
    })


    return (
        <div className="table">
            <table>
            <thead>
                <tr>
                    <td>Продукт</td>
                    <td>Цена</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
            </table>
        </div>
    )
}

export default Table