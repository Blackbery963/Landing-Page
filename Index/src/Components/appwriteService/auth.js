// import { account, databases, config, ID, Permission, Role } from '/home/swarnadip/Documents/Index/Index/Index/src/appwriteConfig.js';

// export async function signUpUser(signupData) {
//   try {
//     // Step 1: Create account
//     const user = await account.create(
//       ID.unique(),
//       signupData.email,
//       signupData.password,
//       signupData.username // Use username as the name
//     );

//     // Step 2: Log in user
//     await account.createEmailPasswordSession(signupData.email, signupData.password);

//     // Step 3: Save preferences (optional)
//     const preferences = {
//       theme: signupData.theme || 'light',
//     };
//     await account.updatePrefs(preferences);

//     // Step 4: Save to database
//     await databases.createDocument(
//       config.databaseId,
//       config.usersCollectionId,
//       ID.unique(),
//       {
//         accountId: user.$id,
//         username: signupData.username,
//         email: signupData.email,
//         number: signupData.number || '',
//         country: signupData.country || '',
//         state: signupData.state || '',
//         dateOfBirth: signupData.dateOfBirth || '',
//         age: parseInt(signupData.age) || 0,
//       },
//       [
//         Permission.read(Role.user(user.$id)),
//         Permission.write(Role.user(user.$id)),
//       ]
//     );

//     console.log('Signup complete!');
//     return user;
//   } catch (error) {
//     console.error('Signup failed:', error );
//     throw new Error(error.message || 'Failed to sign up');
//   }
// }

// import { account, databases, config, ID, Permission, Role } from '/home/swarnadip/Documents/Index/Index/Index/src/appwriteConfig.js';

// export async function signUpUser(signupData) {
//   try {
//     // Step 1: Create a new user account
//     const user = await account.create(
//       ID.unique(),
//       signupData.email,
//       signupData.password,
//       signupData.username // this will be stored as the user's display name
//     );

//     // Step 2: Automatically create a session (login)
//     await account.createEmailPasswordSession(signupData.email, signupData.password);

//     // Step 3: Set user preferences (optional)
//     const preferences = {
//       theme: signupData.theme || 'light',
//     };
//     await account.updatePrefs(preferences);

//     // Step 4: Store additional user info in your database
//     await databases.createDocument(
//       config.databaseId,
//       config.usersCollectionId,
//       ID.unique(),
//       {
//         accountId: user.$id,
//         username: signupData.username,
//         email: signupData.email,
//         number: signupData.number || '',
//         country: signupData.country || '',
//         state: signupData.state || '',
//         dateOfBirth: signupData.dateOfBirth || '',
//         age: signupData.age ? parseInt(signupData.age) : 0,
//       },
//       [
//         Permission.read(Role.user(user.$id)),
//         Permission.write(Role.user(user.$id)),
//       ]
//     );

//     console.log('Signup complete!');
//     return user;

//   } catch (error) {
//     console.error('Signup failed:', error);

//     // More user-friendly error messages
//     if (error.code === 409) {
//       throw new Error('An account with this email already exists.');
//     } else if (error.code === 422) {
//       throw new Error('Invalid input. Please check your data.');
//     } else if (error.code === 401) {
//       throw new Error('Unauthorized request. Check your API key or permissions.');
//     } else {
//       throw new Error(error.message || 'An unknown error occurred during signup.');
//     }
//   }
// }

import { account, databases, config, ID, Permission, Role } from '/home/swarnadip/Documents/Index/Index/Index/src/appwriteConfig.js';

export async function signUpUser(signupData) {
  try {
    // Step 1: Create account
    const user = await account.create(
      ID.unique(),
      signupData.email,
      signupData.password,
      signupData.username
    );

    // Step 2: Log in user
    await account.createEmailPasswordSession(signupData.email, signupData.password);

    // Step 3: Save preferences (optional)
    const preferences = {
      theme: signupData.theme || 'light',
    };
    await account.updatePrefs(preferences);

    // Step 4: Save to database
    console.log('Creating document with:', {
      databaseId: config.databaseId,
      collectionId: config.usersCollectionId,
      data: {
        accountId: user.$id,
        username: signupData.username,
        gender: signupData.gender,
        dateOfBirth: signupData.dateOfBirth,
        country: signupData.country,
        number: signupData.number,
        email: signupData.email,
        city: signupData.city,
        Title: signupData.username,
        Tag: signupData.username,
        Description:signupData.username
      },
    });
    await databases.createDocument(
      config.databaseId,
      config.usersCollectionId,
      ID.unique(),
      {
        accountId: user.$id,
        username: signupData.username,
        gender: signupData.gender,
        dateOfBirth: signupData.dateOfBirth,
        country: signupData.country,
        number: signupData.number,
        email: signupData.email,
        city: signupData.city,
        Title: signupData.username,
        Tag: signupData.username,
      },
      [
        Permission.read(Role.user(user.$id)),
        Permission.write(Role.user(user.$id)),
      ]
    );

    console.log('Signup complete!');
    return user;
  } catch (error) {
    console.error('Signup failed:', {
      message: error.message,
      code: error.code,
      type: error.type,
    });
    throw new Error(error.message || 'Failed to sign up');
  }
}