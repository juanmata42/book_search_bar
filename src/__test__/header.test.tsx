import {
  render,
  screen,
  cleanup,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/header';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import axios from 'axios';

describe('Header', () => {
  const store = createStore(reducers, compose(applyMiddleware(thunk)));
  afterEach(cleanup);
  describe("When user clicks on search BookMarkLine", () => {
    test("It should focus into the searchBar and unfocus on the next click", () => {
        render(
            <Provider store={store}>
            <Header />
            </Provider>
        );
        const BookMarkLine = screen.getByRole('button', {
          name: /BookMarkLine/i,
        });
        fireEvent.click(BookMarkLine);
        const input = screen.getByPlaceholderText(/Search books/i);
        expect(input).toHaveFocus();
        fireEvent.click(BookMarkLine);
        expect(input).not.toHaveFocus();
    });
    });

  describe('Input value', () => {
    test('should be empty', () => {
      render(
        <Provider store={store}>
          <Header />
        </Provider>
      );
      const input = screen.getByPlaceholderText(/Search books/i);
      expect(input).toHaveValue('');
    });
    describe('When user types in input', () => {
      test('should contain the word test', () => {
        render(
          <Provider store={store}>
            <Header />
          </Provider>
        );
        const input = screen.getByPlaceholderText(/Search books/i);
        fireEvent.change(input, {
          target: {
            value: 'test',
          },
        });
        expect(input).toHaveValue('test');
      });
      test('should show loading picture within the search popup', async () => {
        const mockResponse = {
          data: {
            items: [
              {
                volumeInfo: {
                  title: 'test',
                },
              },
            ],
          },
        };
        axios.get = jest
          .fn()
          .mockImplementation(() => Promise.resolve(mockResponse));
        render(
          <Provider store={store}>
            <Header />
          </Provider>
        );
        const input = screen.getByPlaceholderText(/Search books/i);
        fireEvent.change(input, {
          target: {
            value: 'test',
          },
        });
        await waitFor(() => {
          const searchBar = screen.getByAltText(/loading/i);
          expect(searchBar).toBeInTheDocument();
        });
      });
    });
  });
});
