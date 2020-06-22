import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav'
import { Route, BrowserRouter } from 'react-router-dom'
import ContentContainer from './components/Content/ContentContainer'
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
	let state = props.store.getState()
	return (
		<BrowserRouter>
			<div className='app-wrap'>
				<Header />
				<Nav />
				<div className='app-wrap-content'>
					<Route path='/blog'
						render={() =>
							<ContentContainer
								store={props.store}
							/>
						}
					/>
					<Route path='/users'
						render={() =>
							<UsersContainer />
						}
					/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App
