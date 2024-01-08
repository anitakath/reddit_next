


//COMPONENTS
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';

//REDUX
import {Provider} from 'react-redux'
import store from '@/store';

export default function Home() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
          
       
}
