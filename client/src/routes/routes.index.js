import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

import { CircularProgress } from "@mui/material";

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <CircularProgress
          sx={{
            ...{
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            },
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path:'/admin',
      element:<AdminPage/>
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/test",
          element: <Test />,
        },
        {
          path:"/hosts/:type",
          element:<FilterHosts/>
        }
      ],
    },
  ]);
}

//layouts
const MainLayout = Loadable(
  lazy(() => import("../layouts/mainLayout.component"))
);

//pages
const Home = Loadable(
  lazy(() => import("../pages/homepage/homepage.component"))
);

const Test = Loadable(lazy(() => import("../components/test/test.component")));
const Login = Loadable(lazy(() => import("../pages/login/login.component")));
const Signup = Loadable(lazy(() => import("../pages/signup/signup.component")));
const FilterHosts = Loadable(lazy(()=>import("../pages/filter-hosts/filterHosts.component")));
const AdminPage = Loadable(lazy(()=> import('../pages/adminPage/adminPage.component')));
