import logo from './logo.svg';
import './App.css';
import Context, { AppContext } from './Pages/Context';
import { routes } from './Pages/Routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Context>

        <RouterProvider router={routes} />

      </Context>

    </div>
  );
}

export default App;
