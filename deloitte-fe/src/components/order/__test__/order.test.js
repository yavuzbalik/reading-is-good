import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Order  from "../viev/orderView";
import rootReducer from '../../../redux/reducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

describe("Order", () => {
    test('Order Button', () => {
        render(<Provider store={store}>
                    <Order />
                </Provider>);
        const element = screen.getByText(/Siparişlerim/i);
        expect(element).toBeInTheDocument;
    })
})