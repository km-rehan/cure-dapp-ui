import React, { Component } from 'react'
import { Container, Button, Col } from "reactstrap";
import { Arrows, StepsModel } from "awesome-react-steps";

export class AppointmentForm extends Component {

    state = {
        buttonText: "Next",
        stepsModel: new StepsModel({
            steps: [
                { label: "First step" },
                { label: "Second step"},
                { label: "Third step" },
                { label: "Fourth step" }
            ],
            current: 0
        })
    }

    componentDidMount() {
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("PrevState", prevState);
        return {
            notifyRequired: prevState.stepsModel.current === 2
        };
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot.notifyRequired) {
            this.setState({
                buttonText: "Submit"
            })
        }
    }

    changePage = (e) => {
        e.preventDefault();
        if (this.state.stepsModel.current == 3) {

        }
        this.setState(prevState => ({
            stepsModel: prevState.stepsModel.next()
        }))
    }

    render() {
        return (
            <Container className="form-container">
                <Col>
                    <Arrows model={this.state.stepsModel} />
                        <Container>
                            
                        </Container>
                    <Button block color="info" onClick={this.changePage}>{this.state.buttonText}</Button>
                </Col>
            </Container>
        )
    }
}
