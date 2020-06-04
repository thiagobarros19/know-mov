import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../index';

it("check if footer works",()=>{
   
    const { getByTestId } = render(<Footer/>);

    const name = getByTestId('footer');
 
    expect(name).toHaveTextContent('Created by: Thiago Silva - 2020');
    
})