import * as admin from 'firebase-admin';

let privateKey = process.env.FIREBASE_PRIVATE_KEY || '';
// Handle escaped newlines
privateKey = privateKey.replace(/\\n/g, '\n');
// Remove surrounding quotes if Vercel dashboard added them
if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
    privateKey = privateKey.slice(1, -1);
} else if (privateKey.startsWith("'") && privateKey.endsWith("'")) {
    privateKey = privateKey.slice(1, -1);
}

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey,
        }),
    });
}

export const messaging = admin.messaging();
