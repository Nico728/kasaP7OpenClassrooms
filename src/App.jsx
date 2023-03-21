import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './pages/about/About';
import Accommodation from './pages/accommodation/Accommodation';
import Home from './pages/home/Home';
import Error from './pages/error/Error';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/accommodation/:id",
		element: <Accommodation />,
    	errorElement: <Error />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <Error />
	},
]);

function App() {
  return (
  <div>
    <RouterProvider router={router}/>
  </div>
  );
}
export default App;