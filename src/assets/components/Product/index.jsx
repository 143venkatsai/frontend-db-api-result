import './index.css'

const Product = (props) =>{
    const {productDetails} = props;
    const {name, quantity, price} = productDetails;
    return(
        <li className="product-item">
            <h2 className='name'>{name}</h2>
            <p className='quantity'>{quantity}</p>
            <p className='price'>{price}</p>
        </li>
    )
}

export default Product