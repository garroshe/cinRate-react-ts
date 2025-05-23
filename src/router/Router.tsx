import {Navigate, Route, Routes} from "react-router-dom";
import {routesBook} from "./routes";

import {Movie} from "../pages/Movie/Movie";
import {Series} from "../pages/Series/Series";
import {Cartoons} from "../pages/Cartoons/Cartoons";
import {People} from "../pages/People/People";
import {Tops} from "../pages/Tops/Tops";
import {Home} from "../pages/Home/Home";

export const Router = () => {
    return (
        <Routes>
            <Route path={routesBook.movie()} element={<Movie/>}/>
            <Route path={routesBook.series()} element={<Series/>}/>
            <Route path={routesBook.cartoons()} element={<Cartoons/>}/>
            <Route path={routesBook.people()} element={<People/>}/>
            <Route path={routesBook.tops()} element={<Tops/>}/>
            <Route path={routesBook.home()} element={<Home/>}/>
            <Route path="/" element={<Navigate to={routesBook.home()} />} />
            <Route path="*" element={<Home/>} />
        </Routes>
    )
}