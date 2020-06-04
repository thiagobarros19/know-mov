import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import SliderElement from '../index';

import { BrowserRouter, Routes as Rts } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    const initialState = {genre:{genre_movie:{id:1}}}
    const mockStore = configureStore()

    let store,wrapper

    store = mockStore(initialState)
    ReactDOM.render(
        <BrowserRouter>
        <Rts>
             <Provider store={store}><SliderElement element={{}} /></Provider>
        </Rts>
        </BrowserRouter>
    , div)
})


it("check if slider element works",()=>{
   /*  const { getByTestId } = render(<SliderElement />);

    const root = getByTestId('button');

    expect(root).not.toBeEmpty('');  */
})