import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from './providers/context'

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
