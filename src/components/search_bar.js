import React, { Component } from 'react'
	
class SearchBar extends Component {

  	render() {
    	return (
      		<form className='input-group'>
      			<input 
              className='form-control'
      				placeholder='Digite o termo de busca'
      				onChange={(event) => {
      					this.props.onInputChange(event)
      				}} 
      				value={this.props.term}
      			/>
            <span className='input-group-btn'>
        			<button 
        				className='btn btn-primary'
                onClick={(event) => {
        					event.preventDefault()
        					this.props.onSubmit(this.props.term)
        				}}
        			>
        			Buscar
        			</button>
            </span>
      		</form>
    	)
  	}
}


export default SearchBar