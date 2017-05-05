import React from "react";

class ShopItem extends React.Component {
    render() {
        let product = this.props.product;
        return (
            <div className="shop-item">
                <img src={product.skuList[0].image} />
                <div className="shop-info">
                    <h1>{product.masterName}</h1>
                    <h2>{product.slaveName}</h2>
                    <p>¥{product.skuList[0].price/100}<span>已售{product.displaySalesCount}</span></p>
                </div>

            </div>
        );
    }
}

export default ShopItem;