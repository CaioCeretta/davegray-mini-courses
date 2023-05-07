import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Callback from "../pages/UseCallback";
import Memo from "../pages/UseMemo";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'useCallback',
    element: <Callback />
  },
  {
    path: 'useMemo',
    element: <Memo />
  }

])

export default router;