import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import firebase from "firebase";
import { Colxx } from "Components/CustomBootstrap";

class ForgotPasswordLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  sendPasswordReset() {
    const email = this.state.email;
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("resetPassword success");
        this.props.history.push("/login");

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error, errorCode, errorMessage);
      });
  }
  componentDidMount() {
    document.body.classList.add("background");
  }
  componentWillUnmount() {
    document.body.classList.remove("background");
  }
  render() {
    return (
      <Fragment>
        <div className="fixed-background" />
        <main>
          <div className="container">
            <Row className="h-100">
              <Colxx xxs="12" md="10" className="mx-auto my-auto">
                <Card className="auth-card">
                  <div className="position-relative image-side ">
                    {/* <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
                    <p className="white mb-0">
                      Please use your e-mail to reset your password. <br />
                      If you are not a member, please{" "}
                      <NavLink to={`/register`} className="white">
                        register
                      </NavLink>
                      .
                    </p> */}
                  </div>
                  <div className="form-side">
                    <NavLink to={`/`} className="white">
                      <span className="logo-single" />
                    </NavLink>
                    <CardTitle className="mb-4">
                      <IntlMessages id="user.forgot-password" />
                    </CardTitle>
                    <Form>
                      <Label className="form-group has-float-label mb-4">
                        <Input
                          type="email"
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                          defaultValue={this.state.email}
                        />
                        <IntlMessages id="user.email" />
                      </Label>

                      <div className="d-flex justify-content-end align-items-center">
                        <Button
                          onClick={(e) => {
                            this.sendPasswordReset();
                          }}
                          color="primary"
                          outline="light"
                          className="btn-shadow"
                          size="lg"
                        >
                          <IntlMessages id="user.reset-password-button" />
                        </Button>
                      </div>
                    </Form>
                  </div>
                </Card>
              </Colxx>
            </Row>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default ForgotPasswordLayout;
