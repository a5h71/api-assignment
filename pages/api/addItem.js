let items = [];

const handler = (req, res) => {
  if (req.method === 'POST') {
    console.log('Request Body', req.body)
    const data = JSON.stringify(req.body);

   
    const newItem = { id: Date.now(), name: data.name };
    items.push(newItem);

    
    res.status(200).json(newItem);
  } else {
    res.status(405).end(); 
  }
}

export default handler
