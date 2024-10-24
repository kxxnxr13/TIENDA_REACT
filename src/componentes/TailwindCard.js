import React from 'react';

function TailwindCard() {
    return (
        <div>
            <div className='tailwind-card'>
            <div className='image-placeholder'></div>
            <div className='card-content'>
                <h3>Tailwind Card</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.</p>
                <button className='read-more-button'>Read More</button>    
            </div>

        </div>
        </div>

    )
}

export default TailwindCard;