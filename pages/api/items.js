
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    
    res.status(200).json(items);
  } else if (req.method === 'POST') {
    
    try {
      const data = JSON.parse(req.body);
      const newItem = { id: Date.now(), name: data.name };
      items.push(newItem);
      res.status(200).json(newItem);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Invalid JSON data' });
    }
  } else {
    res.status(405).end();
  }
}
