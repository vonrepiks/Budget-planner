import React from 'react';
import BasicLayout from './layout/BasicLayout';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  getForm() {
    return (
      <div className="container">
        <div className="row space-top">
          <div className="col-md-12">
            <h1>Login</h1>
          </div>
        </div>
        <form>
          <div className="row space-top">
            <div className="col-md-3">
              <div className="form-group">
                <label className="form-control-label" htmlFor="email">E-mail</label>
                <input className="form-control" id="email" type="text" />
              </div>
              <div className="form-group">
                <label className="form-control-label" htmlFor="password">Password</label>
                <input className="form-control" id="password" type="password" />
              </div>
              <input type="submit" className="btn btn-secondary" value="Login" />
            </div>
          </div>
        </form>
      </div>
    );
  }

  render() {
    const content = this.getForm();

    return <BasicLayout content={content} />
  }
}

export default LoginForm;
