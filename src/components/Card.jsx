// Presentational Component
// Handling Actions in the action-state-view loop

function Card({ addProduct, setName, setPrice }) {
  return (
    <form onSubmit={addProduct}>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Card;
