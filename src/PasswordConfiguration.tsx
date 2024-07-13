import Checkbox from "./Checkbox"
import Strength from "./Strength"
import Button from "./Button"
export default function PasswordConfiguration() {
  return (
    <div className="config">
    <div className="char">
    <p>Character Length</p>
    <span className="faCopy">10</span>
    </div>
      
    

    <Checkbox/>
    <Strength/>
    <Button/>

    </div>
    
  )
}
