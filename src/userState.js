let currentUser = null;

export const setCurrentUser = (user) => {
    console.log("This works somehow?");
  currentUser = user;
};

export const getCurrentUser = () => {
  return currentUser;
};

// Function to get user's ID
export const getCurrentUserId = () => {
  return currentUser ? currentUser.uid : null; // Return user ID or null if no user is logged in
};
