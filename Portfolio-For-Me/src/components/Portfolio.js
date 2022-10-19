import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";

export default function Portfolio() {
	const [currentPage, setCurrentPage] = useState("Home");

	function renderPage() {
		if (currentPage === "Home") {
			return <Home />;
		}
		if (currentPage === "About") {
			return <About />;
		}
		if (currentPage === "Projects") {
			return <Projects />;
		}
		if (currentPage === "Skills") {
			return <Skills />;
		}
		if (currentPage === "Resume") {
			return <Resume />;
		}
		if (currentPage === "Contact") {
			return <Contact />;
		}
	}

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			<Nav currentPage={currentPage} handlePageChange={handlePageChange} />
			{renderPage()}
			<Footer></Footer>
		</div>
	);
}
