import styles from "../styles/navBar.module.css"
import Link from "next/link"
import axios from "axios"


const Navigation = ({setLogin ,roomId, link }) => {

    return (
        <div className={styles.navBar}>

            <ul>

            {
                link.map(
                    (item)=>(
                        <li>
                            <Link href=
                            {
                                {
                                pathname: item["link"],
                                query:
                                {
                                    "roomId":roomId
                                }
                            
                            
                                }
                        }
                            


                            >{item["desc"]}</Link>
                        </li>
                    )
                )
            }

            </ul>


            <div className={styles.btn}>
              <button onClick={
                ()=>
                {
                  axios.delete(
                    "/api/user/logout"
                  ).then(
                    (res)=>
                    {
                      if (res.status == 200)
                      {
                        setLogin(false)
                      }
                      else
                      {
                        alert("Error communicating to server")
                      }
                    }
                  )
                }
              }>

                log out
              </button>
            </div>

        </div>
    )
}

export default Navigation