import Navigation from "../Componenets/Navigation"
import style from "../styles/navBar.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"

const home = () => {

  const router = useRouter();
  const [user, setUser] = useState("")
  const [islogin, setLogin] = useState(false)
  const [room, setRoom] = useState("");

  const [userName, setUName] = useState("");
  const [userEmail, setUEmail] = useState("");
  const [roomName, setRName] = useState("");


  useEffect(
    () => {
      if (!islogin) {
        axios.get
        (
          `${NEXT_PUBLIC_SEVER}/api/room/enter`
        ).then(
          (res) => {
            console.log("==> ", res.data)
            if (res.data["status"] === "allowed") {

              setUser(res.data["user"])
              setRoom(res.data["room"])
              setRName(res.data["rName"])
              setUName(res.data["name"])
              setUEmail(res.data["email"])
              setLogin(true);
            }
            else {
              router.push("/")
            }
          }
        ).catch(
          (err) => {
            console.log(err)
            alert(err.body)
          }
        )
      }

    }, [islogin]
  )

  return (

    <div className={style.main}>

      <div className={style.intro}>

        <h1>
          Peace Be Upon You
        </h1>

        <h2>
          Name: <span className={style.value}>{userName}   </span>             </h2>
        <h2>
          Email: <span className={style.value}>{userEmail}</span>
        </h2>
        <h2 >
          Room: <span className={style.value}>{roomName}</span>
        </h2>
      </div>

      <Navigation setLogin={setLogin} roomId={room} link={
        [

          { "desc": "Roomates", "link": "/roomates" },
          { "desc": "Add Expense", "link": "/myexpense" },
          { "desc": "See Expense", "link": "/expense" },


        ]
      } />

    </div>

  )
}

export default home