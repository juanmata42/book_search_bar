import placeholder from '../assets/placeholder';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchPopup from '../components/search-popup';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

describe('search popup', () => {
  test('contains elements from placeholder', () => {
    render(
      <Provider store={createStore(reducers, compose(applyMiddleware(thunk)))}>
        <SearchPopup
          out={true}
          resultsList={placeholder}
          validInput={true}
          loading={false}
        />
      </Provider>
    );

    const SearchResults = screen.getByText(/Jerome/i);
    expect(SearchResults).toBeInTheDocument();
  });
});
