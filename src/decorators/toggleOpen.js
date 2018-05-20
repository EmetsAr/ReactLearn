import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrapperComponent extends ReactComponent{
	state = {
		isOpen: false
	}
	render(){
		return <OriginalComponent {...this.props}  isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
	}

	toggleOpen = (ev) => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}