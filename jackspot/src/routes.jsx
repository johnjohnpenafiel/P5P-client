import Dashboard from "./pages/Dashboard"
import Collections from "./pages/Collections"
import Share from "./pages/Share";

const routes = [
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/collections',
        element: <Collections />
    },
    {
        path: '/share',
        element: <Share />
    }
]

export default routes;