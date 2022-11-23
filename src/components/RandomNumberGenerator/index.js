// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    generatorNumber: 0,
  }

  GeneratorFunc = () => {
    this.setState({
      generatorNumber: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {generatorNumber} = this.state
    return (
      <div className="mainBgContainer">
        <div className="cardContainer">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.GeneratorFunc}>
            Generate
          </button>
          <p className="number">{generatorNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
