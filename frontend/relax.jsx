import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx'
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser
        }
      },
      session: { id: window.currentUser.id, generalChannel: 1 }
    };
    
    store = configureStore(preloadedState);

    delete window.currentUser;

  } else {
    store = configureStore();
  }

  window.state = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});