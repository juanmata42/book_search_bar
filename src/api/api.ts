import axios from 'axios';
const API = axios.create({ baseURL: 'https://reststop.randomhouse.com/resources' });

export const getBooks = async (keyWords:string) => {
  let {data} = await API.get(`/titles?title=${keyWords}&max=10`);
  return data.title;
};
