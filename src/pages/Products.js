import { Link, useParams } from "react-router-dom";
const ProductsPage = () => {
  const PRODUCTS = [
    { id: "p1", title: "Product1" },
    { id: "p2", title: "Product2" },
    { id: "p3", title: "Product3" },
  ];

  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}>product.title</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
