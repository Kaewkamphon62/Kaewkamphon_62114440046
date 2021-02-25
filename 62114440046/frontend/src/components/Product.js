import { Link } from 'react-router-dom';
import './Product.css';

function Product(props) {
    const p = props.product;
    return (
    <div className="product">
      <img className="product-image" src={p.url} alt="product" />
      <div className="product-name">
        <Link to={`/product/${p._id}`} >{p.name}</Link>
      </div>
      <div className="product-brand">{p.age}</div>
    </div>
    );
}

export default Product;
