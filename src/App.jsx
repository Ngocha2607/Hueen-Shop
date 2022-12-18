import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";

const App = () => {
  const user = false;
  const router = createBrowserRouter([
    {
      path: "/",
      element: !user ? <Navigate to="/login" /> : <Home />,
    },
    {
      path: "/products/:category",
      element: user ? <Navigate to="/login" /> : <ProductList />,
    },
    {
      path: "/product/:id",
      element: user ? <Navigate to="/login" /> : <Product />,
    },
    {
      path: "/cart",
      element: user ? <Navigate to="/login" /> : <Cart />,
    },
    {
      path: "/success",
      element: user ? <Navigate to="/login" /> : <Success />,
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
