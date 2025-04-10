import { Client, Storage, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('67f1641000352947613f'); // Replace with your actual project ID

const storage = new Storage(client);
const databases = new Databases(client);

export { client, storage, databases };
