import React from 'react'
import './card.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

const Card = ({header, content}) => (
    <div class='card'>
            <h1 className='title'>{header}</h1>
            <p className='content'>
                {content}
            </p>
            <CustomButton isAboutMe>
                More about me
            </CustomButton>
    </div>
);

export default Card;