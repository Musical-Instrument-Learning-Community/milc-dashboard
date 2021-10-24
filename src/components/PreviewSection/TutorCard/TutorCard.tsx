import './TutorCard.css'
import tutor1 from '../../../assets/img/tutor1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
library.add(faStar, faStarHalf)

type TutorInfo = {
	name: string;
	rate: number;
};

export const TutorCard: React.FunctionComponent<TutorInfo> = props =>{
	return (
		<div className='TutorCard'>
			<img src={tutor1} alt="tutor" />
			<div className="TutorName">{props.name}</div>
			<div className='TutorRate'>
				<FontAwesomeIcon className='star'icon={faStar} />
				{props.rate.toFixed(2)}(10 reviews)
			</div>
			<div className='TutorIntro'>Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational. </div>
			<div className='priceTag'>
				$50/h
			</div>
		</div>
	)
}