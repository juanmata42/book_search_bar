import axios from 'axios';
const API = axios.create({
  baseURL: 'https://reststop.randomhouse.com/resources',
});

export const getBooks = async (keyWords: string) => {
  let { data } = await API.get(`/titles?title=${keyWords}&max=10`);
  let results = data.title.filter(
    (item: any) => !(item.authorweb === 'Penguin Merchandise')
  );
  if (results.length < 5) {
    let { data } = await API.get(`/titles?title=${keyWords}&max=50`);
    results = data.title.filter(
      (item: any) => !(item.authorweb === 'Penguin Merchandise')
    );
  }
  results.sort(function (a: any, b: any) {
    let textA = a.titleweb.toUpperCase();
    let textB = b.titleweb.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  return results;
};
