import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import AppNavBar from './components/AppNavBar';
import { Provider } from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

const App: React.FC = () => {
  return (
      <Provider store={store}>
        <div className='App'>
            <AppNavBar />
            <Container>
                <ItemModal />
                <ShoppingList />
            </Container>
        </div>
      </Provider>
  );
}

export default App;
