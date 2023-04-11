import Image from 'next/image';
import backProfil from '../../public/assets/images/backProfil.png';
import profil from '../../public/assets/images/profil.png';

const Profil = () => {

    return (
        <div className='col-md-12 col-lg-6 col-xl-5'>
            <div style={{width: "100%", display: "block"}}>
                <div className='box'>
                    <Image src={backProfil} alt='back profil' width={400} height={400} style={{position: "relative"}}/>
                    <Image src={profil} alt='profil' fill objectFit='contain' style={{position: "absolute"}}/>
                </div>
            </div>
        </div>
    )
}
export default Profil;