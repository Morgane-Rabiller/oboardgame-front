
import { Navigate, Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Header from '../Header/Header';
import './App.scss';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import RandomGame from '../RandomGame/Randomgame';
import store from '../../store';

const logged = store.getState().userReducer.logged;

function ConditionalRoute(route) {
  return logged ? route : <Navigate to="/connexion" />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "connexion",
        element: <Login />,
      },
      {
        path: "inscription",
        element: <Register />,
      },
      {
        path: "selection-aleatoire",
        element: ConditionalRoute(<RandomGame />) ,
      },
    ],
  }
]);

function Root() {
  return (
    <div className="App">
      <Header/>
      <Outlet />
      <hr className='separate'/>
    </div>
  )
}

function App() {
  return <RouterProvider router={router} />
}

export default App;
