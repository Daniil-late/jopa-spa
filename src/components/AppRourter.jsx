import { Routes, Route } from "react-router-dom";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import News from "../News/News";
export default function AppRouter(){

    return(
        <Routes>
            <Route path="/jopa-spa/" element={<Home/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/jopa-spa/news" element={<News/>}></Route>
            <Route path="/jopa-spa/contacts" element={<Contact/>}></Route>
        </Routes>
    )
}