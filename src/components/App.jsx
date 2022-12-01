import React from "react";
import Header from "./Header";
import Bio from "./Bio";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

const App = () => {
    return <div>
        <Header />
        <div className="pattern-bg">
            <Bio />
            <Skills />
        </div>
        <Project />
        <Contact />
    </div>
}
export default App;