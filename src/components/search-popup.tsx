import { useRef, useState } from 'react';
import BookCard from './book-card';
import { PopUpStyled, SearchResultsList } from './styled-components';
import loadingBookGif from '../assets/loading-book.gif';

export default function SearchPopUp({
  out,
  resultsList,
  validInput,
  loading,
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
}): JSX.Element {
  const [isBottom, setIsBottom] = useState(false);
  const listInnerRef = useRef<HTMLUListElement | null>(null);
  /* this function is called when the user scrolls on the results list and will make dissapear the after
  element with a gradient that shows when the user hasn't scrolled to the end of the list */
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
  // here we have a conditional that will show the loading gif until the results are loaded
  return (
    <PopUpStyled
      out={out}
      bottom={isBottom}
      resultsNum={resultsList?.length}
      validInput={validInput}
      $loading={loading}
    >
      <SearchResultsList onScroll={onScroll} ref={listInnerRef}>
        {loading ? (
          <img src={loadingBookGif} alt="loading" />
        ) : resultsList ? (
          resultsList?.map((book) => (
            <BookCard
              uri={book['@uri']}
              titleweb={book.titleweb}
              authorweb={book.authorweb}
              flapcopy={book.flapcopy}
              workid={book.workid}
              key={`${book.workid}${book.titleweb}`}
            />
          ))
        ) : (
          'No results found'
        )}
      </SearchResultsList>
    </PopUpStyled>
  );
}
