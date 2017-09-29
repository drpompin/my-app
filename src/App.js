	import React, {Component} from "react";

	//Navbar component creation
	import PropTypes from 'prop-types';//setting propTypes which can be used for validation
	class Navbar extends Component{
		render(){

			if(this.props.color == 'dark'){
				var navClass = 'navbar navbar-inverse';
			} else {
				var navClass = 'navbar navbar-default';
			}

			var homeActive = '';
			var aboutActive = '';

			if (this.props.page == 'home'){
				homeActive = 'active';
			}
			else if (this.props.page == 'about'){
				aboutActive = 'active';
			}

			return(
				<div>
				   <nav className={navClass}>
				    <div className="container-fluid">
				      <div className="navbar-header">
				        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				          <span className="sr-only">Toggle navigation</span>
				          <span className="icon-bar"></span>
				          <span className="icon-bar"></span>
				          <span className="icon-bar"></span>
				        </button>
				        <a className="navbar-brand" href="#">{this.props.brand}</a>
				      </div>

				      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				        <ul className="nav navbar-nav">
				          <li className={homeActive}><a onClick={this.props.homeClick} href="#">Home</a></li>
				          <li className={aboutActive}><a onClick={this.props.aboutClick} href="#">About</a></li>          
				        </ul>
				      </div>
				    </div>
				  </nav>
				  
				</div>
			)
		}
	}

	Navbar.PropTypes = {
		brand: PropTypes.string.isRequired
	};
	Navbar.defaultProps = {
		brand: 'My website',
		color: 'light'
	};




	//Jumbotron Component]
	class Jumbotron extends Component{
		render(){
			return(
				<div className="jumbotron">
					<div className="container">
						<h1 className="display-3">{this.props.heading}</h1>
						<p>{this.props.text}</p>
						<p><a className="btn btn-primary btn-lg" href={this.props.link} role="button">Learn more &raquo;</a></p>
					</div>
				</div>
			)
		}
	}

	Jumbotron.PropTypes = {
		heading: PropTypes.string,
		text: PropTypes.string,
		link: PropTypes.string
	};	
	Jumbotron.defaultProps = {
		heading: 'Welcome!',
		text: 'Welcome to our shiny new website built with React Components',
		link: 'http://google.com'
	};




	//Homepage Component
	class HomePage extends Component{
		render(){
			return(
				<div className="container">
					<div className="row">
						<h2 className='page-header'>Homecoming</h2>
						<p>Some content...</p>
					</div>
				</div>
			)
		}
	}

	//Aboutpage Component
	class AboutPage extends Component{
		render(){
			return(
				<div className="container">
					<div className="row">
						<h2 className='page-header'>About Us</h2>
						<p>Some content...</p>
					</div>
				</div>
			)
		}
	}


	//Footer component
	class Footer extends Component{
		render(){
			return(
				<div className="container">
					<hr/>

	                <footer>
	                  <p>&copy; {this.props.website} {this.props.made}.</p>
	                </footer>
				</div>
			)
		}
	}
	Footer.PropTypes = {
		website: PropTypes.string,
		made: PropTypes.string
	};
	Footer.defaultProps = {
		website: 'The Company',
		made: 2017
	};





	//Main App component
	class App extends Component{

		//ES6: we are setting Default state
		constructor(props){
			super(props);
			this.state = {
				page: 'home'
			}
		}

		//ES6 autobinding functions
		handleHomeClick()  {
			//State is changed here i.e. setting to the home state
			this.setState({
				page: 'home'
			})
		};

		handleAboutClick() {
			this.setState({
				page: 'about'
			})
		}

		render(){

			if (this.state.page == 'home'){
				var jumbotron = <Jumbotron />
				var page = <HomePage />
			}
			else if (this.state.page = 'about'){
				var jumbotron = '';
				var page = <AboutPage />;
			}

			return(
				<div>
					<Navbar  
						color="dark"
						page={this.state.page}
						homeClick={this.handleHomeClick.bind(this)}//This is a callback function
						aboutClick={this.handleAboutClick.bind(this)}
					/>
					{jumbotron}
					{page}
					<Footer />
				</div>
			)
		}
	}




	export default App
















