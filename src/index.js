import React from 'react'
import { render } from 'react-dom'
import {hello, goodbye} from './lib'


const styleHeader = {
	backgroundColor: 'orange',
	color: 'white',
	fontFamily: 'veranda'
}

render(
	<div>
		{hello}
		{goodbye}
	</div>,
	document.getElementById('react-container')
)