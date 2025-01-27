import axios from "axios";

const API_URL = "http://localhost:4000";  // Adjust based on your backend server

// Function to handle user signup
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/users/signup`, userData);
    return response.data;  // Return success message or user data
  } catch (error) {
    throw error.response?.data || "Signup failed";
  }
};

// Function to handle user login
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/users/login`, userData);
    if (response.data.token) {
      localStorage.setItem("userToken", response.data.token);  // Save token to local storage
    }
    return response.data;
  } catch (error) {
    throw error.response?.data || "Login failed";
  }
};

// Function to get the currently logged-in user's token
export const getAuthToken = () => {
  return localStorage.getItem("userToken");
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  const token = getAuthToken();
  return token ? true : false;
};

// Function to log out the user
export const logoutUser = () => {
  localStorage.removeItem("userToken");
};

// Function to get user profile (protected route example)
export const getUserProfile = async () => {
  try {
    const token = getAuthToken();
    if (!token) throw new Error("No authentication token found");

    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch user profile";
  }
};
