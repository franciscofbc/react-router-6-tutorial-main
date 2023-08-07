import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find(({ id }) => id === productId);
  const { name, image } = product;

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products" className="btn">
        back to the products
      </Link>
    </section>
  );
};

export default SingleProduct;
