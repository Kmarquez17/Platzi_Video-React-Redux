import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Map as map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../components/home';
import Videos from './videos';
import Video from '../containers/video'
import Header from '../components/header';
import NotFound from '../components/not-found'
import reducer from '../../reducers/index';

// ----- versión pre-ES6
// function logger({getState,dispatch}){
//   return (next) => {
//     return (action) => {
//       console.log('Nuevo Viejo accion', getState().toJS())
//       console.log('Enviar accion', action)
//       const value = next(action)
//       console.log('Nuevo Estado accion', getState().toJS())
//       return value
//     }
//   }
// }

// --- versión ES6
// const logger = ({ dispatch, getState }) => next => action => {
// 	console.log( 'estado anterior:', getState().toJS() )
// 	console.log( 'enviando acción:', action)
// 	const rslt = next( action )
// 	console.log( 'nuevo estado   :', getState().toJS() )
// 	return rslt
// }

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(
            logger,
            thunk
        )
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/videos" component={Videos} />
                        <Route exact path="/videos/:id" component={Video} />
                        <Redirect exact from="/v" to="/videos" />
                        <Redirect from="/v/:id" to="/videos/:id" />
                        <Route component={NotFound} />
                    </Switch>
                </Fragment>
            </Provider>
        );
    }
}

export default App