
import { Navigate, Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Header from '../Header/Header';
import './App.scss';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import RandomGame from '../RandomGame/Randomgame';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import Library from '../Library/Library';
import Boardgame from '../Boardgame/Boardgame';
import Settings from '../Settings/Settings';
import Tuto from '../Settings/Tuto/Tuto';
import ForgotPassword from '../Login/ForgotPassword/ForgotPassword';
import UpdatePasword from '../Login/UpdatePassword/UpdatePassword';

function PrivateRoute({ children }) {
  const logged = useSelector((state) => state.userReducer.logged);
  
  return logged ? children : <Navigate to="/connexion" />;
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
        path: "mot-de-passe-oublie",
        element: <ForgotPassword />,
      },
      {
        path: "nouveau-mot-de-passe",
        element: <UpdatePasword />,
      },
      {
        path: "inscription",
        element: <Register />,
      },
      {
        path: "selection-aleatoire",
        element: (
          <PrivateRoute>
            <RandomGame />
          </PrivateRoute>
        ),
      },
      {
        path: "bibliotheque",
        element: (
          <PrivateRoute>
            <Library />
          </PrivateRoute>
        ),
      },
      {
        path: "jeux-de-societe",
        element: (
          <PrivateRoute>
            <Boardgame />
          </PrivateRoute>
        ),
      },
      {
        path: "parametres",
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
      },
      {
        path: "tuto",
        element: (
          <PrivateRoute>
            <Tuto />
          </PrivateRoute>
        ),
      },
    ],
  }
]);

function Root() {
  const logged = useSelector((state) => state.userReducer.logged);
  return (
    <div className="App">
      <Header/>
      <Outlet />
      <hr className='separate'/>
      {logged && <Footer />}
    </div>
  )
}

function App() {
  return <RouterProvider router={router} />
}

export default App;
