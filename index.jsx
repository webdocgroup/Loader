// Core
import React, { Component } from 'react';

// Styles
import './loader.css';


export default class Loader extends Component {

	/*
	 * Generate the DOM classes requred to set the size and color
	 * @returns (Array) - Array of classes to be used
	 */
	getClass() {
		let classes = ['active', 'preloader-wrapper'];

		classes.push(this.getColor());
		classes.push(this.getSize());

		return classes;
	}	


	/*
	 * Gets the size of the spinner
	 * @returns (String) - the size class
	 */
	getSize() {
		const DEFAULT = null;

		if(this.props.size) {
			switch(this.props.size) {
				case 'small':
					return 'small';
				case 'medium':
					return DEFAULT;
				case 'big':
					return 'big';
				default:
					return DEFAULT;
			}
		}

		return DEFAULT;
	}


	/*
	 * Gets the color of the spinner
	 * @returns (String) - the color class
	 */
	getColor() {
		const DEFAULT = 'spinner-blue-only';

		if(this.props.color) {
			switch(this.props.color) {
				case 'red':
					return 'spinner-red-only';
				case 'green':
					return 'spinner-green-only';
				case 'blue':
					return 'spinner-blue-only';
				default:
					return DEFAULT;

			}
		}

		return DEFAULT;
	}


	render() {
		return (
			<div className={this.getClass().join(' ') }>
    			<div className={'spinner-layer ' + this.getColor()}>
      				<div className="circle-clipper left">
        				<div className="circle"></div>
      				</div>
      				<div className="gap-patch">
        				<div className="circle"></div>
      				</div>
      				<div className="circle-clipper right">
        				<div className="circle"></div>
      				</div>
    			</div>
  			</div>
  		)
	}
}