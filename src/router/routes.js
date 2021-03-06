
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage/Home.vue'), name: 'Home' },
      { path: '/evento', component: () => import('pages/TicketPage/TicketPage.vue'), name: 'Evento' },
      { path: '/login', component: () => import('pages/loginPage/login.vue'), name: 'Login' },
      { path: '/dashboard', component: () => import('pages/DashboardPage/DashboardPage.vue'), name: 'Dashboard' },
      { path: '/cadastro', component: () => import('pages/CadastroEvento/CadastroEventoPage.vue'), name: 'Cadastro de evento' }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
