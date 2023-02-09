import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './pages/home/Home';
import Items from './pages/items/Items';

const App: FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<Items />} />
      </Routes>
    </>
  );
};

export default App;
