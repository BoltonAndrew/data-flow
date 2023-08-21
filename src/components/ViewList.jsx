// Presentational Components
// Handling Views in the action-state-view loop

// Map demo
// const arr = [1, 2, 3, 4];
// const newArr = arr.map((item, index) => {
//   console.log(item);
//   console.log(index);
//   return item * index;
// });
// console.log(newArr);
// 1
// 0
// 2
// 1
// 3
// 2
// 4
// 3
// [0, 2, 6, 12]

function ViewList({ productList }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productList.map((product, i) => {
          return (
            <tr key={i}>
              <td>{product.name}</td>
              <td>£{product.price}.00</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ViewList;
