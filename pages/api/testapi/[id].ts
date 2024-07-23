export default async function handler(req: any, res: any) {
  const { id } = req.query;
  res.status(200).json({ params: id });
}
