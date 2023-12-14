// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello, this is a simple Next.js API!', method:req.method });
  } else {
    res.status(405).json({ message: 'Method Not Allowed', method:req.method });
  }
}
