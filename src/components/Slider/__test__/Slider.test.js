import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Slider from '../index';

import { BrowserRouter, Routes as Rts } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Slider elements={[]} media_type='tv'/>, div)
})


it("check if slider works",()=>{
     const { getByTestId } = render(<Slider elements={[]} media_type='tv'/>);

    const root = getByTestId('slider');

    expect(root).not.toBeEmpty(''); 
})