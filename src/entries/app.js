import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { Map as map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home from '../pages/components/home';
import Videos from '../pages/containers/videos';
import Header from '../pages/components/header';
import NotFound from '../pages/components/not-found'

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

const homeContainer = document.getElementById('home-container')
// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;

render(
  <BrowserRouter
  // basename='/videos'
  >
    <Provider store={store}>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/videos" component={Videos} />
          <Redirect from="/v" to="/videos" />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Provider>
  </BrowserRouter>
  , homeContainer);
