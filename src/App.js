import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav'
import { Route, BrowserRouter } from 'react-router-dom'
import NewPostContainer from './components/Content/NewPost/NewPostContainer'
import ContentContainer from './components/Content/ContentContainer'

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrap'>
				<Header />
				<Nav />
				<div className='app-wrap-content'>
					<Route path='/blog'
						render={() => <ContentContainer
							store={props.store} />
						} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
