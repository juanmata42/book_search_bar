import { useRef, useState } from 'react';
import BookCard from './book-card';
import placeholder from '../assets/placeholder';
import { PopUpStyled, SearchResultsList } from './styled-components';

export default function SearchPopUp({
  out,
  resultsList,
}: {
  out: boolean;
  resultsList: {
    "@uri": string;
    titleweb: string;
    authorweb: string;
    flapcopy: string;
    workid: string;
  }[];
}) {
  /* const resultsList = placeholder.titles.title; */
  const [isBottom, setIsBottom] = useState(false);
  const listInnerRef = useRef<HTMLUListElement | null>(null);
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    }
  };
  return (
    <PopUpStyled out={out} bottom={isBottom}>
      <SearchResultsList onScroll={onScroll} ref={listInnerRef}>
        {resultsList &&
          resultsList.map((book) => (
            <BookCard
              uri={book['@uri']}
              titleweb={book.titleweb}
              authorweb={book.authorweb}
              flapcopy={book.flapcopy}
              workid={book.workid}
              key={book.workid}
            />
          ))}
      </SearchResultsList>
    </PopUpStyled>
  );
}
