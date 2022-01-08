import axios from 'axios';
const API = axios.create({ baseURL: 'https://reststop.randomhouse.com/resources' });

export const getBooks = async (keyWords:string) => {
  let {data} = await API.get(`/titles?title=${keyWords}&max=10`);
  console.log(data)
  //qwerty check why when writing nonsense it saves last valid search
  return data.title;
};
