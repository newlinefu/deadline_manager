import React from 'react'
import styles from './header.module.css'
import {NavLink} from 'react-router-dom'

function Header({headerItems}) {
	return (
		<header className={styles.header_wrapper}>
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