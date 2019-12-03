import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './SignUp.css';

const SignUpPage = () => (
	<div>
		<h1>SignUp</h1>
	    <SignUpForm />
	</div>
);

const INITIAL_STATE = {
    firstName: '',
    lastName:'',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
};

class SignUpFormBase extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}
	onSubmit = event => {
        const { email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);

      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
    };
	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		const { firstName, lastName, email, passwordOne, passwordTwo, error } = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || firstName === ''
        || lastName === '';

		return (
			<form onSubmit={this.onSubmit}>
				<input name="firstName" value={firstName} onChange={this.onChange} type="text" placeholder="First Name" />
                <input name="lastName" value={lastName} onChange={this.onChange} type="text" placeholder="Last Name" />

				<input name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address" />
				<input
					name="passwordOne"
					value={passwordOne}
					onChange={this.onChange}
					type="password"
					placeholder="Password"
				/>
				<input
					name="passwordTwo"
					value={passwordTwo}
					onChange={this.onChange}
					type="password"
					placeholder="Confirm Password"
				/>
				<button disabled={isInvalid} type="submit">Sign Up</button>
				{error && <p>{error.message}</p>}
			</form>
		);
	}
}
const SignUpLink = () => (
	<p id="sign-up">
		Solicita tu cuenta <Link to={ROUTES.SIGN_UP}> aquí</Link>
	</p>
);
const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };
