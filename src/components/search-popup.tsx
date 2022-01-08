import { useRef, useState } from 'react';
import BookCard from './book-card';
import { PopUpStyled, SearchResultsList } from './styled-components';
import loadingBookGif from '../assets/loading-book.gif';

export default function SearchPopUp({
  out,
  resultsList,
  validInput,
  loading
}: {
  out: boolean;
  validInput: boolean;
  loading: boolean;
  resultsList: {
    '@uri': string;
    titleweb: string;
    authorweb: string;
    flapcopy: string;
    workid: string;
  }[];
}) {
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
    <PopUpStyled
      out={out}
      bottom={isBottom}
      resultsNum={resultsList?.length}
      validInput={validInput}
    >
      {resultsList ? (
        <SearchResultsList onScroll={onScroll} ref={listInnerRef}>
          {loading ? (<img src={loadingBookGif} alt="loading" />):(resultsList &&
            resultsList?.map((book) => (
              <BookCard
                uri={book['@uri']}
                titleweb={book.titleweb}
                authorweb={book.authorweb}
                flapcopy={book.flapcopy}
                workid={book.workid}
                key={`${book.workid}${book.titleweb}`}
              />
            )))}
        </SearchResultsList>
      ) : (
        'No results found'
      )}
    </PopUpStyled>
  );
}
