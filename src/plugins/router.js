import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    to: '/search'
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/movies',
    name: 'Movies',
    component: () => import(/* webpackChunkName: "about" */ '../views/MoviesView.vue')
  },
  {
    path: '/tvshows',
    name: 'TV Shows',
    component: () => import(/* webpackChunkName: "about" */ '../views/TVShowsView.vue')
  },
  {
    path: '/discover',
    name: 'Discover',
    component: () => import(/* webpackChunkName: "about" */ '../views/DiscoverView.vue')
  },
  {
    path: '/suggestions',
    name: 'Suggestions',
    component: () => import(/* webpackChunkName: "about" */ '../views/SuggestionsView.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "about" */ '../views/CalendarView.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchView.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
