import sdk from 'node-appwrite';
import { config } from 'dotenv';

// Load environment variables
config();

const { Client, Users, Databases, ID, Permission, Role } = sdk;

// Initialize Client
const client = new Client()
  .setEndpoint(process.env.VITE_APPWRITE_ENDPOINT)
  .setProject(process.env.VITE_APPWRITE_PROJECT_ID)
  .setKey(process.env.VITE_APPWRITE_API_KEY);

const users = new Users(client);
const databases = new Databases(client);

/**
 * Validates user input data
 */
const validateUserData = ({ email, username, phone, password }) => {
  if (!email || !username || !password) {
    return { isValid: false, error: 'Email, username and password are required.' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Invalid email address.' };
  }
  
  if (username.length < 3 || username.length > 30) {
    return { isValid: false, error: 'Username must be between 3-30 characters.' };
  }
  
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long.' };
  }
  
  if (phone && !/^\+?[1-9]\d{1,14}$/.test(phone)) {
    return { isValid: false, error: 'Invalid phone number format.' };
  }
  
  return { isValid: true };
};

/**
 * Creates a user account and profile
 */
export default async function createUser(req, res) {
  try {
    if (!req.payload) {
      return res.status(400).json({ success: false, error: 'No payload provided' });
    }

    let payload;
    try {
      payload = JSON.parse(req.payload);
    } catch (parseError) {
      return res.status(400).json({ success: false, error: 'Invalid payload format' });
    }

    const { 
      email,
      username,
      phone,
      password,
      gender,
      dateOfBirth,
      country,
      city,
      theme = 'light'
    } = payload;

    // Validate input
    const validation = validateUserData({ email, username, phone, password });
    if (!validation.isValid) {
      return res.status(400).json({ success: false, error: validation.error });
    }

    // Create user account
    const user = await users.create(
      ID.unique(),
      email,
      phone || undefined,
      password,
      username
    );

    // Create user profile document
    await databases.createDocument(
      process.env.VITE_APPWRITE_DATABASE_ID,
      process.env.VITE_APPWRITE_USERS_COLLECTION_ID,
      user.$id,
      {
        username: username.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        gender: gender || null,
        dateOfBirth: dateOfBirth || null,
        country: country || null,
        city: city || null,
        theme,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      [
        Permission.read(Role.user(user.$id)),
        Permission.update(Role.user(user.$id)),
        Permission.delete(Role.user(user.$id))
      ]
    );

    return res.json({
      success: true,
      userId: user.$id,
      email: user.email,
      message: 'User created successfully'
    });
    
  } catch (error) {
    console.error('Full user creation error:', error);
    
    let errorMessage = 'Failed to create user';
    let statusCode = 500;
    
    if (error.type === 'user_already_exists') {
      errorMessage = 'User with this email already exists';
      statusCode = 409;
    } else if (error.code === 401) {
      errorMessage = 'Authentication failed - invalid API credentials';
      statusCode = 401;
    } else if (error.code === 404) {
      errorMessage = 'Database or collection not found';
      statusCode = 404;
    }
    
    return res.status(statusCode).json({
      success: false,
      error: errorMessage,
      details: error.message 
    });
  }
}