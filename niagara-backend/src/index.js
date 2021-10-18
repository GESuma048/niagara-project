import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import AlarmConsole from './components/AlarmConsole'

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

import {BrowserRouter,Switch,Route} from 'react-router-dom';

const store=createStore(rootReducer);
store.subscribe(() => console.log('store',store.getState()));

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/alarms' component={AlarmConsole}/>
        </Switch>
    </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
)