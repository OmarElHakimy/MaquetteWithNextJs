import Image from "next/image";
import Link from 'next/link';
import Nav from "../components/navigation/nav";
import logo from '../public/assets/images/logo.png';

const Navigation = () => {

    return (
        <nav className="navbar navbar-dark navbar-expand-lg py-4" style={{backgroundColor: "#111111"}}>
            <div className="container">
                <Link className="navbar-brand" href="/"><Image className="logo" src={logo} alt="eight_id" width={176} height={41}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Nav" aria-controls="Nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="Nav">
                    <Nav/>
                    <a className="btn btn-outline-light rounded-0 fontThree px-4">Contact Now</a>
                </div>
            </div>
        </nav>
    )
}
export default Navigation;