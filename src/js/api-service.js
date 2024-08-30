import axios from 'axios';
axios.defaults.baseURL = 'https://648ed67c75a96b66444457c1.mockapi.io';

export const getTotalCustomers = async (page = 1, limit = 10) => {
  try {
    const responce = await axios.get(`/contacts?page=${page}&limit=${limit}`);
    console.log(responce);
    return responce.data;
  } catch (error) {
    console.error('Error getting total contacts:', error);
    throw error;
  }
};
