import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FontPage from './Components/FontPage/FontPage';
import Login from './Components/Login/Login';

function App() {

  const router = createBrowserRouter([
        {
          path: '/',
          element:<FontPage></FontPage>
        },
        {
          path: '/login',
          element:<Login></Login>
        }
  ])
  return (
    <div className="">

    <RouterProvider router={router}>

    </RouterProvider>
</div>
  );
}

export default App;
