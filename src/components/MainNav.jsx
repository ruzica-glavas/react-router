import {NavLink} from 'react-router-dom'

const MainNav = () => {
    return (

        <>
        <nav>
            <NavLink to="/">HomePage</NavLink>
            <NavLink to="/info">Chi siamo</NavLink>
            <NavLink to="/list">Lista Posts</NavLink>
        </nav>
        

        </>
        


    )
}

export default MainNav