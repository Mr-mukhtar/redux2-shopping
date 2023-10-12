import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 99.9,
    title: 'My First Book',
    description: 'The first book I ever wrote',
  },
  {
    id: 'p2',
    price: 49.99,
    title: 'Second Book',
    description: 'Another great book',
  },
  {
    id: 'p3',
    price: 19.99,
    title: 'Third Book',
    description: 'A fascinating read',
  },
  {
    id: 'p4',
    price: 79.99,
    title: 'Fourth Book',
    description: 'A masterpiece in literature',
  },
  {
    id: 'p5',
    price: 29.99,
    title: 'Fifth Book',
    description: 'A captivating novel',
  },
  {
    id: 'p6',
    price: 39.99,
    title: 'Sixth Book',
    description: 'A must-read',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
