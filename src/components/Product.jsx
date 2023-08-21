// Container Component
// Responsible for State in action-state-view loop
import { useState } from "react";
import Card from "./Card.jsx";
import ViewList from "./ViewList.jsx";

function Product() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  // const [product, setProduct] = useState({});
  const [productList, setProductList] = useState([]);

  function addProduct(e) {
    e.preventDefault();
    // Old Product Object Code
    // setProduct({ name, price });

    // Multi-line list update code
    // const productObj = { name, price };
    // const newList = [...productList, productObj];
    // setProductList(newList);
    // One line list update code
    setProductList([...productList, { name, price }]);
  }

  return (
    <>
      <h2>Product</h2>
      <Card addProduct={addProduct} setName={setName} setPrice={setPrice} />
      <ViewList productList={productList} />
    </>
  );
}

export default Product;
