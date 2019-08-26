import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from '../../action'
import { Button, Card, Container, Row, Col, CardTitle, Label, Input, Form, FormGroup } from 'reactstrap';

const Login = props => (
    <Container>
        <Row>
            <Col xs="4">
                <Card body>

                    <h2>Sign In</h2>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="myemail@email.com"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="********"
                                />
                            </FormGroup>
                        </Col>
                        <Button>Submit</Button>
                    </Form>
                </Card>
            </Col>
            <Col xs="8">.col</Col>
        </Row>
    </Container>
)

const mapStateToProps = ({ incdec }) => ({
    count: incdec.count,
    isIncrementing: incdec.isIncrementing,
    isDecrementing: incdec.isDecrementing
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
            incrementAsync,
            decrement,
            decrementAsync,
            changePage: () => push('/about-us')
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
