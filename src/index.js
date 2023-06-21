import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Components/Main';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { fetchUsers } from './Features/posts/actionCreator';

const initialStore = async () => {
  await persistor.persist();
  const state = store.getState();
  if (state.users.users.length === 0) {
    store.dispatch(fetchUsers)
  }
}

initialStore().catch((err) => (console.log(err))).finally(() => {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
});

