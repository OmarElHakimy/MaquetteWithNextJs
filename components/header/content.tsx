import Input from './input/input';

const Content = () => {

    return (
        <div className='col-md-12 col-lg-6 col-xl-7 text-white text-center text-lg-start'>
            <div className='mb-4'>
                <h1>
                    <span className='fontTwo' style={{fontSize: "66px"}}>You don't have </span>
                    <span className='fontFour' style={{fontSize: "66px"}}>to Fight them Alone.</span>
                </h1> 
            </div>
            <p className='text-secondary fontTwo mb-4' style={{fontSize: "18px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Input/>
        </div>
    )
}
export default Content;