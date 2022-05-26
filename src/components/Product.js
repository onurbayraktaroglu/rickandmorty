import React, {Component} from 'react';

class Product extends Component {
    
    render(){
        const { id, name, price, img, cat } = this.props;
        return(
        <div className="Product-box" data-id={id}>
            <img src={img} alt={img}/>
            <p className="product-name" title={name}>{name}</p>
            <p className="cargo-free">Ücretsiz Teslimat</p>
            <p className="product-price">{price} TL</p>
            <div className="add-to-basket" onClick={ this.incrementCount }>Sepete Ekle</div>
        </div>
        )
    }
}

export default Product;