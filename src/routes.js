import { createWebHistory, createRouter} from "vue-router";

import LandingPage from "./components/LandingPage.vue";
import InvoiceForm from "./components/InvoiceCreation/InvoiceForm.vue";
import History from "./components/History.vue";
import EditPage from "./components/EditPage.vue";

const routes = [
    {
        name: 'LandingPage',
        path: '/',
        component : LandingPage,
    },
    {
        name: 'InvoiceForm',
        path: '/create',
        component: InvoiceForm
    },
    {
        name: 'History',
        path: '/history',
        component: History
    },

    {
        name:'EditPage',
        path:'/edit/:invoiceNumber/:amount',
        component: EditPage,
        props: true,
    },
];

const router = createRouter ({
    history: createWebHistory (),
    routes
})

export default router;