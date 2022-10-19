import React from "react";

function Nav({ currentPage, handlePageChange }) {
	return (
		<header>
			<nav>
				<h1 className="Name">
					<a href="#MichellePortfolio">Michelle</a>
				</h1>
				<a href="#projects">Projects</a>

				<a href="#skills">Skills</a>

				<a href="#resume">Resume</a>

				<a href="#connect">Connect With Me</a>
			</nav>
		</header>
	);
}

export default Nav;
