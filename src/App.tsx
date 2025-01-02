import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {

    return (
        <>
            <Router>
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