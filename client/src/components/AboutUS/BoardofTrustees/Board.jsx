import AboutBroad from "./AboutBroad"
import Formating from "./Formating"
import { Missions } from "./Missions"

const Board = () => {
  return (
        <>
        <section className=" my-10 p-1 rounded-xl mx-auto mb-0 lg:my-20">
            <div className="container mx-auto">
                <AboutBroad/>
                <Formating/>
      
                </div>
              <Missions />
        </section> 
        

                
        </>
  )
}

export default Board