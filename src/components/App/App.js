
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
        path: "Jeux-de-société",
        element: (
          <PrivateRoute>
            <Boardgame />
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
