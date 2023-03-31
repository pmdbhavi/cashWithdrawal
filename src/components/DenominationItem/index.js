import './index.css'

const DenominationItem = props => {
  const {details, sum} = props
  const {value} = details
  const onClickSum = () => {
    sum(value)
  }

  return (
    <li className="con">
      <button className="button" type="button" onClick={onClickSum}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
