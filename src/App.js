

import {  Button } from 'react-bootstrap';

import MySkills from './components/MySkills';
import About from './components/About';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="main">
      <section className='main2' id='main2'>
        <div className="head3">
        </div>
        <div className="container1 green borderXwidth" id='c1'>
          <input type="checkbox" id="toggle-menu"/>
          <label for="toggle-menu" className="menu-btn">&#9776;</label>
          <h1 id='port'>PORTFOLIO</h1>
          
          <a href='#main2'>HOME</a>
          <a href='#about'>ABOUT</a>
          <a href='#skill'>SKILLS</a>
          <a href='#project'>PROJECTS</a>
          <a href='#experience'>EXPERIENCE</a>
          <a href='#services'>SERVICES</a>
          <a href='#contact'>CONTACT</a>
        </div>

        <br />
        <HomePage/>
        <br />
        <br />
        <About/>
        <br />
        <br />
        <MySkills/>
        <br />
        <br />
        <Projects/>
        <br />
        <br />
        <Experience/>
        <br />
        <br />
        <Services/>
        <br />
        <br />
        <Contact/>

        <section className="footer">
  <div className="container"> 
    <div className="row justify-content-center"> 
      <div className="col-md-8"> 
        <hr />
        <p>
          © Copyright PhotoFolio. All Rights Reserved <br />
          Designed by Hrushikesh Wadekar
        </p>
      </div>
    </div>
  </div>
</section>
        {/* Button to scroll to top */}
        <a href="#main2" className="scroll-to-top1">
          <Button variant="outline-info" id='b1'>
            <box-icon name='up-arrow-alt'></box-icon>
          </Button>
        </a>
      </section>
    </div>
  );
}

export default App;
