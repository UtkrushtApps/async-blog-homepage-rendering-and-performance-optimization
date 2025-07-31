import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simulate background notification logging, e.g., to analytics or email system
  res.status(200).json({success: true});
}
