import axios from 'axios';
import { xml2json } from 'xml-js';
const API = axios.create({ baseURL: 'https://reststop.randomhouse.com/resources' });

export const getBooks = async (keyWords:string) => {
  let { data } = await API.get(`/titles?title=${keyWords}&max=20`);
    let jsonData = xml2json(data, {
      compact: false,
    });
  return jsonData;
};
