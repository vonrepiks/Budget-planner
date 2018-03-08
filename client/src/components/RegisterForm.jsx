import React from 'react';
import axios from 'axios';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BasicLayout from './layout/BasicLayout';
import userActionsCreator from '../redux/actions/user_actions_creator';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      message: '',
    }

    this.handleCnange = this.handleCnange.bind(this);
    this.register = this.register.bind(this);
  }

  register(e) {
    e.preventDefault();

    const user = {
      name: this.props.user.name,
      email: this.props.user.email,
      password: this.props.user.password,
    };

    if (JSON.stringify(this.props.user.password) !== JSON.stringify(this.props.user.confirmPassword)) {
      const errors = this.state.errors;
      errors.password = 'Passwords mismatch';
      this.setState({
        errors,
      });
      return;
    }

    axios.post('/auth/signup', user)
      .then((success) => {
        if (success.data.success) {
          this.props.history.push("/");
        } else {
          let message = this.state.message;
          if (success.data.message) {
            message = success.data.message;
          }
          this.setState({
            errors: success.data.errors,
            message
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleCnange(e) {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    const user = this.props.user;
    user[key] = value;

    this.props.updateUser(user);
  }

  getForm() {
    const errors = this.state.errors || {};

    return (
      <div className="container">
        <div className="row space-top">
          <div className="col-md-12">
            <h1>Register</h1>
            <p >{this.state.message}</p>
          </div>
        </div>
        <form onSubmit={(e) => this.register(e)}>
          <div className="row">
            <div className="col-md-3">
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label className="form-control-label " htmlFor="new-username">Username</label>
                <input className="form-control" id="new-username" type="text" name="name" value={this.props.user.name} onChange={e => this.handleCnange(e)} />
                <div className="form-control-feedback">{errors.name ? errors.name : ''}
                </div>
              </div>
              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label className="form-control-label" htmlFor="new-email">E-mail</label>
                <input className="form-control" id="new-email" type="text" name="email" value={this.props.user.email} onChange={e => this.handleCnange(e)} />
                <div className="form-control-feedback">{errors.email ? errors.email : ''}</div>
              </div>
              <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
                <label className="form-control-label" htmlFor="new-password">Password</label>
                <input className="form-control" id="new-password" type="password" name="password" value={this.props.user.password} onChange={e => this.handleCnange(e)} />
                <div className="form-control-feedback">{errors.password ? errors.password : ''}</div>
              </div>
              <div className="form-group has-danger">
                <label className="form-control-label" htmlFor="new-repeat-password">Repeat password</label>
                <input className="form-control" id="new-repeat-password" type="password" name="confirmPassword" value={this.props.user.confirmPassword} onChange={e => this.handleCnange(e)} />
                <div className="form-control-feedback">{errors.password ? errors.password : ''}</div>
              </div>
              <input type="submit" className="btn btn-secondary" value="Register" />
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

function mapStateToProps(state) {
  return {
    user: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: (user) => { dispatch(userActionsCreator.updateUser(user)) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
