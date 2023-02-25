import style from "../styles/index.module.css"
import Link from "next/link"
import { useState } from "react"
import axios from "axios"
const Login = ({setLogin}) => {

  const [key, setKey] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  axios.defaults.withCredentials = true;

  const authenticate = async (e) => {
    e.preventDefault();

    try{
    const res = await axios.post("/api/room/enter",

      {
        "email": email,
        "password": password,
        "entryKey": key
      
    }

    )
    
    if(res.data["status"] === "allowed")
    {
      setLogin(true)
    }
    else
    {
      alert("Invalid Credientials")
    }
    
      
  
  
    }
    catch(err)
    {
      alert(err.body)
      console.log(err)
    }
  }




  return (
    <div className={style.login}>

      <form action="" method="post">
        <label>

          <h3>
            Email
          </h3>
        </label>
        <input style={{ fontSize: "1.0rem", padding: "1rem 0.8rem" }} type="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email}
        />
        <label>

          <h3>
            Password
          </h3>
        </label>
        <input style={{ fontSize: "1.0rem", padding: "1rem 0.8rem" }} type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password}
        />
        <label>

          <h3>
            Room key
          </h3>
        </label>

        <input style={{ fontSize: "1.0rem", padding: "1rem 0.8rem" }} type="password"
          onChange={(e) => {
            setKey(e.target.value)
          }}
          value={key}
        />

        <button
          type="submit"
          onClick={
         

              (email && password && key) ?
                authenticate :()=>{ alert("Fill out all fields")}
          
          }

        >

          Login
        </button>
        <Link href="/registration">

          <h3>
            Click to register your room
          </h3>

        </Link>
      </form>


    </div>
  )
}

export default Login