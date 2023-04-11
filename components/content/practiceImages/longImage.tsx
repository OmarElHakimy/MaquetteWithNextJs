import {FC} from 'react';

type Props = {
    title :string,
    img :string
}

const longImage :FC<Props> = (props) => {
    return (
            <div className='col-6 col-md-8 my-2'> 
                <div className={`img position-relative radius ${props.img}`} style={{height: "342px"}}>
                <h5 className='fontTwo text-center position-absolute bottom-0 start-50 translate-middle-x' style={{fontSize: "24px"}}>{props.title}</h5>
                </div>
            </div>
    );
}
export default longImage;