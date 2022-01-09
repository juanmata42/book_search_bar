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
import amazonCountryList from '../assets/amazonCountryList';
import ReactLoading from 'react-loading';
import { useState } from 'react';
import { useSelector } from 'react-redux';

type BookCardProps = {
  uri: string;
  titleweb: string;
  authorweb: string;
  flapcopy: string;
  workid: string;
};

//left workid unused but still here because it can be used in the future

export default function BookCard({
  uri,
  titleweb,
  authorweb,
  flapcopy,
  workid,
}: BookCardProps): JSX.Element {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  //changes amazon link with the country
  const country: keyof typeof amazonCountryList = useSelector(
    (state: any) => state.geo.geo
  );

  //dangerouslySetInnerHTML is used to render the flapcopy and keep the style it comes with
  return (
    <BookCardStyled
      onClick={() => {
        window.open(
          `https://www.amazon${
            amazonCountryList[country] || '.com'
          }/s?k=${titleweb.replace(/ /g, '+')}`,
          '_blank'
        );
      }}
    >
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
