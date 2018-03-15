import React from 'react';
import PropTypes from 'prop-types';


const ListProduct = ({datosProduct}) => (
    <ul className="ul"> {datosProduct.map((prod,i) => (
        <li key={i}>{prod}</li>
    ))
    } </ul>
)

ListProduct.propTypes = {
    datosProduct: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ListProduct;