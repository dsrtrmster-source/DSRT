// File: Backend/api/restore.ts

import type { NextApiRequest, NextApiResponse } from 'next'; import { replicate } from '../../App/Fitur/Restorasi/lib/replicate'; import { detectDamageLevel } from '../../App/Fitur/Restorasi/lib/damageDetection'; import { validateImage } from '../../App/Fitur/Restorasi/utils/validator';

export default async function handler(req: NextApiRequest, res: NextApiResponse) { if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' }); }

try { const { imageUrl } = req.body;

if (!imageUrl) {
  return res.status(400).json({ error: 'Image URL is required' });
}

const isValid = await validateImage(imageUrl);
if (!isValid) {
  return res.status(403).json({ error: 'Image failed content validation' });
}

const damageLevel = await detectDamageLevel(imageUrl);

const restoredImageUrl = await replicate(imageUrl, damageLevel);

return res.status(200).json({
  original: imageUrl,
  restored: restoredImageUrl,
  level: damageLevel,
});

} catch (error) { console.error('Restore API error:', error); return res.status(500).json({ error: 'Internal server error' }); } }

