import { useState } from "react"
import { useRouter } from "next/router"

import { BiCheck } from 'react-icons/bi'
import styles from "../styles/newuser.module.css"
import Link from "next/link"
import axios from "axios"
const RegRoom = () => {

  const router = useRouter();
  const [roomName, setfName] = useState('')
  const [Entry, setEntry] = useState("");
  const [Master, setMaster] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("")

  const [mMatch, setmMatch] = useState(false);
  const [eMatch, seteMatch] = useState(false);
  const [pMatch, setpMatch] = useState(false);


  const submiter = async (e) => {
    console.log("one")
    e.preventDefault();



    try {
      console.log("tone")
      const res = await axios.post("/api/room/registration", {
        "RoomName": roomName,
        "entryKey": Entry,
        "masterKey": Master

      })
      console.log("one")
      if (res.data["status"] === "allowed") {

        const roomId = res.data["room"]["_id"].toString();
        // registering one user also 
        const res2 = await axios.post("/api/user/registration", {
          "Name": Name,
          "email": email,
          "password": password,
          "roomId": roomId,
          "masterKey":Master

        })

        if (res2.data["status"] === "allowed") {
          alert("Registered Successfully")
          router.push("/")
        }
        else
        {
          alert(res2.data)
        }



      }
      else {
        alert(`Invalid Credientials ${res.data["Error"]}`)
      }



    }
    catch (err) {
      console.log(err)
    }




  }

  return (
    <div className={styles.form_container}>
      <h2>
        Register Your Room and Make Life Easy
      </h2>

      <form action="" method="post">

        <label htmlFor="first_name">Room Name</label>
        <input style={{ fontSize: "1rem", padding: "0.23rem 0.8rem" }} type="text"
          onChange={(e) => {
            setfName(e.target.value)
          }}
          value={roomName}
        />
        <br />

        <label htmlFor="password">Entry Key</label>
        <input style={{ fontSize: "1rem", padding: "0.23rem 0.8rem" }} type="password"
          onChange={(e) => {
            setEntry(e.target.value)
          }}
          value={Entry} />

        <br />



        <label htmlFor="password">Confirm Entry</label>
        <input style={{ fontSize: "1rem", padding: "0.23rem 0.8rem" }} type="password"
          onChange={(e) => {
            if (e.target.value == Entry && e.target.value !== "") {
              seteMatch(true)
            }

            else {
              seteMatch(false)
            }
          }}
        /> {eMatch ? <BiCheck color="green" size={28} /> : null}

        <br />


        <label >Master Key</label>
        <input style={{ fontSize: "1rem", padding: "0.23rem 0.8rem" }} type="password"
          onChange={(e) => {
            setMaster(e.target.value)
          }}
          value={Master} />

        <br />


        <label >Confirm Master</label>
        <input style={{ fontSize: "1rem", padding: "0.23rem 0.8rem" }} type="password"
          onChange={(e) => {

            if (e.target.value == Master && e.target.value !== "") {
              setmMatch(true)
            }
            else {
              setmMatch(false)
            }
          }}
        />
        {mMatch ? <BiCheck color="green" size={28} /> : null}


        <br />

        <h3>
          You need to set your logins here
        </h3>

        <label>Name</label>
        <input style={{ fontSize: "1rem", padding: "0.23rem 0.8rem" }} type="text"
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={Name}
        />
        <br />


        <label >Email</label>
        <input style={{ fontSize: "1rem", padding: "0.23rem 0.8rem" }} type="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }
          }
          value={email}
        />


        <br />

        <label >Password</label>
        <input style={{ fontSize: "1rem", padding: "0.23rem 0.8rem" }} type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }
          }
          value={password}
        />


        <br />


        <label >Confirm Password</label>
        <input style={{ fontSize: "1rem", padding: "0.23rem 0.8rem" }} type="password"
          onChange={(e) => {

            if (e.target.value == password && e.target.value !== "") {
              setpMatch(true)
            }
            else {
              setpMatch(false)
            }
          }}
        />
        {pMatch ? <BiCheck color="green" size={28} /> : null}


        <br />


        <div className={styles.btn}>
          <button type="submit"
            onClick={

              (pMatch && email !== "" && Name !== "" && mMatch && eMatch && roomName !== '' && Entry !== Master) ?
                submiter :
                (e) => {
                  e.preventDefault();
                  alert("Check fields again")
                }

            }
          >Register</button>
        </div>
        <Link href="/">Enter Room</Link>

      </form>
      <span></span>


    </div>

  )
}

export default RegRoom