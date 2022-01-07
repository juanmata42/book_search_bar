import { useRef, useState } from 'react';
import BookCard from './book-card';
import placeholder from '../assets/placeholder';
import { PopUpStyled, SearchResultsList } from './styled-components';

export default function SearchPopUp({ out }: { out: boolean }) {
  const resultsList = placeholder.titles.title;
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
          resultsList.map(
            ({
              uri,
              titleweb,
              authorweb,
              flapcopy,
              workid,
            }: {
              uri: string;
              titleweb: string;
              authorweb: string;
              flapcopy: string;
              workid: string;
            }) => (
              <BookCard
                uri={uri}
                titleweb={titleweb}
                authorweb={authorweb}
                flapcopy={flapcopy}
                workid={workid}
                key={workid}
              />
            )
          )}
      </SearchResultsList>
    </PopUpStyled>
  );
}
