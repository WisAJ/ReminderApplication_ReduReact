import React, { Component } from 'react';
import { Form, Col, Button, Row, Container, ListGroup, Item } from 'react-bootstrap';
import { connect} from "react-redux";
import moment from "moment";
import {add_Reminder, remove_Reminder, remove_All} from '../actions';




class App extends Component {

    state = {
        text:'',
        date : new Date()
    }

    render_Reminder = () => {
        const {reminder}= this.props;
        return ( <ListGroup variant="flush">
            {
                reminder.map( remind => <ListGroup.Item key={remind.id} >
                    <div>{remind.text}</div>
                    <div>{moment(new Date(remind.date)).fromNow()}</div>
                    <Button variant="outline-danger" onClick={()=>this.props.remove_Reminder(remind.id)}>X</Button>{' '}
                </ListGroup.Item>)
            }
        </ListGroup>)
    }


    render() {
        // console.log(this.props) 
        // add_Reminder is the props
        return (<div>
            <Container>
                <Row md={2}>
                    <Form.Group>
                    <h2>What should U Do?</h2>
                        <br />
                        <Form.Control onChange={(e)=> this.setState({text:e.target.value })}
                        size="lg" type="text" placeholder="Enter a Task"  value={this.state.text}/>
                        <br />
                        <Form.Control onChange={(e)=> this.setState({date:e.target.value })}
                        size="lg" type="datetime-local" placeholder="Enter Time and Date" value={this.state.date}/>
                        <br /> 
                        <Button onClick={()=>{this.props.add_Reminder(this.state.text, this.state.date)
                                            this.setState({text:'', date:''})
                                        }}
                        variant="outline-primary">Add a Reminder</Button>{'      '}
                        <br />
                        
                        <br />
                        {this.render_Reminder()}
                        <Button onClick={()=>{this.props.remove_All()}}
                        variant="outline-danger" >Clear Reminder</Button>{'      '}
                        <br />
                    </Form.Group>
                </Row>
            </Container>
        </div>

        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//             add_Reminder:() => dispatch(add_Reminder())
//     }

// }

// function mapDispatchToProps(state) {
//     return {
//         reminder:state
//     }
// }

export default connect (state => { return { reminder:state }}, 
                        {add_Reminder, remove_Reminder, remove_All}) 
                        (App)

// الوسيط بين الاكشن والرديوسر هو الديسباتش

// return ( <ul className='list-group'>
// {
//     reminder.map( remind => <li 
//         key={remind.id} className="list-group-item" >
//         <div>{remind.text}</div>
//         <div>{remind.date}</div>
//     </li>)
// }
// </ul>)
// }