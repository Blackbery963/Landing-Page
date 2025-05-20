
import { Client, Account, Databases, Storage, ID, Permission, Role } from 'appwrite';
import { toast } from 'react-toastify';

// Initialize Client
const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// Initialize Services
const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

// Config
const config = {
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  usersCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
  bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID
};

// Add this at the component level or in appwriteConfig.js
if (!config.bucketId || !config.databaseId || !config.usersCollectionId) {
  console.error('Missing Appwrite configuration');
  toast.error('System configuration error. Please contact support.');
}

// Export all services and utilities
export { client, account, databases, storage, config, ID, Permission, Role };