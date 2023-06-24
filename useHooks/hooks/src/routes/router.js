import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Callback from "../pages/useCallback";
import Memo from "../pages/useMemo";
import Ref from "../pages/useRef";
import Reducer from "../pages/useReducer";
import OtherReducerTutorial from "../pages/useReducer/OtherTutorial";
import Layout from "../pages/useLayout";
import Imperative from "../pages/useImperative";

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
  },
  {
    path: 'useRef',
    element: <Ref />
  },
  {
    path: 'useReducer',
    element: <Reducer />
  },
  {
    path: 'useReducer2',
    element: <OtherReducerTutorial />
  },
  {
    path: 'useLayout',
    element: <Layout />
  },
  {
    path: 'useImperative',
    element: <Imperative />
  },


])

export default router;