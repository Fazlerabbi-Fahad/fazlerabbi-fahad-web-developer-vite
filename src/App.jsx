import { RouterProvider } from "react-router-dom";
import routes from "./route/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
