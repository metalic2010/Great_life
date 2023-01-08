 import UsefullArtificalPage from '../pages/UsefullArtificalPage';
 import SaladPage from '../pages/CategoryMenu/SaladPage';
 import SoupPage from '../pages/CategoryMenu/SoupPage';
 import VeganPage from '../pages/CategoryMenu/VeganPage';
 import BakeryPage from '../pages/CategoryMenu/BakeryPage';
 import BeefPage from '../pages/CategoryMenu/BeefPage';
 import DessertsPage from '../pages/CategoryMenu/DessertsPage';
 import DrinkPage from '../pages/CategoryMenu/DrinkPage';
 import FishPage from '../pages/CategoryMenu/FishPage';
 import PicklesPage from '../pages/CategoryMenu/PicklesPage';
 import PorkPage from '../pages/CategoryMenu/PorkPage';
 import PoultryPage from '../pages/CategoryMenu/PoultryPage';
 import SnacksPage from '../pages/CategoryMenu/SnacksPage';
 import AboutPage from '../pages/AboutPage';
 import MainPage from '../pages/MainPage';

 const routers = [
     { path: '/', element: MainPage, exact: true },
     { path: '/about', element: AboutPage, exact: true },
     { path: '/usefullartifical', element: UsefullArtificalPage, exact: true },
     { path: '/salad', element: SaladPage, exact: true },
     { path: '/soup', element: SoupPage, exact: true },
     { path: '/vegan', element: VeganPage, exact: true },
     { path: '/bakery', element: BakeryPage, exact: true },
     { path: '/beef', element: BeefPage, exact: true },
     { path: '/desserts', element: DessertsPage, exact: true },
     { path: '/fish', element: FishPage, exact: true },
     { path: '/pickles', element: PicklesPage, exact: true },
     { path: '/drink', element: DrinkPage, exact: true },
     { path: '/pork', element: PorkPage, exact: true },
     { path: '/poultry', element: PoultryPage, exact: true },
     { path: '/snack', element: SnacksPage, exact: true },
 ]

 export default routers;