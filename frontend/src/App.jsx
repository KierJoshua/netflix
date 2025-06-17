import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import Root from "./Root";
import Player from "./player/Player";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import NewAndPopular from "./pages/NewAndPopular";
import MyList from "./pages/MyList";
import BrowseByLanguage from "./pages/BrowseByLanguage";
import TVPlayer from "./player/TVPlayer";
import Error from "./Error";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/home",
      element: (
        <PrivateRoute>
          <Root />
        </PrivateRoute>
      ),
      errorElement: <Error />,
      children: [
        { path: "", element: <Home /> },
        { path: "tvshows", element: <TVShows /> },
        { path: "movies", element: <Movies /> },
      ],
    },
    { path: "/new-and-popular", element: <NewAndPopular /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/mylist", element: <MyList /> },
    { path: "/browse-by-languages", element: <BrowseByLanguage /> },
    {
      path: "/player/:id",
      element: <Player />,
      errorElement: <Error />
    },
    {
      path: "/tv-player/:id",
      element: <TVPlayer />,
      errorElement: <Error />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
