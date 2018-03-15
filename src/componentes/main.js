import React from 'react';
import ListProduct from './ListProduct';
import ImgProduct from './ImgProduct';

const products = ['casacas', 'camisas', 'polos', 'jeans']
const Main = () => (
    <main>
    <ListProduct
        datosProduct = {products}
    />
    <ImgProduct/>
    </main>
)

export default Main;
