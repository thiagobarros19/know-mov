import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from './store/Reducers'
import createSagaMiddleware from 'redux-saga'
import {applyMiddleware,createStore, compose} from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import rootSaga from './actions/sagas'

const sagaMiddleware = createSagaMiddleware()

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = compose(applyMiddleware(sagaMiddleware, promise, multi))(createStore)(reducers, devTools)


sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
