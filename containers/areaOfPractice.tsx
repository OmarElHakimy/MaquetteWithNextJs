import Long from '../components/content/practiceImages/longImage';
import Short from '../components/content/practiceImages/shortImage';

const AreaOfPractice = () => {
    return (
        <div className='container text-white'  style={{paddingTop: "150px"}}>
            <h1 className='text-center fontThree mb-4' style={{fontSize: "54px"}}>Area Of Practice</h1>
            <div className='row'>

                <Long title="BUSINESS LAW" img="imgOne"/>
                <Short title="PARTNERSHIP LAW" img="imgTwo"/>
                <Short title="REAL ESTATE LAW" img="imgFour"/>
                <Long title="BUSINESS LAW" img="imgThree"/>
                <Long title="ELDER ABUSE" img="imgFive"/>
                <Short title="LANDLORD DISPUTES" img="imgSix"/>
            </div>
        </div>
    );
}
export default AreaOfPractice;