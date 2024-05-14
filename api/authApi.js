import axios from 'axios';

const apiUrl = 'your_api_url_here';

const authApi = {
  login: async (credentials) => {
    // Send login request to the server
    try {
      const response = await axios.post(`${apiUrl}/login`, credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  register: async (userData) => {
    // Send registration request to the server
    try {
      const response = await axios.post(`${apiUrl}/register`, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default authApi;
