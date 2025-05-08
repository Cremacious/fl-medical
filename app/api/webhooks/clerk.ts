// filepath: /pages/api/webhooks/clerk.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Webhook } from 'svix'; // Clerk uses Svix for webhooks
import { db } from '@/lib/db';

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(webhookSecret);

  let event: { type: string; data: any };
  try {
    event = wh.verify(
      JSON.stringify(payload),
      headers as Record<string, string>
    ) as { type: string; data: any };
  } catch (err) {
    console.error('Webhook verification failed:', err);
    return res.status(400).send('Webhook verification failed');
  }

  if (event.type === 'user.created') {
    const user = event.data;

    // Add user to the database
    await db.user.create({
      data: {
        clerkUserId: user.id,
        username: user.username || `user_${user.id}`,
        email: user.email_addresses[0]?.email_address || '',
        role: 'user',
      },
    });
  }

  res.status(200).send('Webhook received');
}
