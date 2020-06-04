import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import SliderButton from '../index';



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render( <SliderButton />  , div)
})


it("check if slider button works",()=>{
    const { getByTestId } = render(<SliderButton />);

    const root = getByTestId('button');

    expect(root).not.toBeEmpty(''); 
})