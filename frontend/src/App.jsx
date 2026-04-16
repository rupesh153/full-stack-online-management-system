import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import ProductDetails from "./pages/productDetails";
import ProductList from "./admin/ProductList";
import AddProduct from "./admin/Addproduct";
import EditProduct from "./admin/EditProduct";
import Navbar from "./component/Navbar";


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // ✅ better than "/"
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "product/:id", element: <ProductDetails /> },
     

      { path: "admin/products", element: <ProductList /> },
      { path: "admin/products/add", element: <AddProduct /> },
      { path: "admin/products/edit/:id", element: <EditProduct /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}