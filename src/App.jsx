import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import Home from './components/Home';
import { Toaster } from 'react-hot-toast';
import DetailsPage from './pages/DetailsPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    path: 'details/:name',
    element: <DetailsPage />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
