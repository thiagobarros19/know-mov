import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Header from '../index';

import { BrowserRouter, Routes as Rts } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");

    const initialState = {}
    const mockStore = configureStore()
    let store,wrapper

    store = mockStore(initialState)
    
    ReactDOM.render(
        <BrowserRouter>
            <Rts>
            <Provider store={store}> <Header /> </Provider>
            </Rts>
        </BrowserRouter>
    , div)
})


it("check if header works",()=>{


    const initialState = {}
    const mockStore = configureStore()
    let store,wrapper

    store = mockStore(initialState)

    const { getByTestId } = render(
        <BrowserRouter>
            <Rts>
                <Provider store={store}> <Header /> </Provider>
            </Rts>
        </BrowserRouter>
       );

    const header = getByTestId('header');
    expect(header).not.toBeEmpty('');
    
})