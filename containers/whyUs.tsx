import {FC} from 'react';
import Type from '../models/whyUs';
import WhyUsLighter from '../components/content/whyUs/whyUsLighter';
import WhyUsDarker from '../components/content/whyUs/whyUsDarker';

type Props = {
    whyUs :Type[]
}

const WhyUs :FC<Props> = (props) => {
    return (
        <div className='container' style={{paddingTop: "150px"}}>
            <div className='row'>
                <h1 className='text-center text-white mb-4 fontThree' style={{fontSize: "54px"}}>Why Choose Us ?</h1>
                {
                    props.whyUs.map( data => (
                        data.id % 2 === 0 
                        ?
                        <div key={data.id} className='col-sm-12 col-md-6 col-lg-4 my-2'>
                            <WhyUsLighter rate={data.rate} desc={data.description} />
                        </div>
                        :
                        <div key={data.id} className='col-sm-12 col-md-6 col-lg-4 my-2'>
                            <WhyUsDarker rate={data.rate} desc={data.description} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default WhyUs;