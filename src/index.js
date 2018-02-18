import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import monzoDashboard from './reducers'
import registerServiceWorker from './registerServiceWorker';

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const user = {
  data: {
    loaded: false,
    user: {}
  }
}

const store = createStore(monzoDashboard, {user}, enhancers)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
