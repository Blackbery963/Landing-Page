// import { Client, Account, Databases, Storage, ID, Permission, Role } from 'appwrite';

// const client = new Client()
//   .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Load from .env
//   .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// const account = new Account(client);
// const databases = new Databases(client);
// const storage = new Storage(client); // Initialize Storage instance

// // Export configuration details for convenience
// const config = {
//   databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
//   usersCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
//   storageBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID, // Include bucket ID
//   imagesCollectionId: import.meta.env.VITE_APPWRITE_IMAGES_COLLECTION_ID,
// };

// // Export ID, Permission, and Role for use in other files
// export { client, account, databases, storage, config, ID, Permission, Role };













import { Client, Account, Databases, Storage, ID, Permission, Role } from 'appwrite';

// Validate environment variables
const requiredEnvVars = [
  'VITE_APPWRITE_ENDPOINT',
  'VITE_APPWRITE_PROJECT_ID',
  'VITE_APPWRITE_DATABASE_ID',
  'VITE_APPWRITE_IMAGES_COLLECTION_ID',
  'VITE_APPWRITE_BUCKET_ID',
  'VITE_APPWRITE_USERS_COLLECTION_ID'
];

const missingEnvVars = requiredEnvVars.filter((varName) => !import.meta.env[varName]);
if (missingEnvVars.length > 0) {
  throw new Error(`Missing environment variables: ${missingEnvVars.join(', ')}`);
}

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

const config = {
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  imagesCollectionId: import.meta.env.VITE_APPWRITE_IMAGES_COLLECTION_ID,
  bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
  usersCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID
};

export { client, account, databases, storage, config, ID, Permission, Role };