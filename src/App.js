// App.js
import React from 'react';
import List from './List';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <List />
      </Provider>
    </div>
  );
}
