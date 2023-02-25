import style from "../styles/dashboard.module.css"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"

const myexpense = ({roomId}) => {

    const router = useRouter();
    const [user, setUser] = useState("")
    const [islogin, setLogin] = useState(false)


    const [desc,setDesc] = useState("");
    const [price,setPrice] = useState("");
    const [date,setDate] = useState("");








    const submitter = async (e)=>
    {
        e.preventDefault();

        axios.post(
           "/api/expense/add",
           {
            "price":price,
            "description":desc,
            "email":user["email"],
            "roomId":roomId,
            "date":date
           } ).then(
            (res)=>
            {
                if(res.status === 200)
                {
                    alert("added successfully")

                    router.push("/home")
                }
                else
                {
                    alert(res.data["error"])
                }
            }
           ).catch(
            (err)=>
            {
                alert("error", err.body)
            }
           )


    }



    useEffect(
        ()=>
        {
          if(!islogin)
          {
            axios.get(
              "/api/room/enter"
            ).then(
              (res)=>
              {
                if (res.data["status"] === "allowed")
                {
                
                  setUser(res.data)
                  setLogin(true);
                }
                else
                {
                    router.push("/")
                }
              }
            ).catch(
              (err)=>
              {
                console.log(err)
                alert(err.body)
              }
            )
          }
          else
          {

          }
        },[islogin]
          )
      

  return (
    <div className={style.mainContainer}>


<form id="bill">

<h2>
    Add New Bill
</h2>


<br />
<label htmlFor="">Description </label>
<textarea name="" id="" cols="10" rows="5" style={{"padding":"20px 10px"}}


value = {desc}
  onChange= {(e)=> {
  setDesc(e.target.value)
  }
}
>

</textarea>

<br />

<label htmlFor="">Total Price</label>
<input type="number" value = {price}
  onChange= {(e)=> {
  setPrice(e.target.value)
  }
}
/>
<br />
<label htmlFor="">Date</label>
<input type="date"  value = {date} onChange = {
  (e)=>
  {
  setDate(e.target.value)
  }
}/>

.<div className={style.btn}>


    <button type="submit"
    onClick=
    {
        desc !=="" && price !=="" && price > 0 && date !=="" ?
        submitter:(e)=>
        {
          e.preventDefault();
            alert("fill out all fields")
        }
    }
    
    >Add Bill</button>

</div>
</form>
    </div>
  )
}


myexpense.getInitialProps = async ({ query }) => {
  const { roomId } = query

  return { roomId }
}
export default myexpense