import "./Styles/App.scss";
import { RouterProvider } from "react-router-dom";

import router from "./Router/router";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
