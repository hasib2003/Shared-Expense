import style from "../styles/dashboard.module.css"
import { useEffect, useState } from "react"
import Verify from "../Componenets/Verify"


const dashboard = () => {

    const [User, setUser] = useState([])


    useEffect(
        () => {
            setUser(["hasib", "zuryat"])
        }, []
    )
    return (
        <div className={style.mainContainer}>

            <h1>
                We take care all things you need
            </h1>

            <form id=" user">
                <h2>
                    Manage Room Mates
                </h2>
                <div>

                    {
                        User.map(
                            (user) => (
                                <div className="user">
                                    <h3>
                                        {user}
                                    </h3>
                                    <button>Remove</button>
                                </div>
                            )
                        )
                    }

                </div>





                <label htmlFor="">Add</label>
                <input type="text" />
                <br />


                <div className={style.btn}>
                    <button>Add New Room Mate</button>
                </div>

            </form>





            <Verify></Verify>

        </div>
    )
}

export default dashboard