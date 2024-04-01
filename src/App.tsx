import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';

function App() {
    const name = "Kim Hsieh";
    const description1 = "Junior Student";
    const description2 = "Studying Computer Science and Information Engineering at NCU";
    const github = "https://github.com/SL3333PY";
    const linkedin = "https://www.linkedin.com/in/jin-ru-hsieh/";
    const aboutMe = "ya";
    const education = "NCU";
    const skills = "C++, Python";

    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={ 
                    <Home 
                        name = { name } 
                        description1 = { description1 } 
                        description2 = { description2 }
                        github = { github }
                        linkedin = { linkedin }
                        /> } />
                    <Route path="/about" element={ 
                    <About 
                        aboutMe = { aboutMe }
                        education = { education }
                        skills = { skills }
                    /> } />
                    <Route path="/projects" element={ <Projects /> } />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </div>
        </Router> 
    );
    
}

export default App;