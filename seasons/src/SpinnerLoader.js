import React from 'react';

const SpinnerLoader = (props) =>{

	return (
		<div className="ui active dimmer">
    	<div className="ui text loader">{props.message}</div>
 	 	</div>
 	 	)
 } 
 export default SpinnerLoader;