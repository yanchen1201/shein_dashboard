// utils
import { credential } from "firebase-admin"
import { ServiceAccount, getApp, getApps, initializeApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

const app = !getApps().length ? initializeApp({
	credential: credential.cert({
		projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
		privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
		clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL
} as ServiceAccount)}) : getApp()

const adminFirestore = getFirestore(app)
adminFirestore.settings({ ignoreUndefinedProperties: true })

export default app
export { adminFirestore }
