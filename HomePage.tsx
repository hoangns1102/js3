import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { ProductCard } from '../components/elements/ProductCard';

const HomePage = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setProductList(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log('result', productList);

  return (
    <div className="flex flex-wrap mx-auto container">
      {productList.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
