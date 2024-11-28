import { Link, Navigate, Outlet, RouterProvider, createBrowserRouter, useNavigate} from 'react-router-dom';
import Header from '../Header/Header';
import './App.scss';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import RandomGame from '../RandomGame/Randomgame';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import Library from '../Library/Library';
import Boardgame from '../Boardgame/Boardgame';
import Settings from '../Settings/Settings';
import Tuto from '../Settings/Tuto/Tuto';
import ForgotPassword from '../Login/ForgotPassword/ForgotPassword';
import UpdatePasword from '../Login/UpdatePassword/UpdatePassword';
import React, { useEffect } from 'react';
import InstallPWA from '../InstallPWA/InstallPWA';
import { fetchUser } from '../../actions/user';
import Error404 from '../Error404/Error404';
import ContactAdmin from '../ContactAdmin/ContactAdmin.js';

function PrivateRoute({ children, ...rest }) {
  const logged = useSelector((state) => state.userReducer.logged);
  // const logged = localStorage.getItem('logged');
  
  return logged ? React.cloneElement(children, { ...rest }) : <Navigate to="/connexion" />;
}

function usePreventRefresh() {
  const logged = localStorage.getItem('logged');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      dispatch(fetchUser());
    } 
  }, [logged, dispatch, navigate]);
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
        path: "nouveau-mot-de-passe/:token",
        element: <UpdatePasword />,
      },
      {
        path: "inscription",
        element: <Register />,
      },
      {
        path: "contact-admin",
        element: <ContactAdmin />,
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
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  }
]);

function Root() {
  const logged = useSelector((state) => state.userReducer.logged);
  const checkAccount = useSelector((state) => state.userReducer.check);

  usePreventRefresh();
  
  return (
    <div className="App">
      <Header/>
      <Outlet context={{ checkAccount }} />
      <InstallPWA />
      <hr className='separate'/>
      {logged ? <Footer checkAccount={checkAccount}/> : <Link to="/contact-admin" className='footer flex justify-content-center mb-3'>Contacter l'administrateur</Link>}
    </div>
  )
}

function App() {
  return <RouterProvider router={router} />
}

export default App;
