import Vue from 'vue'
import VueRouter from 'vue-router'

// router : 메뉴달기 비교) springboot : controller (메뉴달기)
Vue.use(VueRouter)

const routes = [
    // home
    {
        path: '/',
        alias: "/home",
        name: 'home',
        component: () => import('@/views/HomeView')
    },
    // /upload
    {
        path: '/upload',
        name: 'upload',
        component: () => import('@/components/UploadImage')
    },
    // /, /tutorials 메뉴를 클릭하면 TutorialsList.vue 로딩
    // TutorialsList.vue : Tutorial 목록 화면
    {
        path: "/tutorials",
        name: 'tutorials',
        component: () => import('@/components/tutorials/TutorialsList')
    },
    // Tutorial.vue : Tutorial 상세 화면
    {
        // :id => params
        path: '/tutorials/:id',
        name: 'tutorial-details',
        component: () => import('@/components/tutorials/Tutorial')
    },
    // AddTutorial.vue : Tutorial 에 목록 추가 화면
    {
        path: '/add',
        name: 'add',
        component: () => import('@/components/tutorials/AddTutorial')
    },
    // Customer
    {
        path: '/customers',
        alias: '/customers',
        name: 'customers',
        component: () => import('@/components/customer/CustomerList')
    },
    {
        path: '/add_customer',
        name: 'add-customer',
        component: () => import('@/components/customer/AddCustomer')
    },
    {
        path: '/customers/:id',
        name: 'edit-customer',
        component: () => import('@/components/customer/EditCustomer')
    },
    // Complain
    {
        path: '/complain',
        name: 'complain',
        component: () => import('@/components/complain/ComplainView')
    },
    {
        path: '/addcomplain',
        name: 'add-complain',
        component: () => import('@/components/complain/AddComplain')
    },
    {
        path: '/editcomplain/:id',
        name: 'edit-complain',
        component: () => import('@/components/complain/EditComplain')
    },
    // 자유게시판
    {
        path: '/freeboard',
        name: 'freeboard',
        component: () => import('@/components/freeboard/FreeBoard')
    },
    {
        path: '/add_freeboard',
        name: 'add-freeboard',
        component: () => import('@/components/freeboard/AddFreeBoard')
    },
    {
        path: '/edit_freeboard/:id',
        name: 'edit-freeboard',
        component: () => import('@/components/freeboard/EditFreeBoard')
    },
    // FAQ
    {
        path: '/faq',
        name: 'faq',
        component: () => import('@/components/faq/FaqList')
    },
    {
        path: '/add_faq',
        name: 'add-add_faq',
        component: () => import('@/components/faq/AddFaq')
    },
    {
        path: '/edit_faq/:id',
        name: 'edit_faq',
        component: () => import('@/components/faq/EditFaq')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
