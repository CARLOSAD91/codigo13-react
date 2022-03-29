/**
 * Para poder crear nuestras debemos importar lo siguiente
 * BrowsRouter: Va a envolver todas las rutas que creemos
 * Routes: Es el child de BrowsRouter el cual nos va a permitir crear las rutas pon
 * componente
 * Route: Es el encargado de recibir el paht y el element y renderizar el element
 * el el path creado
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Flags from "../pages/Flags";
import Youtube from "../pages/Youtube";
import YoutubeAdministrator from "../pages/YoutubeAdministrator";
import MovieUpdate from "../pages/MovieUpdate";
import Detalle from "../pages/Flags/Detalle";
//Layou
import Main from "../layout/main";
import Login from "../pages/Login";
import Private from "../layout/Private";
import Ecommerce from "../layout/Ecommerce";
import PopularWeek from "../pages/PopularWeek";
import BasketView from "../pages/BasketView";
import CreateProduct from "../pages/CreateProduct";
import Profile from "../pages/Profile";



// Nuestro Router va a ser un componente el cual se encargue de retornar
// las rutas con su respectiva vista
const Router = () => {
  // como esto es un componente tenemos que usar return para poder crear las rutas
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route index path="/flags" element={<Flags />} />
          <Route path="/flags/detalle/:id" element={<Detalle />} />
          <Route path="/youtube" element={<Youtube />} />
        </Route>
        {/* ROUTE para ecommerce */}
        <Route element={<Ecommerce />}>
          <Route path="ecommerce" element={<PopularWeek />} />
          <Route path="ecommerce/basket" element={<BasketView />} />
        </Route>
        <Route element={<Private />}>
          <Route
            path="/youtube/administrador"
            element={<YoutubeAdministrator />}
          />
          <Route
            path="/youtube/administrador/editar/:id"
            element={<MovieUpdate />}
          />
          <Route path="/ecommerce/create" element={<CreateProduct />} />
          <Route path="/perfil" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
