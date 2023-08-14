import './index.css'

const BannersApp = props => {
  const {details} = props
  const {headerText, description, className} = details
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="header"> {headerText} </h1>
        <p className="description"> {description} </p>
        <button className="button" type="button">
          {' '}
          Show More{' '}
        </button>
      </div>
    </li>
  )
}
export default BannersApp
