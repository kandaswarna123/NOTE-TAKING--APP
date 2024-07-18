import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const register = async (username, password) => {
  try {
    const res = await axios.post(`${API_URL}/auth/register`, { username, password });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (username, password) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { username, password });
    localStorage.setItem('token',res.data.token)
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllNotes = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(`${API_URL}/notes`, {
      headers: { 'x-auth-token': token },
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getNoteById = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(`${API_URL}/notes/${id}`, {
      headers: { 'x-auth-token': token },
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createNote = async (title, content) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.post(`${API_URL}/notes`, { title, content }, {
      headers: { 'x-auth-token': token },
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateNote = async (id, title, content) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.put(`${API_URL}/notes/${id}`, { title, content }, {
      headers: { 'x-auth-token': token },
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteNote = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.delete(`${API_URL}/notes/${id}`, {
      headers: { 'x-auth-token': token },
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
