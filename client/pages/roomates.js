import style from "../styles/dashboard.module.css"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"
import { AiTwotoneDelete } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";

const roomates = ({ roomId }) => {

  const router = useRouter();
  const [roomates, setRoomates] = useState([])
  const [islogin, setLogin] = useState(false)
  const [reload, setReload] = useState(false)
  const [delReq, setdelReq] = useState(false)
  const [addReq, setAddReq] = useState(false)

  const [tarId, setTarId] = useState("")
  const [master, setMaster] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  useEffect(
    () => {
      if (!islogin) {
        axios.get(
          "/api/room/enter"
        ).then(
          (res) => {
            if (res.data["status"] === "allowed") {


              const roomId = res.data["room"];


              axios.post(
                "/api/user",
                {
                  "roomId": roomId
                }
              ).then(
                (roomies) => {

                  setRoomates(roomies.data["users"])

                }

              ).catch
                (
                  (err) => {
                    console.log(err)
                    alert("error", err.message)
                  }
                )







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

    }, [islogin, reload]
  )

  const deleteUser = async (id) => {


    setTarId(id)
    setdelReq(!delReq);
  }

  const requestDelete = async (e) => {

    e.preventDefault()
    axios.post(

      "/api/user/delete",

      {
        "userId": tarId,
        "roomId": roomId,
        "masterKey": master
      }

    ).then(
      (res) => {
        if (res.data["status"] === "allowed") {
          alert("Deleted Successfully")

          
          setdelReq(false)
          setLogin(false)
        }
        else {
          alert(res.data["Error"])
        }
      }
    ).catch(
      (err) => {
        alert("error while communicating to the server")
      }
    )
  }


  const submitter = async (e) => {
    e.preventDefault();
    axios.post
      (
        "/api/user/registration",
        {
          "Name": name,
          "email": email,
          "password": password,
          "roomId": roomId,
          "masterKey": master
        }
      ).then
      (
        (res) => {
          if (res.data["status"] === "allowed") {
            alert("roommate added successfully")

            setMaster("");
            setName("");
            setEmail("");
            setPass("");
            setAddReq(false)
            setLogin(false)
          }
          else {
            alert(res.data["Error"])
          }
        }
      )
  }

  return (
  <div className={style.mainContainer}>

    <div className={style.roomates}>

      <h1>
        Roomates
      </h1>

      <BsFillPlusCircleFill style={
        { "display": "block", "margin": "0.37rem auto" ,"color":"red"}
      } size={30}

        onClick={
          () => {
            setAddReq(!addReq)
          }
        }
      />

      {addReq ?
        <form>
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={
            (e) => {
              setName(e.target.value)
            }
          } />
          <br />
          <label htmlFor="">Email</label>
          <input type="email" value={email} onChange={
            (e) => {
              setEmail(e.target.value)
            }
          } />
          <br />

          <label htmlFor="">Password</label>
          <input type="password" value={password} onChange={
            (e) => {
              setPass(e.target.value)
            }
          } />
          <br />
          <label htmlFor="">Master Key</label>
          <input type="password"

            value={master} onChange={
              (e) => {
                setMaster(e.target.value)
              }
            }
          />
          <br />
          <div className={style.btn}>
            <button

              onClick={
                email !== "" && password !== "" && master != "" ?
                  submitter : null
              }
            >Add</button>
          </div>
        </form> : null

      }

      {delReq ?


        <form className={style.verf}>

          <h4>
            Master key is required
          </h4>
          <p>This change is protected and needs master key of room to be done</p>

          <input type="password" value={master} onChange={
            (e) => {
              setMaster(e.target.value)
            }
          } />


          <div className={style.btn}>
            <button type = "submit" onClick={
                  tarId !== "" && master !==""?
                    requestDelete
                    :null
                }
  
            >
              Confirm
            </button>
          </div>


        </form>
        : null}

      {roomates[0] ? roomates.map(
        (user) => (

          <div className={style.roomi}>
            <h2>
              {user["name"]}
            </h2>
            <AiTwotoneDelete className={style.hoverRound}  size={23}
            onClick={
              !delReq?
              () => {
          
                alert("Deleting a roomate will also delete the expense made by that roomate")
                deleteUser(user["id"])
                
              }
              : ()=>{setdelReq(false)}
            } />
          </div>
        )
      ) : null
      }
    </div>

  </div >
)
}

roomates.getInitialProps = async ({ query }) => {
  const { roomId } = query

  return { roomId }
}

export default roomates