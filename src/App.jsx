import Home from "./Home.jsx";
import Login from "./Login.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/*",
      element:<Home/>,
    }
  ]
)
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
