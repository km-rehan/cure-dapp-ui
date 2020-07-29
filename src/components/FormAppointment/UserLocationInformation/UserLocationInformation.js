import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export class UserLocationInformation extends Component {

    state = {
        patientLocation: this.props.getStore().patientLocation
    }

    constructor(props) {
        super(props);
        this._validateOnDemand = true;
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })

    }

    componentDidMount() {
        this.props.getUserProfileAction(this.props.token);
    }

    render() {
        const { profile }  = this.props;

        console.log("Profile", JSON.stringify(profile, null, 3));

        return (
            <div className="container">
                <Container>
                    <Row>
                        <Col lg={12} md={8} sm={4}>
                            {profile ? (
                                <Form>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="patientLocation" value={profile.address} />{' '}
                                        <p>{profile.address}</p>
                                    </Label>
                                </FormGroup>
                            </Form>
                            ): <p>Please try adding an address to your profile <Button color="primary">Add address</Button></p>}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
