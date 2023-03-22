import HomeModule from "./HomeModule.vue";

// Pages
import Home from "./pages/Home.vue";

const routes = [
  {
    path: "/",
    component: HomeModule,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
    ],
  },
];

export default routes;
