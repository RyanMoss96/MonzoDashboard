import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import monzoDashboard from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(monzoDashboard)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
