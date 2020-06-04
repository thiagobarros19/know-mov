import React from 'react';
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Drawer from '../index';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Drawer/>, div)
})

it("check if form displays",()=>{
    const { getByTestId } = render(<Drawer />);
    const form = getByTestId('drawer');

    expect(form).not.toBeEmpty('');
})



