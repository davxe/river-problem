import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form} from "react-bootstrap"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      sOStream: 0,
      sOBoat: 1,
      distance: 0,
      select: ["Select Option",'DOWNSTREAM','UPSTREAM'],
      option: ""
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  handleSelect=(e)=>{this.setState({option: e.target.value})
  }
  render(){
    let sOBoat = this.state.sOBoat
    let sOStream = this.state.sOStream
    let distance = this.state.distance
    let speed = parseInt(sOStream) + parseInt(sOBoat) 
    let upStreamSpeed = parseInt(sOBoat) - parseInt(sOStream)
    let timeTaken_in_Y_direction =  distance / speed
    let timeTaken_in_opp_Y_direction =  distance / upStreamSpeed
    const select = this.state.select
    let selectList = select.map((ele, i)=>{
                        return (
                            <option key={i}> {ele} </option>
                        )
    })
    return (
      <Container>
        <div>
          <h1 className="text-danger mt-5 text-center">River Problem App</h1>
          <div className='mt-5' style={{width: "30%", float: "right"}}>
            <Form.Control as="select" onChange={this.handleSelect} name='option' className='select'>{selectList}</Form.Control><br/>
          </div>
          <div className="ml-5 mt-3" style={{ width: "50%", float: "left"}}>
            {
              this.state.option === 'DOWNSTREAM' && 
                <Form.Group>
                  <h3>Calculate Time in Positive Y-direction</h3>
                  <Form.Label>Please Enter width of the river</Form.Label>
                  <Form.Control type="Number" value={distance} onChange={this.handleChange} name="distance" /><br/><br/>
                  <Form.Label>Enter V velocity of the swimmer</Form.Label>
                  <Form.Control type="Number" value={sOBoat} onChange={this.handleChange} name="sOBoat" /> <br/><br/>
                  <Form.Label>Enter X velocity of the river</Form.Label>
                  <Form.Control type="Number" value={sOStream} onChange={this.handleChange} name="sOStream" /> <br/><br/>
                  <h3 className="text-dark">Time taken to cover {distance} m with the speed {speed}  m/sec is {timeTaken_in_Y_direction} sec</h3>
                </Form.Group>    
            }
            {
              this.state.option === 'UPSTREAM' &&
                <Form.Group>
                  <h3>Calculate Time in Negative Y-direction</h3>
                  <Form.Label>Enter width of the river</Form.Label>
                  <Form.Control type="Number" value={distance} onChange={this.handleChange} name="distance" /> <br/><br/>
                  <Form.Label>Enter V velocity of the swimmer</Form.Label>
                  <Form.Control type="Number" value={sOBoat} onChange={this.handleChange} name="sOBoat" /> <br/><br/>
                  <Form.Label>Enter X velocity of the river</Form.Label>
                  <Form.Control type="Number" value={sOStream} onChange={this.handleChange} name="sOStream" /> <br/><br/>
                  <h3 className="text-secondary">Time taken to cover distance {distance} m with the speed of {speed}  m/sec is {timeTaken_in_opp_Y_direction} sec</h3>
                </Form.Group>
            }
          </div>
        </div>
      </Container>
      
    )
  }
}
export default App;