import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import ProtectedRoute from '../features/auth/components/ProtectedRoute'
import Header from "../layouts/Header";
import FriendPage from "../pages/FriendPage";
import ProfilePage from "../pages/ProfilePage";
import Container from "../layouts/Container";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },

  {
    path: "/",
    element: (
        <ProtectedRoute>
            <Container/>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/friend",
        element: <FriendPage />,
      },

      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
