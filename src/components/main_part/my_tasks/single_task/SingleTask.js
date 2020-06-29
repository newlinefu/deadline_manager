import React from 'react'
import styles from './single_task.module.css'
import one from '../../../../resourses/1.jpg'
import two from '../../../../resourses/2.jpg'
import three from '../../../../resourses/3.jpg'
import four from '../../../../resourses/4.jpg'
import five from '../../../../resourses/5.jpg'
import six from '../../../../resourses/6.jpg'
import seven from '../../../../resourses/7.jpg'
import eight from '../../../../resourses/8.jpg'


function parseDate(milliseconds) {
	const jsonDate = (new Date(milliseconds)).toJSON()
	return `${jsonDate.slice(0, jsonDate.indexOf('T'))} ${jsonDate.slice(jsonDate.indexOf('T') + 1, jsonDate.indexOf('Z') - 4)}`
}

function timeToDeadline(creation, deadline) {
	const timeDiff 	= Math.round((deadline - (Date.now() + 1000*60*60*3)) / 1000)
	const minutes 	= Math.floor(timeDiff / 60) >= 0 ? Math.floor(timeDiff / 60) : 0
	const hours 	= Math.floor(minutes / 60) >= 0 ? Math.floor(minutes / 60) : 0
	const days 		= Math.floor(hours / 24) >= 0 ? Math.floor(hours / 24) : 0

	return `${days} ${getDaysPostfix(days)} ${hours%24} ${getHoursPostfix(hours%24)} ${minutes%60} ${getMinutesPostfix(minutes%60)}`
}

function getMinutesPostfix(min) {
	if(min%10 >= 5 || Math.floor(min/10) === 1 || min%10 === 0)
		return 'минут'
	else if (min%10 === 1)
		return 'минута'
	else
		return 'минуты'
}

function getHoursPostfix(hours) {
	if(hours%10 >= 5 || Math.floor(hours/10) === 1 || hours%10 === 0)
		return 'часов'
	else if (hours%10 === 1)
		return 'час'
	else
		return 'часа'
}

function getDaysPostfix(days) {
	if(days%10 >= 5 || Math.floor(days/10) === 1 || days%10 === 0)
		return 'дней'
	else if (days%10 === 1)
		return 'день'
	else
		return 'дня'
}

function imageChoice(dateOfCreation, deadline) {
	const now = (Date.now() + 1000*60*60*3) - dateOfCreation
	console.log('now' + now)
	const diff = deadline - dateOfCreation
	console.log('diff' + diff)
	if(now <= diff*(1 / 8))
		return one
	else if(now >= diff*(2 / 8) && now <= diff*(3 / 8))
		return two
	else if(now >= diff*(3 / 8) && now <= diff*(4 / 8))
		return three
	else if(now >= diff*(4 / 8) && now <= diff*(5 / 8))
		return four
	else if(now >= diff*(5 / 8) && now <= diff*(6 / 8))
		return five
	else if(now >= diff*(6 / 8) && now <= diff*(7 / 8))
		return six
	else if(now >= diff*(7 / 8) && now <= diff)
		return seven
	else if(Date.now() + 1000*60*60*3  >= deadline)
		return eight
}



export default function SingleTask({
	title, description, dateOfCreation, dateOfLastChange, deadline, activateCorrectMode,
	addCorrectedTask
}) {
	let taskWrapper = {
		  backgroundImage: `url(${imageChoice(dateOfCreation, deadline)})`,
		  	width: '220px',
			height: '250px',
			backgroundRepeat: 'no-repeat',
			borderRadius: '6px',
			margin: '10px',
			textAlign: 'center',
			position: 'relative',
			border: '3px solid var(--side_color_one)',
			transition: '0.3s'
	}
	function changeTask() {
		activateCorrectMode()
		addCorrectedTask({title, description, dateOfCreation, dateOfLastChange, deadline})
	}
	return <div style = {taskWrapper} onClick = {changeTask} className = {styles.main_task_wrapper}>
		<div className = {styles.task_text_wrapper}>
			<div className = {styles.title}>
				<span className = {styles.viol}>{title}</span>
			</div>
			<div>
				<span className = {styles.viol}>До:</span><br/> {parseDate(deadline)}
			</div>
			<div>
				<span className = {styles.viol}>Оставшееся время:</span> <br/> {timeToDeadline(dateOfCreation, deadline)}
			</div>
		</div>
	</div>
}