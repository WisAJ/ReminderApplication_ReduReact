import React, { Component } from 'react';
import { Form, Button, Row, Container, ListGroup, Image } from 'react-bootstrap';
import { connect } from "react-redux";
import moment from "moment";
import logo from "../../public/images/writing.jpg";
import dodo from "../../public/images/logo.png";
import { add_Reminder, remove_Reminder, remove_All } from '../actions';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


class App extends Component {

    state = {
        text: '',
        date: new Date()
    }

    render_Reminder = () => {

        const { reminder } = this.props;
        return (<ListGroup className="remindText" variant="flush">
            {
                reminder.map((remind) => {
                    if (remind.text.length > 0) {
                        return (
                            <ListGroup.Item key={remind.id} >
                                <div>{remind.text}</div>
                                <div>{moment(new Date(remind.date)).fromNow()}</div>
                                <Button className="closeIcon" variant="outline-danger" onClick={() => this.props.remove_Reminder(remind.id)}>X</Button>{' '}
                            </ListGroup.Item>
                        )
                    } else {
                        return false
                    }
                })
            }
        </ListGroup>
        )
    }




    render() {

        // console.log(this.props) 
        // add_Reminder is the props
        return (<div>
                     <div>
                     <Image src={dodo} width={50} height={50} thumbnail roundedCircle alt="dodo" />
                     </div>   
            <Container>
               
                <Image src={logo} width={200} height={200} thumbnail roundedCircle />
                
                <Row md={2}>
                    <Form.Group>
                        <h2>What should U Do?</h2>
                        <br />
                        <Form.Control onChange={(e) => this.setState({ text: e.target.value })}
                            size="lg" type="text" placeholder="Enter a Task" value={this.state.text} required />
                        <br />
                        <DatePicker
                            className='form-control-lg form-control'
                            selected={this.state.date}
                            value={this.state.date}
                            onChange={date => this.setState({ date: date })}
                            showTimeSelect
                            timeFormat="HH:mm"
                            dateFormat="d MMM yyy h:mm aa"
                            timeCaption="Time"
                            isClearable
                            placeholderText="I have been cleared!"
                        />
                        <br />
                        <br />
                        <Button onClick={() => {
                            this.props.add_Reminder(this.state.text, this.state.date)
                            this.setState({ text: '', date: '' })
                        }}
                            variant="outline-primary">Add a Reminder</Button>{'      '}
                        <br />
                        <br />
                        {this.render_Reminder()}
                        <br />
                        <Button onClick={() => { this.props.remove_All() }}
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

export default connect(state => { return { reminder: state } },
    { add_Reminder, remove_Reminder, remove_All })
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

// && remind.text.length > 0  ...........none of these worked to step empty insertion.
// {remind.text.length && remind.date.length ? this.render_Reminder() : '' }

