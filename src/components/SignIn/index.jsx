import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './SignIn.scss';


const SignInPage = () => (
    <div>
        <SignInForm/>
        
    </div>
)

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
}

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const { email, password} = this.state;
 
        this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.NEW);
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
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
          <form onSubmit={this.onSubmit}>
            {/* <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            /> */}
            {/* <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <button id="button1" disabled={isInvalid} type="submit">
              Sign In
            </button>
            {error && <p>{error.message}</p>} */}
            <div className="container"onClick>
            <div className="top">
              <div className="bottom">
                <div className="center">
                  <h2>Por favor, inicia sesión</h2> &nbsp;
                  <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Ingresa tu correo electrónico"
            />
                  <input
                  name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Ingresa tu contraseña"/>
              <p id="get-password">¿Olvidaste tu contraseña?</p> &nbsp;
              <button id="sign-in-button">¡Comencemos!</button> &nbsp;
              {error && <p id="error-txt"> Upss, necesitamos registrarte primero</p>}
               <SignUpLink/>
                </div>
              </div>
            </div>
            </div>
            </form>
            
        );
      }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
  )(SignInFormBase);

  
  export default SignInPage;
  export { SignInForm };