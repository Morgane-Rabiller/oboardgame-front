
import { Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Header from '../Header/Header';
import './App.scss';
import Home from '../Home/Home';
import Login from '../Login/Login';
// import { useState } from "react";
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
    ],
  }
]);

function Root() {
  return (
    <div className="App">
      <Header/>
      <Outlet />
    </div>
  )
}

function App() {
  // const [isLogged, setIsLogged] = useState(false);
  return <RouterProvider router={router} />
}

export default App;
