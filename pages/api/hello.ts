import { NextApiRequest, NextApiResponse } from 'next';
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  return res.json({ hello: 'world!' });
};
export default handler;
