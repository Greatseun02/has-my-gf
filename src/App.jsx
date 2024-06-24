import Home from "./components/home";
import Login from "./components/login";
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
