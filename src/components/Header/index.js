import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header>
                <Link className='logo' to='/'>logo</Link>
                <Link className='favoritos'to='/favoritos'>salvos</Link>
            </header>
        </>
    )
}
