
import style from "../styles/dashboard.module.css"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"

const expense = () => {

  const router = useRouter();
  const [expense, setExpense] = useState([])
  const [user, setUser] = useState([])
  const [islogin, setLogin] = useState(false)
  const [keys, setKey] = useState([])
  const [ind, setInd] = useState([])
  const [master, setMaster] = useState("");

  const [reset, setReset] = useState(false)



  useEffect(
    () => {
      if (!islogin) {
        axios.get(
          "/api/room/enter"
        ).then(
          (res) => {
            if (res.data["status"] === "allowed") {

              setUser(res.data["user"])

              const roomId = res.data["room"];


              axios.post(
                "/api/expense/room",
                {
                  "roomId": roomId
                }
              ).then(
                (bills) => {
                  setExpense(bills.data["expense"])
                  let temp = [];
                  for (let index = 0; index < bills.data["expense"].length; index++) {


                    let element = bills.data["expense"][index];


                    temp.push(

                      Object.keys(element)[0]
                    )
                    setKey(
                      temp
                    )

                  }
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

    }, [islogin]
  )

  const calculate = () => {



    for (let index = 0; index < expense.length; index++) {
      const element = expense[index];

      // on expense of each person 

      let temp = 0;

      element[keys[index]].forEach(row => {
        console.log("row ", row)
        temp = temp + row["price"]
      });

      ind.push(temp)

    }
  }

  const resetBill = () => {
    try {

      axios.post("/api/expense/clear",
        {
          "master": master,
          "userId": user
        }).then(
          (res) => {
            console.log(res.data);
            if (res.data["status"] === "accepted") {
              alert(res.data["message"])
            }
            else {
              alert("Error ", res.data["message"])
            }
          }
        ).catch(
          (err) => {
            console.log("error ", err);
            alert("error communicating to server")
          }
        )
    }
    catch (err) {
      console.log("error ", err);
      alert("error communicating to server")

    }
  }

  return (
    <div className={style.mainContainer}>


      {reset ?


        <form className={style.verf}>

          <h4>
            Master key is required
          </h4>
          <p>This change is protected and needs master key of room to be done</p>

          <input type="password" value={master}
            onChange={
              (e) => {
                setMaster(e.target.value)
              }
            } />


          <div className={style.btn}>
            <button onClick={
              user !== "" && master !== "" ?
                resetBill
                : null
            }

            >
              Confirm
            </button>
          </div>


        </form>
        : null}


      <div className={style.totalBill}>

        {ind.reduce((a, b) => a + b, 0) === 0 ? calculate() : null}
        <h2>
          <span>Current Bills </span> <span style={{ "color": "#16F000" }}>
            {ind.reduce((a, b) => a + b, 0)}
          </span>

        </h2>




        {expense[0] ? expense.map(
          (bill) => (

            <div className={style.entry}>
              {
                <>


                  <div className={style.header}>
                    <h3>{keys[expense.indexOf(bill)]}
                    </h3>

                    {(ind.reduce((a, b) => a + b, 0) / keys.length) - ind[expense.indexOf(bill)] < 0 ?

                      <h3 style={{ "color": "#16F000" }}> + {(-(ind.reduce((a, b) => a + b, 0) / keys.length) + ind[expense.indexOf(bill)]).toFixed(2)}
                      </h3> :
                      <h3 style={{ "color": "red" }}> {(-(ind.reduce((a, b) => a + b, 0) / keys.length) + ind[expense.indexOf(bill)]).toFixed(2)}
                      </h3>
                    }

                  </div>
                  <hr style={{"width":"50%","height":"2px","backgroundColor":"black"}} />


                  {

                    bill[keys[expense.indexOf(bill)]].map(
                      (entry) => (
                        <>
                          <div className={style.row}>
                            <h3>{entry["description"]}</h3>
                            <h3 style={{ "color": "#16F000" }} >{entry["price"].toFixed(2)}</h3>
                          </div>
                          <div className={style.date}>


                            <h4>
                              {entry["date"]}
                            </h4>

                          </div>
                          <hr style={{"width":"40%","height":"1px","backgroundColor":"black"}} />
                        </>


                      )
                    )

                  }
                  <h4 id={style.total}>
                    <span>
                      Spent:</span>
                    <span>
                      {ind[expense.indexOf(bill)].toFixed(2)} </span>
                  </h4>
                  <hr style={{"width":"50%","height":"2px","backgroundColor":"black"}}/>


                </>


              }
            </div>






          )
        ) : <h2 style={{ "color": "red" }}>No Expenses to show</h2>}

        <div className={style.btn}>
          <button onClick={
            () => {
              setReset(true)
            }
          }>
            Reset Bills
          </button>
        </div>

      </div>
    </div >
  )
}

export default expense