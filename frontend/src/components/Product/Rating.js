import React from 'react'

import { ReactComponent as StarIcon } from '../../icons/StarIcon.svg'

const Rating = ({ value, text }) => {
     return (
          <div className='rating'>
               <span>
                    <StarIcon
                         className={
                              value >= 1 ? 'ratingSVG full' : value >= 0.5 ? 'ratingSVG half' : 'ratingSVG empty'
                         }
                    />
               </span>
               <span>
                    <StarIcon
                         className={
                              value >= 2 ? 'ratingSVG full' : value >= 1.5 ? 'ratingSVG half' : 'ratingSVG empty'
                         }
                    />
               </span>
               <span>
                    <StarIcon
                         className={
                              value >= 3 ? 'ratingSVG full' : value >= 2.5 ? 'ratingSVG half' : 'ratingSVG empty'
                         }
                    />
               </span>
               <span>
                    <StarIcon
                         className={
                              value >= 4 ? 'ratingSVG full' : value >= 3.5 ? 'ratingSVG half' : 'ratingSVG empty'
                         }
                    />
               </span>
               <span>
                    <StarIcon
                         className={
                              value >= 5 ? 'ratingSVG full' : value >= 4.5 ? 'ratingSVG half' : 'ratingSVG empty'
                         }
                    />
               </span>
               <span className='ratingText'>{text && text}</span>
          </div>
     )
}

export default Rating
