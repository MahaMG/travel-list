import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        // e.target.value => القيمة من الفاليو في الاوبشن مش الفاليو في السيلكيت => <option value={num}>
        onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, ((_, i) => i + 1)).map(num => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>

    /*
    Array.from() Description

    Array.from(arrayLike)
    Array.from(arrayLike, mapFn)
    Array.from(arrayLike, mapFn, thisArg)

    console.log(Array.from('foo'));
    // Expected output: Array ["f", "o", "o"]
    console.log(Array.from([1, 2, 3], (x) => x + x));
    // Expected output: Array [2, 4, 6] */
  );
}
