import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx'
import Main from './Main/Main.jsx'
import Astros from './Astros/Astros.jsx'
import About  from './About/About.jsx';
import './App.css'

function App() {

    const linksData = [
        { name: 'Home', href: '/'},
        { name: 'About', href: '/about'},
        { name: 'Astros', href: '/astros'},
    ]

    return (
        <>
            <Navbar header='Navbar' links={linksData} /> 
            <Routes>
                <Route
                    element={<Main />}
                    path='/'
                />
                <Route
                    element={<About />}
                    path='/About'
                />
                <Route 
                    element={<Astros />}
                    path='/astros'
                />
            </Routes>
        </>
    )
}

export default App
