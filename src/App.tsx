import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import ScrollInitializer from "./components/ScrollInitializer.tsx";

function App() {

    return (
        <>
            <Router>
                <ScrollInitializer />
                <div className='relative h-screen'>
                    <Header/>
                    <AppRoutes/>
                    <Footer/>
                </div>
            </Router>
        </>
    )
}

export default App