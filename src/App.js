import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

//Option 1
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { paht: "/products", element: <ProductsPage /> },
    ],
  },
]);*/

//Option 2
const routesDefinitions = createRoutesFromElements(
  <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
    <Route index={true} element={<HomePage />} />
    <Route path="products" element={<ProductsPage />} />
    <Route path="products/:productId" element={<ProductDetailPage />} />
  </Route>
);

const router = createBrowserRouter(routesDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
