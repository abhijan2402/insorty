import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FontPage from './Components/FontPage/FontPage';
import Login from './Components/Login/Login';
import AdminMain from './Components/Admin/AdminMain';
import UserMain from './Components/User/UserMain';
import SubadminMain from './Components/Subadmin/SubadminMain';

function App() {

  const router = createBrowserRouter([
        {
          path: '/',
          element:<FontPage></FontPage>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
      path: '/admin',
      element: <AdminMain></AdminMain>
    },
    {
      path: '/subadmin',
      element: <SubadminMain></SubadminMain>
    },
    {
      path: '/user',
      element: <UserMain></UserMain>
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
