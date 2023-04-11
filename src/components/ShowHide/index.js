import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFName: false, showLName: false}

  FNameBtnClicked = () => {
    this.setState(prevState => ({showFName: !prevState.showFName}))
  }

  LNameBtnClicked = () => {
    this.setState(prevState1 => ({showLName: !prevState1.showLName}))
  }

  addFirstName = () => {
    const a = null
    const {showFName} = this.state
    if (showFName === true) {
      return (
        <div className="cardContainer">
          <p className="header">Joe</p>
        </div>
      )
    }
    return <div className="emptyContainer">{a}</div>
  }

  addLastName = () => {
    const a = null
    const {showLName} = this.state
    if (showLName === true) {
      return (
        <div className="cardContainer">
          <p className="header">Jonas</p>
        </div>
      )
    }
    return <div className="emptyContainer">{a}</div>
  }

  render() {
    return (
      <div className="mainContainer">
        <h1 className="mainHead">Show/Hide</h1>
        <div className="subContainer">
          <div className="subContainer2">
            <button
              onClick={this.FNameBtnClicked}
              type="button"
              className="BtnCSS"
            >
              Show/Hide FirstName
            </button>
            {this.addFirstName()}
          </div>
          <div className="subContainer2">
            <button
              onClick={this.LNameBtnClicked}
              type="button"
              className="BtnCSS"
            >
              Show/Hide LastName
            </button>
            {this.addLastName()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
