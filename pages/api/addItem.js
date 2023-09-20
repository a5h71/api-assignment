
export default function handler(req, res) {
  if (req.method === 'POST') {
    
    const data = JSON.parse;

   
    const newItem = { id: Date.now(), name: data.name };
    items.push(newItem);

    
    res.status(200).json(newItem);
  } else {
    res.status(405).end(); 
  }
}
