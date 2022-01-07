import {
  HeaderStyled,
  BookMarkLine,
  SearchInput,
  SearchIcon,
  CloseIcon,
} from './styled-components';
import { useState, useRef } from 'react';
import SearchPopUp from './search-popup';
import { getBooks } from '../api/api';
export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const searchInput = useRef<HTMLInputElement | null>(null);
  //function that turns spaces into +

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    /* getBooks() */
  };
  const resetInputField = () => {
    setInputValue('');
  };
  const handleFocus = () => {
    if (!isSearchOpen) {
      searchInput.current?.focus();
      setIsSearchOpen(true);
    } else {
      setIsSearchOpen(false);
      searchInput.current?.blur();
      resetInputField();
    }
  };
  return (
    <HeaderStyled>
      <BookMarkLine onClick={handleFocus} />
      <SearchIcon out={isSearchOpen} viewBox="0 0 183.792 183.792">
        <path d="M54.734 9.053C39.12 18.067 27.95 32.624 23.284 50.039c-4.667 17.415-2.271 35.606 6.743 51.22 12.023 20.823 34.441 33.759 58.508 33.759a67.31 67.31 0 0 0 22.287-3.818l30.364 52.592 21.65-12.5-30.359-52.583c10.255-8.774 17.638-20.411 21.207-33.73 4.666-17.415 2.27-35.605-6.744-51.22C134.918 12.936 112.499 0 88.433 0 76.645 0 64.992 3.13 54.734 9.053zm70.556 37.206c5.676 9.831 7.184 21.285 4.246 32.25-2.938 10.965-9.971 20.13-19.802 25.806a42.466 42.466 0 0 1-21.199 5.703c-15.163 0-29.286-8.146-36.857-21.259-5.676-9.831-7.184-21.284-4.245-32.25 2.938-10.965 9.971-20.13 19.802-25.807A42.47 42.47 0 0 1 88.433 25c15.164 0 29.286 8.146 36.857 21.259z" />
      </SearchIcon>
      <CloseIcon out={!isSearchOpen} viewBox="0 0 330 330">
        <path d="M165 0C120.926 0 79.492 17.163 48.328 48.327c-64.334 64.333-64.334 169.011-.002 233.345C79.49 312.837 120.926 330 165 330c44.072 0 85.508-17.163 116.672-48.328 64.334-64.334 64.334-169.012 0-233.345C250.508 17.163 209.072 0 165 0zm74.246 239.245a14.956 14.956 0 0 1-10.607 4.394 14.948 14.948 0 0 1-10.605-4.394L165 186.213l-53.033 53.033a14.956 14.956 0 0 1-10.607 4.394 14.948 14.948 0 0 1-10.605-4.394c-5.859-5.857-5.859-15.355 0-21.213L143.787 165l-53.033-53.033c-5.859-5.857-5.859-15.355 0-21.213 5.857-5.857 15.355-5.857 21.213 0L165 143.787l53.031-53.033c5.857-5.857 15.355-5.857 21.213 0 5.859 5.857 5.859 15.355 0 21.213L186.213 165l53.033 53.032c5.858 5.858 5.858 15.356 0 21.213z" />
      </CloseIcon>
      <SearchInput
        ref={searchInput}
        onChange={handleUserInput}
        value={inputValue}
        out={!isSearchOpen}
      />
      <SearchPopUp out={!isSearchOpen} />
    </HeaderStyled>
  );
}
