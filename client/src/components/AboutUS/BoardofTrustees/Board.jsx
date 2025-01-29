import AboutBroad from "./AboutBroad"
import Formating from "./Formating"
import { Missions } from "./Missions"

const Board = () => {
  return (
        <>
          <section className="p-4 rounded-xl mx-auto mb-0 rounded-xl mx-auto my-6">
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