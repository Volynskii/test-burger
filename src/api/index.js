import axios from "axios";

const API = axios.create({baseURL:"https://aqueous-hamlet-67526.herokuapp.com"});


export const getPosts = () => API.get('/posts');
export const getCategories = () => API.get('/categories');

