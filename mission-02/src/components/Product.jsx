import ProductListData from '../data/productListData.json';
import ProductList from './ProductList';

export default function Product() {
  console.log(ProductListData.products);
  return (
    <section className="flex items-center justify-center w-full">
      <div className="flex justify-between h-24pxr mb-20pxr">
        <h1 className="sr-only">상품리스트</h1>
        <div className="w-783pxr">
          <ul className="flex flex-wrap justify-between product-container">
            {ProductListData.products.map((data) => (
              <ProductList key={data.id} {...data} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
