import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import axios from 'axios';

describe('App', () => {
  const store = createStore(reducers, compose(applyMiddleware(thunk)));
  afterEach(cleanup);
  describe('If no geo is provided', () => {
    test('renders search bar in english', () => {
      render(
        <Provider store={store}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Provider>
      );
      const searchBar = screen.getByPlaceholderText(/Search books/i);
      expect(searchBar).toBeInTheDocument();
    });
  });
  describe('If geo is provided', () => {
    test('renders search bar in english with geo US', async () => {
      axios.get = jest.fn().mockImplementation(() =>
        Promise.resolve({
          data: {
            country: 'US',
          },
        })
      );
      render(
        <Provider store={store}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Provider>
      );
      await waitFor(() => {
        const searchBar = screen.getByPlaceholderText(/Search books/i);
        expect(searchBar).toBeInTheDocument();
      });
    });
    test('renders search bar in spanish with geo ES', async () => {
      axios.get = jest.fn().mockImplementation(() =>
        Promise.resolve({
          data: {
            country: 'ES',
          },
        })
      );
      render(
        <Provider store={store}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Provider>
      );
      await waitFor(() => {
        const searchBar = screen.getByPlaceholderText(/Buscar libros/i);
        expect(searchBar).toBeInTheDocument();
      });
    });
    test('renders search bar in italian with geo IT', async () => {
      axios.get = jest.fn().mockImplementation(() =>
        Promise.resolve({
          data: {
            country: 'IT',
          },
        })
      );
      render(
        <Provider store={store}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Provider>
      );
      await waitFor(() => {
        const searchBar = screen.getByPlaceholderText(/Ricerca di libri/i);
        expect(searchBar).toBeInTheDocument();
      });
    });
    test('renders search bar in english with geo not in list ZZ', async () => {
      axios.get = jest.fn().mockImplementation(() =>
        Promise.resolve({
          data: {
            country: 'ZZ',
          },
        })
      );
      render(
        <Provider store={store}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Provider>
      );
      await waitFor(() => {
        const searchBar = screen.getByPlaceholderText(/Search books/i);
        expect(searchBar).toBeInTheDocument();
      });
    });
  });
});
