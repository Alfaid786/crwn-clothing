import React, { Children } from 'react'
import './custom-button.style.scss';

const CustomButton = ({children,isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`custom-button ${isGoogleSignIn?'google-sign-in':''}`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
