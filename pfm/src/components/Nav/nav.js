import React from "react";

function Nav({ currentPage, handlePageChange }) {
	return (
		<header>
			<h1>
				<a href="#MichellePortfolio">Michelle</a>
			</h1>

			<nav>
				<ul>
					<li>
						<a href="#funfacts">Fun Facts</a>
					</li>

					<li>
						<a href="#previouswork">Previous Work</a>
					</li>

					<li>
						<a href="#connect">Connect With Me</a>
					</li>

					<li>
						<a href=""></a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
