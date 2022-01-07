import styled from 'styled-components';
import logo512 from '../assets/logo512.png';
type BookCardProps = {
  uri: string;
  titleweb: string;
  authorweb: string;
  flapcopy: string;
  workid: string;
};
const BookCardStyled = styled.li`
  display: flex;
  height: 115px;
`;
const BookPicContainerStyled = styled.div`
  height: 115px;
  width: 75px;
  background-image: url(${logo512});
  background-position: center;
  background-size: auto 75px;
  background-repeat: no-repeat;
`;
const BookPicStyled = styled.img`
  height: 100%;
  width: auto;
`;
export default function BookCard({
  uri,
  titleweb,
  authorweb,
  flapcopy,
  workid,
}: BookCardProps) {
  return (
    <li>
      <BookPicContainerStyled>
        <BookPicStyled src={uri} alt={titleweb} />
      </BookPicContainerStyled>
      <div>{titleweb}</div>
      <div>{authorweb}</div>
      <div>{flapcopy}</div>
    </li>
  );
}
