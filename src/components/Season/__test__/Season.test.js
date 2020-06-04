import React from 'react';
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Season from '../index';

import { BrowserRouter, Routes as Rts } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Season seasons={[]}/>, div)
})


it("check if season works",()=>{
    const { getByTestId } = render(<Season seasons={[]} />);

    const root = getByTestId('season');

    expect(root).toBeEmpty('');
})