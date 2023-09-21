
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
    try {
      console.log('Adding item with name:', newItemName);
      const response = await fetch('/api/addItem', {
        method: 'POST',
        body: JSON.stringify({ name: newItemName }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Response:', response);
  
      if (!response.ok) {
        console.error('Server responded with an error status:', response.status);
        throw new Error('Network response was not ok');
      }
  
      const newItem = await response.json();
      console.log('Items before update:', items);
      setItems((prevItems) => [...prevItems, newItem]);
      console.log('Items after update:', items);
      setNewItemName('');
    } catch (error) {
      console.error('An error occurred:', error);
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
