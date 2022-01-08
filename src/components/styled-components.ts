import styled, { keyframes } from 'styled-components';
import logo512 from '../assets/logo512.png';

//header components

export const HeaderStyled = styled.header`
  width: 100%;
  height: 50px;
  background-color: #10bafc;
  position: fixed;
`;

export const BookMarkLine = styled.button`
  width: 0;
  height: 60px;
  transition: height 0.15s ease-out;
  border-right: 10px solid #ff4444;
  border-left: 10px solid #ff4444;
  border-bottom: 5px solid transparent;
  position: absolute;
  right: 10px;
  z-index: 1;
  &:active {
    height: 80px;
    transition: height 0.15s ease-in;
  }
`;

export const SearchInput = styled.input.attrs({
  type: 'search',
})`
  width: ${(props: { out: boolean }) => (props.out ? '0' : '200px')};
  padding-left: ${(props: { out: boolean }) => (props.out ? '0' : '10px')};
  height: 30px;
  border: none;
  border-radius: 15px 0 0 15px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: width 0.15s, padding 0.15s ease-in-out;
  position: absolute;
  z-index: 1;
  top: 12px;
  right: 30px;
  &:focus {
    outline: none;
    padding-left: 10px;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  /* clears the ‘X’ from Internet Explorer */
  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  /* clears the ‘X’ from Chrome */
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

//animations

export const fadeIn = keyframes`
  from {
    transform: scale(0.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0.25);
    opacity: 0;
  }
`;

//searchbar icons

export const SearchIcon = styled.svg`
  fill: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 2;
  pointer-events: none;
  height: 20px;
  width: 20px;
  right: 10px;
  top: 17px;
  visibility: ${(props: { out: boolean }) =>
    props.out ? 'hidden' : 'visible'};
  animation: ${(props: { out: boolean }) => (props.out ? fadeOut : fadeIn)}
    0.15s linear;
  transition: visibility 0.15s linear;
`;

export const CloseIcon = styled.svg`
  fill: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 3;
  pointer-events: none;
  height: 20px;
  width: 20px;
  right: 10px;
  visibility: ${(props: { out: boolean }) =>
    props.out ? 'hidden' : 'visible'};
  animation: ${(props: { out: boolean }) => (props.out ? fadeOut : fadeIn)}
    0.15s linear;
  transition: visibility 0.15s linear;
  top: 17px;
`;

//search popup components
interface PopUpStyledInterface {
  out: boolean;
  bottom: boolean;
  resultsNum: number;
  validInput: boolean;
  $loading: boolean;
}
function adjustHeigth(num: number) {
  if (num === 1) {
    return "220";
  }
  if (num === 2) {
    return "430";
  }
  if (num >= 3) {
    return "500";
  } else {
    return "50";
  }
}
export const PopUpStyled = styled.section<PopUpStyledInterface>`
  background-color: #f5f5f5;
  position: absolute;
  z-index: 6;
  height: ${({ resultsNum, $loading }) =>
    resultsNum ? adjustHeigth(resultsNum) : $loading ? '500' : '40'}px;
  max-width: 90vw;
  width: 500px;
  right: 10px;
  top: 70px;
  @media only screen and (max-width: 600px) {
    width: 90vw;
    font-size: 15px;
  }
  visibility: ${({ validInput }) => (validInput ? 'visible' : 'hidden')};
  max-height: ${({ out }) => (out ? '0' : '500px')};
  transition: all 0.3s;
  padding: ${({ out }) => (out ? '0 10px' : '10px')};
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

  &::after {
    content: '';
    -webkit-mask: linear-gradient(to top, #f5f5f5, transparent);
    mask: linear-gradient(to top, #f5f5f5, transparent);
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: ${({ bottom, out }) => (bottom || out ? '0' : '100px')};
    left: 0;
    display: ${({ resultsNum }) => (resultsNum ? 'block' : 'none')};
    background-color: #f5f5f5;
    opacity: ${({ bottom, out }) => (bottom || out ? '0' : '1')};
    transition: all 0.3s ease-in-out;
  }
`;
export const SearchResultsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

//book-card components
export const BookCardStyled = styled.li`
  display: flex;
  height: 200px;
  width: 100%;
  gap: 10px;
  cursor:pointer;
  &:hover {
    background-color: #ffffff;
  }
`;
export const BookPicContainerStyled = styled.div`
  height: 100%;
  width: 35%;
  background-image: url(${logo512});
  background-position: center;
  background-size: auto 130px;
  @media only screen and (max-width: 600px) {
    background-size: auto 90px;
  }
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
`;
export const BookPicStyled = styled.img`
  height: auto;
  max-height: 100%;
  width: 100%;
`;
export const BookTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;
`;
export const BookTitleStyled = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  direction: ltr;
`;
export const BookAuthorStyled = styled.h3`
  font-size: 15px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  direction: ltr;
`;
export const BookFlapCopyStyled = styled.div`
  font-size: 15px;
  font-weight: thin;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 90px;
  display: -webkit-box !important;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  white-space: normal;
`;
export const BookPicLoaderContainer = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
z-index:1
`