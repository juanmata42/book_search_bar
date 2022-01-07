import styled, { keyframes } from 'styled-components';
import { useState, useRef } from 'react';
import BookCard from './book-card';
import placeholder from '../assets/placeholder';

const fadeIn = keyframes`
  from {
    transform: scale(0.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0.25);
    opacity: 0;
  }
`;
const PopUpStyled = styled.ul`
  background-color: #f5f5f5;
  position: absolute;
  z-index: 6;
  height: 500px;
  max-width: 90vw;
  width: 500px;
  right: 10px;
  top: 70px;
  display: flex;
    flex-direction: column;
    gap: 5px;
  @media only screen and (max-width: 600px) {
    width: 90vw;
    font-size: 15px;
  }
  visibility: ${(props: { out: boolean }) =>
    props.out ? 'hidden' : 'visible'};
  animation: ${(props: { out: boolean }) => (props.out ? fadeOut : fadeIn)}
    0.15s linear;
  transition: visibility 0.15s linear;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    right: 150px;
    border: 15px solid transparent;
    border-top: none;
    border-bottom-color: #f5f5f5;
    filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.1));
  }
`;
export default function SearchPopUp({ out }: { out: boolean }) {
  const resultsList = placeholder.titles.title;
  return (
    <PopUpStyled out={out}>
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
    </PopUpStyled>
  );
}
