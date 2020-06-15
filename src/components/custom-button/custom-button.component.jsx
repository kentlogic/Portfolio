import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, isAboutMe, inverted, ...otherProps}) => (
    <button className={` ${isAboutMe ? 'about-me' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;