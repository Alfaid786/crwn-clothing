import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component.jsx';
import CustomeButton from '../custom-button/custom-button.component.jsx';
import './sing-up.style.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';



export class SingUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            displayName: '',
            emial: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password Don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                
            displayName: '',
            emial: '',
            password: '',
            confirmPassword:''
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }
    
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2>I do not have an account </h2>
                <span> Sign up with you email password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required>
                        
                    </FormInput>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required>
                        
                    </FormInput>
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required>
                        
                    </FormInput>
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required>
                        
                    </FormInput>
                    <CustomeButton type='submit'>SIGN UP</CustomeButton>
                </form>
                
            </div>
        )
    }
}

export default SingUp;

