import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Basket  from "../viev/basketView";
import rootReducer from '../../../redux/reducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

describe("Basket", () => {
    test('Basket Button', () => {
        render(<Provider store={store}>
                    <Basket />
                </Provider>);
        const element = screen.getByText(/Sepetim/i);
        expect(element).toBeInTheDocument;
    })
})