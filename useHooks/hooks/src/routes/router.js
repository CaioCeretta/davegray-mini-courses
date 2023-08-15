import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Callback from "../pages/useCallback";
import Memo from "../pages/useMemo";
import Ref from "../pages/useRef";
import Reducer from "../pages/useReducer";
import OtherReducerTutorial from "../pages/useReducer/OtherTutorial";
import Layout from "../pages/useLayout";
import Imperative from "../pages/useImperative";
import Context from "../pages/useContext";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'hooks/useCallback',
    element: <Callback />
  },
  {
    path: 'hooks/useMemo',
    element: <Memo />
  },
  {
    path: 'hooks/useRef',
    element: <Ref />
  },
  {
    path: 'hooks/useReducer',
    element: <Reducer />
  },
  {
    path: 'hooks/useReducer2',
    element: <OtherReducerTutorial />
  },
  {
    path: 'hooks/useLayout',
    element: <Layout />
  },
  {
    path: 'hooks/useImperative',
    element: <Imperative />
  },
  {
    path: 'hooks/useContext',
    element: <Context />
  }


])

export default router;