import {FC} from "react";

type Props = {
    rate :number,
    desc :string
};

const WhyUsDarker :FC<Props> = (props) => {

    return (
        <div className='darkPanel p-4 text-white'>
            <div className=' rounded-circle bg-white position-relative' style={{width: "101px", height: "101px"}}>
                <i className='h1 bi bi-gift-fill position-absolute top-50 start-50 translate-middle' style={{color: "#232222"}}></i>
            </div>
            <h1 className='my-4 fontThree' style={{fontSize: "24px"}}>{props.rate}% Success Rate</h1>
            <p className='my-2 text-secondary fontTwo' style={{fontSize: '14px'}}>{props.desc}</p>
            <button className='mt-4 btn btn-warning rounded-pill fontThree py-2 px-4 border-0'>Read More</button>
        </div>
    )
}
export default WhyUsDarker;