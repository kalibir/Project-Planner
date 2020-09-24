import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import firebase from './config/fbConfig'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance} from 'redux-firestore'

const store = createStore(rootReducer, 
  compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase})),
  )
  );

  const profileSpecificProps = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    enableRedirectHandling: false,
    resetBeforeLogin: false
}

const rffProps = {
    firebase,
    config: {},
    config: profileSpecificProps,
    dispatch: store .dispatch,
    createFirestoreInstance
  };



ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rffProps} >
            <App />  
        </ReactReduxFirebaseProvider>
    </Provider>, 
document.getElementById('root'));