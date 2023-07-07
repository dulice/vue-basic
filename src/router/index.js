import { createRouter, createWebHistory } from "vue-router";
import ModalPage from "../pages/ModalPage.vue";
import ReactionTimer from "../pages/ReactionTimer.vue";
import Signup from "../pages/FormInput.vue";
import Jobs from "../pages/Jobs.vue";
import JobDetail from "../pages/JobDetail.vue";
import NotFound from '../pages/NotFound.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: ModalPage,
  },
  {
    path: "/reaction-timer",
    name: "ReactionTimer",
    component: ReactionTimer,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: Signup,
  },
  {
    path: "/form",
    redirect: "/signup"
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/job-detail/:id",
    name: "JobDetail",
    component: JobDetail,
    props: true
  },
  {
    path: "/:pathMatch(.*)",
    name: "notFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
