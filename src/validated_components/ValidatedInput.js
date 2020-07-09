import React 	from 'react'
import styles 	from './validated_components.module.css'

export default function ValiadatedInput({input, meta, ...props}) {
	return (
		<div className = {styles.validated_input_wrapper}>
			<input 
				placeholder 	= {props.placeholder}
				className 		= {`${props.className} ${meta.error && meta.touched ? styles.error_input : ''}`}
				{...input}/>
			{meta.error 
				&& meta.touched 
				&& !meta.active 
				&& <div className = {styles.error_input_block}>{meta.error}</div>}
		</div>
	)
}