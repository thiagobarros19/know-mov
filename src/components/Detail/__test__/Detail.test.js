import React from 'react';
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Detail from '../index';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

it("check if detail works",()=>{
    const initialState = {movie:{movie:{release_date:'2004'}}  }
    const mockStore = configureStore()
    let store,wrapper

    store = mockStore(initialState)

    const { getByTestId } = render(<Provider store={store}><Detail/></Provider>);
    
    const form = getByTestId('detail');
    const evaluation = getByTestId('evaluation');

    expect(form).not.toBeEmpty('');
    expect(evaluation).toHaveTextContent('Avaliação dos usuários');
})