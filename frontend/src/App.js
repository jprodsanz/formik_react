import "./App.css";
import { LandingPage } from './components/LandingPage';
import { Header } from './components/Header/Header';
import { DisplayAll } from './components/DisplayAll';
import { ErrorPage } from './components/ErrorPage';
import { Edit} from './components/Edit';
import {Routes, Route} from 'react-router-dom'
import BasicForm from './components/BasicForm';

function App() {
  return (
    <>
      <Header />
        <main>
          <Routes>
            <Route path='/' element= { <LandingPage/> } exact/>
            <Route path='/new' element= { <BasicForm/> } />
            <Route path='/display' element= { <DisplayAll/> } />
            <Route path='/edit/:id' element= { <Edit/> } />
            <Route path='*' element= { <ErrorPage/> } />
          </Routes>
        </main>
    </>
  );
}

export default App;
