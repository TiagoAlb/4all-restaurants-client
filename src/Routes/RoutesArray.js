import Places from '../Views/Places/Places';
import Dishes from '../Views/Dishes/Dishes';
import NewDishe from '../Views/Dishes/NewDishe';

const routes = [
    { path: "/places", name: "Lugares", component: Places },
    { path: "/places/:id/dishes", name: "Pratos", component: Dishes },
    { path: "/places/:id/dishes/new", name: "Cadastrar Prato", component: NewDishe },
    { redirect: true, path: "/", to: "/places", name: "Lugares" }
];

export default routes;