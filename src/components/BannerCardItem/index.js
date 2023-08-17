// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {details} = props
  const {headerText, description, className} = details
  return (
    <li className={className}>
      <div className="data">
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">Show More</button>
      </div>
    </li>
  )
}
export default BannerCardItem
