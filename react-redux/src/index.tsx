import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './ducks/counterToolkit';
// import { counterReducer, initialState } from 'ducks/counter';
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

// const store = createStore(counterReducer, initialState);
// configureStoreを使うと、デフォルトでReduxDevToolと連携する。
const store = configureStore({ reducer: counterSlice.reducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

reportWebVitals();
