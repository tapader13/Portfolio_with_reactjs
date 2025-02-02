import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import Home from './components/Home';
 import  { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'products', element: <div>Products</div> },
    ],
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster/>
    </div>
  );
}

export default App;
