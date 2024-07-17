import {Outlet,Link} from 'react-router-dom'

function Layout(){
    return(
        <>
        <Outlet>
            <Link to='/'>Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/home">Home</Link>
        </Outlet>
        </>
    )
}
export default Layout