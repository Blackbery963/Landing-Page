// import { Client, Account, ID, Databases } from 'appwrite';

// const client = new Client()
//   .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT,) // Replace with your Appwrite endpoint
//   .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Replace with your Appwrite project ID


//   const account = new Account(client);
//   const databases = new Databases(client);


//   export const signUpUser = async ({ username, email, password, gender, dateOfBirth, country, number, city }) => {
//     try {
//       const user = await account.create(ID.unique(), email, password, username);
//       await account.createEmailPasswordSession(email, password);
  
//       const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
//       const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
  
//       await databases.createDocument(
//         databaseId,
//         collectionId,
//         user.$id,
//         {
//           username,
//           gender,
//           dateOfBirth,
//           country,
//           number,
//           email,
//           city,
//         }
//       );
  
//       return user;
//     } catch (error) {
//       console.error('Appwrite signup error:', error.code, error.message, error.type);
//       if (error.code === 409) {
//         throw new Error('This email is already registered.');
//       } else if (error.code === 401) {
//         throw new Error('Invalid Appwrite credentials or project ID.');
//       } else if (error.code === 400) {
//         throw new Error('Invalid input. Ensure email and password are valid.');
//       } else {
//         throw new Error(`Signup failed: ${error.message}`);
//       }
//     }
//   };


import { Client, Account, ID, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Replace with your Appwrite endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Replace with your Appwrite project ID

const account = new Account(client);
const databases = new Databases(client);

/**
 * Validates user input data before submission
 * @param {Object} userData - User registration data
 * @returns {Object} - Validation result with isValid and error properties
 */
const validateUserData = (userData) => {
  const { email, password, username } = userData;
  
  // Basic validation
  if (!email || !password || !username) {
    return { isValid: false, error: 'Email, password and username are required.' };
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please provide a valid email address.' };
  }
  
  // Password strength validation
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long.' };
  }
  
  // Username validation
  if (username.length < 3 || username.length > 30) {
    return { isValid: false, error: 'Username must be between 3 and 30 characters.' };
  }
  
  return { isValid: true };
};

/**
 * Signs up a new user and stores their profile data
 * @param {Object} userData - User registration data
 * @returns {Promise<Object>} - Created user object
 */
export const signUpUser = async (userData) => {
  const {
    username,
    email,
    password,
    gender,
    dateOfBirth,
    country,
    number,
    city
  } = userData;

  try {
    // Validate input data
    const validation = validateUserData(userData);
    if (!validation.isValid) {
      throw new Error(validation.error);
    }

    // Format phone number (if provided)
    const formattedNumber = number ? String(number).trim() : null;
    
    // Create user account
    const user = await account.create(ID.unique(), email, password, username);
    
    // Create session for the new user
    await account.createEmailPasswordSession(email, password);
    
    // Store additional user data in database
    const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
    const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
    
    await databases.createDocument(
      databaseId,
      collectionId,
      user.$id,
      {
        username: username.trim(),
        gender: gender || null,
        dateOfBirth: dateOfBirth || null,
        country: country || null,
        number: formattedNumber,
        email: email.trim().toLowerCase(),
        city: city || null,
        createdAt: new Date().toISOString(),
      }
    );
    
    return user;
  } catch (error) {
    console.error('Appwrite signup error:', error.code, error.message, error.type);
    
    // Handle Appwrite specific errors
    if (error.code === 409) {
      throw new Error('This email is already registered.');
    } else if (error.code === 401) {
      throw new Error('Invalid Appwrite credentials or project ID.');
    } else if (error.code === 400) {
      throw new Error('Invalid input. Ensure email and password are valid.');
    } else if (error.code === 429) {
      throw new Error('Too many requests. Please try again later.');
    } else if (error.code === 503) {
      throw new Error('Appwrite service unavailable. Please try again later.');
    } else if (!error.code) {
      // Handle validation errors or other non-Appwrite errors
      throw error;
    } else {
      throw new Error(`Signup failed: ${error.message || 'Unknown error'}`);
    }
  }
};

/**
 * Verifies user email via Appwrite
 * @param {string} url - Redirect URL after verification
 * @returns {Promise<Object>} - Email verification result
 */
export const sendEmailVerification = async (url) => {
  try {
    return await account.createVerification(url);
  } catch (error) {
    console.error('Email verification error:', error);
    throw new Error(`Failed to send verification email: ${error.message}`);
  }
};