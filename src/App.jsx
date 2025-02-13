import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/tvshows", element: <TVShows /> },
        { path: "/movies", element: <Movies /> },
      ],
    },
    { path: "/new-and-popular", element: <NewAndPopular /> },
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

  return <RouterProvider router={router} />;
}

export default App;
