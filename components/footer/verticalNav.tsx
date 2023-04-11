import Link from 'next/link';
import {useRouter} from 'next/router';

const Nav = () => {

    const router = useRouter();

    return (
        <ul className='nav flex-column my-5'>
            <li className='nav-item'>
                <Link href ="/" className={router.pathname === "/" ? "nav-link text-white fontOne": "nav-link text-white fontThree"}>Home</Link>
            </li>
            <li className='nav-item'>
                <Link href ="/Attoneys" className={router.pathname === "/Attoneys" ? "nav-link text-white fontOne": "nav-link text-white fontThree"}>Attoneys</Link>
            </li>
            <li className='nav-item'>
                <Link href ="/PracticeAreas" className={router.pathname === "/PracticeAreas" ? "nav-link text-white fontOne": "nav-link text-white fontThree"}>Practice Areas</Link>
            </li>
            <li className='nav-item'>
                <Link href ="/About" className={router.pathname === "/About" ? "nav-link text-white fontOne": "nav-link text-white fontThree"}>About Us</Link>
            </li>
        </ul>
    )
}
export default Nav;