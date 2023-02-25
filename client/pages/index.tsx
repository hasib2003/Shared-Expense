
import Login from "../Componenets/Login"
import style from "../styles/index.module.css"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios";


export default function Home() {
  
  const router = useRouter();
  const [islogin,setLogin] = useState(false)


  useEffect(
  ()=>
  {
    if(islogin)
    {
    router.push("/home")
    }
    else
    {
      axios.get(
        `${process.env.NEXT_PUBLIC_SEVER}/api/room/enter`
      ).then(
        (res)=>
        {
          console.log(res.data)
          if (res.data["status"] === "allowed")
          {
            setLogin(true);
          }
          else{
            // alert("Invalid Credientials")
          }
        }
      ).catch(
        (err)=>
        {
          console.log(err)
          alert(err)
        }
      )
    }
  },[islogin]
    )


  return (
    <div className={style.mainContainer}>


      <div className={style.header}>
        <h1>
          Welcome back
        </h1>
        <h2>
          Now you are tension free and manage all expense here
        </h2>
      </div>


      <Login setLogin = {setLogin} ></Login>



      


    </div>
  )
}
