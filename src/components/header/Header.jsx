
import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header >
            <div className='flex justify-between p-4 mx-4 border-b-2 items-center'>
                <h1>Iam Header</h1>
                <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;