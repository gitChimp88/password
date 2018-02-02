import React from 'react';

import './Password.css';

export default class App extends React.Component {
  constructor() {
		super()
		this.state = {
				capital: false,
				lengthMet: false
			}
			
	}
	
	handleSubmit(e){
		var caps = this.state.capital;
		var length = this.state.lengthMet;
		
		if(caps == false || length == false){
			e.preventDefault()
		}
	}
	
	
	
	handleChange(e){
		var value = e.target.value;
		var arr = [e.target.value]
		
		if(value.length >= 8) {
			this.setState({lengthMet: true})	
		} else {
			this.setState({lengthMet: false})
		}
		
		if(value !== value.toLowerCase()){
			this.setState({capital: true})
		} else {
			this.setState({capital: false})
		}
		
		
	}
	
	render(){
	   
	   let length;
	   let caps;
	   
	   	if(this.state.lengthMet == true){
			length = <h1 className="green small">password has 8 characters or more</h1>
		} else {
			length = <h1 className="red small">Password must be 8 characters or more</h1>
		}
	   
	   if(this.state.capital == true) {
		   caps = <h2 className="green smaller">password contains uppercase</h2>
	   } else {
		   caps = <h2 className="red smaller">Password must contain at least one uppercase character</h2>
	   }
		   
	   return(
			
			   <div className="container">
				  		<h1>{length}</h1>
			   			<h2>{caps}</h2>
			   			<form onSubmit={this.handleSubmit.bind(this)}> 
							   <input ref="password" placeholder="Create Password" onChange={this.handleChange.bind(this)}></input>
							   <button  type="submit">Submit</button>
						</form>	   
				
			   </div>
	   )
   }
}



