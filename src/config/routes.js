import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layouts";
import Home from "../pages";
import C2E from "../pages/galeries/c2e";

export const ROUTES = [
  {
    path: "/",
    key: "layout",
    component: <HomeLayout />,
    routes: [
      {
        path: "/",
        key: "home",
        component: <Home />,
      },
      {
        path: "/club/c2e",
        key: "c2e",
        component: <C2E />,
      },
    ],
  },
];

export function RenderRoutes({ routes }) {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.key} path={route.path} element={route.component}>
          {route.routes
            ? route.routes.map((nestedRoute) => (
                <Route
                  key={nestedRoute.key}
                  path={nestedRoute.path}
                  element={nestedRoute.component}
                />
              ))
            : null}
        </Route>
      ))}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
