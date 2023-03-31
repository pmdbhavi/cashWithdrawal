import {Component} from 'react'

import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {rupees: 2000}

  denomination = value => {
    this.setState(prevState => ({rupees: prevState.rupees - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {rupees} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <div className="name-con">
            <p className="initial">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance">
            <p className="your-balance">Your Balance</p>
            <p className="rupees">{rupees}</p>
          </div>
          <p className="rup">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list">
            {denominationsList.map(each => (
              <DenominationItem
                details={each}
                sum={this.denomination}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
