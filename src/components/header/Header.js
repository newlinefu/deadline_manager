import React, {useState} from 'react'
import styles from './header.module.css'
import {NavLink} from 'react-router-dom'

function Header({headerItems, name, clearAuth, deleteUser, setAddingNewUserMode}) {

	let [buttonsShow, setButtonsShow] = useState(false)
	let [loading, setLoading] = useState(false)

	
	function activateButtonsShow(e) {
		const toElement 	= e.target
		const fromElement 	= e.relatedTarget
		if(fromElement && toElement)
			if(toElement.closest(`.${styles.header_nav_user}`) && !fromElement.closest(`.${styles.header_nav_user}`))
				setButtonsShow(true)
	} 

	function deactivateButtonsShow(e) {
		const fromElement 	= e.target
		const toElement 	= e.relatedTarget
		if(fromElement && toElement)
			if(fromElement.closest(`.${styles.header_nav_user}`) && !toElement.closest(`.${styles.header_nav_user}`))
				setButtonsShow(false)
	} 
	
	function addNewUser() {
		setAddingNewUserMode(name)
		clearAuth()
	}
	function delUserWithLoading() {
		setLoading(true)
		deleteUser()
			.finally(() => setLoading(false))
	}

	return (
		<header className={styles.header_wrapper}>
		<div 
			className = {styles.header_nav_user}
			onMouseOver = {activateButtonsShow}
			onMouseOut = {deactivateButtonsShow}>
			{loading ? <div>loading...</div> : <div>{name}</div>}
			{
				buttonsShow && !loading
				? (<div className = {styles.buttons_block}>
						<button onClick = {clearAuth}>			Сменить пользователя	</button>
						<button onClick = {delUserWithLoading}>	Удалить					</button>
						<button onClick = {addNewUser}>			Добавить пользователя	</button>
					</div>)
				: null 
			}
		</div>
			{
				headerItems.map( (item, key) => {
					return (
						<NavLink to={item.link} className={styles.header_nav_links} key={key}>{item.name}</NavLink>
					)
				})
			}
		</header>
	)
}

export default Header