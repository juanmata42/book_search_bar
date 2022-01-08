import {
  BookPicStyled,
  BookPicContainerStyled,
  BookCardStyled,
  BookTextContainerStyled,
  BookTitleStyled,
  BookAuthorStyled,
  BookFlapCopyStyled,
  BookPicLoaderContainer,
} from './styled-components';
import ReactLoading from 'react-loading';
import { useState } from 'react';

type BookCardProps = {
  uri: string;
  titleweb: string;
  authorweb: string;
  flapcopy: string;
  workid: string;
};

export default function BookCard({
  uri,
  titleweb,
  authorweb,
  flapcopy,
  workid,
}: BookCardProps) {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <BookCardStyled onClick={()=>{window.open(
      `https://www.amazon.es/s?k=${titleweb.replace(/ /g, '+')}`,
      '_blank'
    );}}>
      <BookPicContainerStyled>
        {loading && (
          <BookPicLoaderContainer>
            <ReactLoading
              type={'bars'}
              color={'#ff4444'}
              height={'40%'}
              width={'40%'}
            />
          </BookPicLoaderContainer>
        )}
        <BookPicStyled
          src={uri}
          alt={titleweb}
          onLoad={imageLoaded}
          onError={imageLoaded}
        />
      </BookPicContainerStyled>
      <BookTextContainerStyled>
        <BookTitleStyled>{titleweb}</BookTitleStyled>
        <BookAuthorStyled>{authorweb}</BookAuthorStyled>
        <BookFlapCopyStyled dangerouslySetInnerHTML={{ __html: flapcopy }} />
      </BookTextContainerStyled>
    </BookCardStyled>
  );
}
