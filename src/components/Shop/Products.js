import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_products =[
  {
    id: 'p1',
    price: 60,
    title : 'My First Book',
    description:'The first book I ever wrote',
  },
  {
    id: 'p2',
    price: 70,
    title : 'My second Book',
    description:'The second book I ever wrote',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { Dummy_products.map((product)=>(
          <ProductItem
          key ={product.id}
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
