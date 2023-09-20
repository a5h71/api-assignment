
import { useState } from 'react';

export default function Demo() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');

  
  const fetchItems = async () => {
    const response = await fetch('/api/items');
    const data = await response.json();
    setItems(data);
  };

  
  const addItem = async () => {
    const response = await fetch('/api/addItem', {
      method: 'POST',
      body: JSON.stringify({ name: newItemName }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const newItem = await response.json();
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItemName('');
    }
  };

  return (
    <div>
      <h1>API Demo</h1>
      <button onClick={fetchItems}>Fetch Items</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="New Item Name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}
