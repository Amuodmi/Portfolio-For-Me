import React, { useEffect } from "react";
import { NameSVG } from "./namesvg";

function Nav({ currentPage, handlePageChange }) {
	return (
		<header>
			<nav>
				<NameSVG />
				<a href="#projects">Projects</a>

				<a href="#skills">Skills</a>

				<a href="#resume">Resume</a>

				<a href="#connect">Connect With Me</a>
			</nav>
		</header>
	);
}

export default Nav;
