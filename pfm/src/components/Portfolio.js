import React, { useState } from "react";
import Nav from "./Nav/nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";

export default function Portfolio() {
	const [currentPage, setCurrentPage] = useState("Home");

	const renderPage = () => {
		if (currentPage === "Home") {
			return <Home />;
		}
		if (currentPage === "About") {
			return <Home />;
		}
		if (currentPage === "Skills") {
			return <Skills />;
		}
		if (currentPage === "Resume") {
			return <Resume />;
		}
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			<Nav currentPage={currentPage} handlePageChange={handlePageChange} />
			{renderPage()}
			<Footer></Footer>
		</div>
	);
}
