// const appwriteConfig ={
//   appwriteendpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
//   appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
//   appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
//   appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
//   appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
// }

// export default appwriteConfig;

import { Client, Account, Databases, Storage, ID, Permission, Role } from 'appwrite';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Load from .env
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client); // Initialize Storage instance

// Export configuration details for convenience
const config = {
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  usersCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
  storageBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID, // Include bucket ID
};

// Export ID, Permission, and Role for use in other files
export { client, account, databases, storage, config, ID, Permission, Role };