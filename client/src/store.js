// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const initialState = {};

// const middleware = [thunk];

// // const store = createStore(rootReducer, initialState, compose(
// //     applyMiddleware(...middleware),
// //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// // ));

// const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// const enhancer = composeEnhancers(applyMiddleware(...middleware));

// const store = createStore(
// rootReducer,
// initialState,
// enhancer
// );

// export default store;
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

// export default store;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;