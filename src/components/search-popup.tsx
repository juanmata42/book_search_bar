import { useState, useRef } from 'react';
import BookCard from './book-card';
import placeholder from '../assets/placeholder';
import { PopUpStyled, SearchResultsList } from './styled-components';

export default function SearchPopUp({ out }: { out: boolean }) {
  const resultsList = placeholder.titles.title;
  return (
    <PopUpStyled out={out}>
      <SearchResultsList>
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
