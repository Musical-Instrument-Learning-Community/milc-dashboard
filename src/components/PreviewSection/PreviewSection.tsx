// import React from 'react';
import './PreviewSection.css';
import {data, TutorInfo} from './data'
import React from 'react'
import tutor1 from '../../assets/img/tutor1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TutorCard/TutorCard.css'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faStar, faStarHalf)

interface TutorCardProps{
	key: string,
	info: TutorInfo
}

const TutorCard: React.FunctionComponent<TutorCardProps> = ({key,info}) =>{
	return (
		<div className='TutorCard'>
			<img src={tutor1} alt="tutor" />
			<div className="TutorName">{info.name}</div>
			<div className='TutorRate'>
				<FontAwesomeIcon className='star'icon={faStar} />
				{info.rate.toFixed(2)}(10 reviews)
			</div>
			<div className='TutorIntro'>Piano tutor for all ages and levels in Sydney. 13 years of teaching experience. Working with children certificate. Professional Performer. Fun and educational. </div>
			<div className='priceTag'>
				$50/h
			</div>
		</div>
	)
}

const TutorCards:React.FunctionComponent =() =>{
	const cards = data.map((item:TutorInfo) => {
		return <TutorCard   key={item.name} info={item} />
	})
	return(
		<div className='TutorCards'>{cards}</div>
	)
}

export const PreviewSection:React.FunctionComponent = () => {
	return (
		<div className='PreviewSection'>
			<div className='Subtitle'>Featured Courses</div>
			<div className='intro'>Discover Your Perfect Private Tutor in Australia</div>
			<a href='' className='ViewAllTutors' >Browse All {'>'} </ a>
			<TutorCards/>
		</div>
	)
}