import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './SignUp.css';

const SignUpPage = () => (
	<div className="section-signUp">
		<h1 className="title-align" >Registro</h1>
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
			<form className="form-signUp" onSubmit={this.onSubmit}>
				<input className="style-signUp" name="firstName" value={firstName} onChange={this.onChange} type="text" placeholder="Nombre" />
                <input className="style-signUp" name="lastName" value={lastName} onChange={this.onChange} type="text" placeholder="Apellidos" />

				<input className="style-signUp" name="email" value={email} onChange={this.onChange} type="text" placeholder="Correo Electrónico" />
				<input className="style-signUp"
					name="passwordOne"
					value={passwordOne}
					onChange={this.onChange}
					type="password"
					placeholder="Contraseña"
				/>
				<input className="style-signUp"
					name="passwordTwo"
					value={passwordTwo}
					onChange={this.onChange}
					type="password"
					placeholder="Confirmar Contraseña"
				/>
				<button className="btn-signUp" disabled={isInvalid} type="submit">Regístrate</button>
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
