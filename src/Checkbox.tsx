export default function checkbox() {
  return (
    <div className="checkbox">
        <input type="checkbox" id="UpperCase" />
        <span className="checkbox-text">Include UpperCase letters</span>
        <input type="checkbox" id="LowerCase" />
        <span className="checkbox-text">Include LowerCase letters</span>
        <input type="checkbox" id="Numbers" />
        <span className="checkbox-text">Include Numbers</span>
        <input type="checkbox" id="Symbols" />
        <span className="checkbox-text">Include Symbols</span>
    </div>
  )
}
