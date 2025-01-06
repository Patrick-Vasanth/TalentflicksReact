import React,{useState} from 'react'
import Logo from "../Images/logo svg.svg";
import Login from './Login';
import SignUp from './SignUp';

export default function Account() {

    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
      setIsLogin((prev) => !prev);
    };
  return (
    <div className='accountForm'>
        <div className="commonImage">
            <img src={Logo} alt="Logo" className='commonImg'/>
            <h2>"Where your Dream grows along with You"</h2>
        </div>
        <div className="validate">
            {isLogin ? (
                <Login toggleForm={toggleForm}/>
            ):(
                <SignUp toggleForm={toggleForm} />
            )}
        </div>
    </div>
  )
}
