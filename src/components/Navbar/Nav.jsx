import React from 'react';
import css from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className={css.nav}>
			<div><NavLink to='/users' activeClassName={css.active}>Users</NavLink></div>
			<div><NavLink to='/blog' activeClassName={css.active}>Blog</NavLink></div>
			<div><NavLink to='/smth' activeClassName={css.active}>smth</NavLink></div>
		</nav>
	);
}

export default Nav