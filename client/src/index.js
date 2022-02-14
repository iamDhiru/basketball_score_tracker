import react from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import './App.css'
import {Provider} from 'react-redux';
import store from './redux/store';

console.log("test",store)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("root")
);