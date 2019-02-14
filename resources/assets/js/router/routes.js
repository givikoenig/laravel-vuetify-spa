export default ({ authGuard, guestGuard }) => [
  { path: '/', name: 'welcome', component: require('~/pages/welcome.vue') },
  { path: '/mw', name: 'mw', component: require('~/pages/mw/mw.vue') },

  // Authenticated routes.
  ...authGuard([
    { path: '/home', name: 'home', component: require('~/pages/home.vue') },
    { path: '/settings',
      component: require('~/pages/settings/index.vue'),
      children: [
        { path: '', redirect: { name: 'settings.profile' } },
        { path: 'profile', name: 'settings.profile', component: require('~/pages/settings/profile.vue') },
        { path: 'password', name: 'settings.password', component: require('~/pages/settings/password.vue') }
      ]},
    { path: '/layout', name: 'layout', component: require('~/pages/tests/layout.vue') },
    { path: '/offset', name: 'offset', component: require('~/pages/tests/offset.vue') },
    { path: '/order', name: 'order', component: require('~/pages/tests/order.vue') },
    { path: '/direction', name: 'direction', component: require('~/pages/tests/direction.vue') },
    { path: '/breakpoints', name: 'breakpoints', component: require('~/pages/tests/breakpoints.vue') }
  ]),

  // Guest routes.
  ...guestGuard([
    { path: '/login', name: 'login', component: require('~/pages/auth/login.vue') },
    { path: '/register', name: 'register', component: require('~/pages/auth/register.vue') },
    { path: '/password/reset', name: 'password.request', component: require('~/pages/auth/password/email.vue') },
    { path: '/password/reset/:token', name: 'password.reset', component: require('~/pages/auth/password/reset.vue') }
  ]),

  { path: '*', component: require('~/pages/errors/404.vue') }
]
