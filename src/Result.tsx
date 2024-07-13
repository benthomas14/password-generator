import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Result() {
  return (
    <div className="result">
      <p>PTx1f5DaFX</p>
      <span className="faCopy"><FontAwesomeIcon icon={faCopy} /></span>
    </div>
  )
}
