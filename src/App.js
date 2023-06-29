import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';
import {getToken} from './utils/checkToken';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PublicRouter />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const PublicRouter = () => {
  const accessToken = getToken();
  return accessToken ? <Navigate to="/todo" replace /> : <Outlet />;
};

const PrivateRouter = () => {
  const accessToken = getToken();
  return accessToken ? <Outlet /> : <Navigate to="/signin" replace />;
};
