import React from 'react';
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureMovie from '../index';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

it("renders without crashing", () => {
    const div = document.createElement("div");
    const initialState = {genre:{genre_movie:[]}}
    const mockStore = configureStore()
    let store,wrapper

    store = mockStore(initialState)
    ReactDOM.render(<Provider store={store}><FeatureMovie movie={{title:'teste', backdrop_path:'/teste'}} /></Provider>, div)
})

it("check if feature works",()=>{
    const initialState = {genre:{genre_movie:[]}}
    const mockStore = configureStore()
    let store,wrapper

    store = mockStore(initialState)

    const { getByTestId } = render(<Provider store={store}><FeatureMovie movie={{title:'teste', backdrop_path:'/teste'}} /></Provider>);

    const root = getByTestId('feature');
    const title = getByTestId('title');

    expect(root).not.toBeEmpty('');
    expect(title).toHaveTextContent('teste');
    
  
})