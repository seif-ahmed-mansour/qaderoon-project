import AboutBroad from "./AboutBroad"
import Formating from "./Formating"
import { Missions } from "./Missions"

const Board = () => {
  return (
        <>
        <section className="container p-1 rounded-xl mx-auto mb-0 my-4 lg:my-20">
                <AboutBroad/>

        <Formating/>
        <Missions/>

        </section> 

                
        </>
  )
}

export default Board