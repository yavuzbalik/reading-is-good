import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Search  from "../viev/searchView";
import rootReducer from '../../../redux/reducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

describe("Search", () => {
    test('Search Input', () => {
        render(<Provider store={store}>
                    <Search />
                </Provider>);
        const element = screen.getByPlaceholderText(/Ürün Ara/i);
        expect(element).toBeInTheDocument;
    });
    test('Search Button', () => {
        render(<Provider store={store}>
                    <Search />
                </Provider>);
        const element = screen.getByText(/Ara/i);
        expect(element).toBeInTheDocument;
    })
})