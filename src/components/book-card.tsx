import {
  BookPicStyled,
  BookPicContainerStyled,
  BookCardStyled,
  BookTextContainerStyled,
  BookTitleStyled,
  BookAuthorStyled,
  BookFlapCopyStyled
} from './styled-components';

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
  return (
    <BookCardStyled>
      <BookPicContainerStyled>
        <BookPicStyled src={uri} alt={titleweb} />
      </BookPicContainerStyled>
      <BookTextContainerStyled>
        <BookTitleStyled>{titleweb}</BookTitleStyled>
        <BookAuthorStyled>{authorweb}</BookAuthorStyled>
        <BookFlapCopyStyled dangerouslySetInnerHTML={{ __html: flapcopy }} />
      </BookTextContainerStyled>
    </BookCardStyled>
  );
}
