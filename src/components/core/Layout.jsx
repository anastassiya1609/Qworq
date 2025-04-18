import { Header } from "../layout/Header";
import AppRouter from "./AppRouter";
import Footer from './../layout/Footer';

export default function Layout(){
    return(
        <>
         <Header/>
         <AppRouter/>
         <Footer/>
        </>
       

    )
}