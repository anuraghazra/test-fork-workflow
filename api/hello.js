export default async (req, res) => {
  res.send(`Vercel pro status: ${process.env.HAS_VERCEL_PRO}`);
};
