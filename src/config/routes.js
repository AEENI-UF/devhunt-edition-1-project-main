import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layouts";
import Home from "../pages";
import ClubPage from "../pages/clubs";

import Hui1 from "../assets/images/hui/hui1.jpg";
import Hui2 from "../assets/images/hui/hui2.jpg";
import Hui3 from "../assets/images/hui/hui3.jpg";
import Hui4 from "../assets/images/hui/hui4.jpg";
import Hui5 from "../assets/images/hui/hui5.jpg";
import Hui6 from "../assets/images/hui/hui6.jpg";
import Hui7 from "../assets/images/hui/hui7.jpg";

const CLUBS = [
  {
    name: "Club de Linux et Logiciel Libre de Fianarantsoa",
    initial: "C3LF",
    description: "C3LF_DESCRIPTION",
    link: "/club/c3lf",
    sourceUrl: [Hui1, Hui2, Hui3, Hui4, Hui5, Hui6, Hui7],
  },
  {
    name: "ENI Praise Christ",
    initial: "EPC",
    description: "EPC_DESCRIPTION",
    link: "/club/epc",
    sourceUrl: [Hui1, Hui2, Hui3, Hui4, Hui5, Hui6, Hui7],
  },
  {
    name: "Club d'Entraide de l'ENI",
    initial: "C2E",
    description: "C2E_DESCRIPTION",
    link: "/club/c2e",
    sourceUrl: [Hui1, Hui2, Hui3, Hui4, Hui5, Hui6, Hui7],
  },
  {
    name: "Multimedia",
    description: "MULTIMEDIA_CLUB_DESCRIPTION",
    link: "/club/multimedia",
    sourceUrl: [Hui1, Hui2, Hui3, Hui4, Hui5, Hui6, Hui7],
  },
  {
    name: "English Club based on Practice",
    initial: "ECP",
    description: "ECP_DESCRIPTION",
    link: "/club/ecp",
    sourceUrl: [Hui1, Hui2, Hui3, Hui4, Hui5, Hui6, Hui7],
  },
  {
    name: "ENI Cybersecurity",
    description: "CYBERSECURITY_DESCRIPTION",
    link: "/club/cybersecurity",
    sourceUrl: [Hui1, Hui2, Hui3, Hui4, Hui5, Hui6, Hui7],
  },
];

const ClubPages = CLUBS.map((club) => ({
  path: club.link,
  key: `${club.name}`,
  component: <ClubPage club={club} />,
}));

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
      ...ClubPages,
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
