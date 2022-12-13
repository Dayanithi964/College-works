import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import GetEx from '../HTTP/GetEx';
function Login() {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [Error,setError]=useState(false);
    const [pchk,setPchk]=useState(false);
    const [uchk,setuchk]=useState(false);
    
    const formHandler=(event)=>
    {
        event.preventDefault();
        const loginObj={
            name:userName,
            pwd:password
        }
        if(userName.length===0 || password.length===0 )
        {
            setError(true)
        }
        
        if(userName==="admin" && password==="admin")
        {
        
    }
    else if(password.length>0 && password!=="admin"){
        setPchk(true)
    }
    else if(userName.length>0 && userName!=="admin")
    {
        setuchk(true);
    }
   }   
  return (
    <div>
        <h3>
           login page
        </h3>
        <form onSubmit={formHandler}>
            Username : <input type="text" value={userName} placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/><br/>
            {Error===true && userName.length===0? <label style={{color:''}}>Username is req<br/></label>:""}
            <p>{uchk?" Wrong Username":""}</p>
            password : <input type="Password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            {Error===true && password.length===0? <label style={{color:''}}>Password is req<br/></label>:""}
            <p>{pchk?" wrong password":""}</p>
            <Link to="GetEx"><button>Login</button></Link>
           
        </form>
    </div>
  )
  }
export default Login;
