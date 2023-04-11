import {useState, useEffect} from 'react';
import Content from '../components/header/content';
import Image from '../components/header/profil';

const Header = () => {
    
    let screen = 0;
    if(typeof window !== 'undefined'){
        screen = window.innerWidth
    }

    const [width, setWidth] = useState<number>(screen);
    const [isSmall, setIsSmall] = useState<boolean>(false);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [setWidth]);

    useEffect(() => {
        if(width < 992){
            setIsSmall(true);
        }else{
            setIsSmall(false)
        }
        console.log("omar"+width);
    }, [width]);
    
    return(
        <div className='header' style={{backgroundColor: "#111111", padding: "100px 0"}}>
            <div className='container'>
                {
                    !isSmall
                    ?
                    <div className='row'>
                        <Content/>
                        <Image/>
                    </div>
                    :
                    <div className='row'>
                        <Image/>
                        <Content/>
                    </div>
                }
            </div>
        </div>
        
    );
}
export default Header;