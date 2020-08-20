import React, { FormEvent, ChangeEvent } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component<
  {},
  {
    email: string;
    password: string;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target as HTMLInputElement;

    this.setState({ [name]: value } as any);
  };

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='email'
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            label='password'
            handleChange={this.handleChange}
            type='password'
            name='password'
            value={this.state.password}
            required
          />

          <div className='form-buttons'>
            <CustomButton type='submit' value='Submit Form'>
              Sign In
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              style={{ backgroundColor: 'rgb(64, 120, 235)' }}
              value='Submit Form'
              type='button'
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
