import React from 'react';
import ReactDom from 'react-dom';
import App from "./components/App.js"
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';  
import reminder from './reducers/Reducer';
import './index.css'


const store = createStore(reminder)

ReactDom.render(
   <Provider store={store}>
        <App/>
   </Provider>,
    document.getElementById('root')
)