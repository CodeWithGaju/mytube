import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import SearchResultPage from "./components/SearchResultPage";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children:[
         {
          path: "/",
          element: <MainContainer/>,
         },
         {
          path: "/watch",
          element: <WatchPage/>,
        },
        {
          path:"/result",
          element:<SearchResultPage/>
        }
      ]
    },   
  ])
  return (
    <Provider store={store}>
    <div className="App">
        <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
