import './App.css'
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Blog from './components/Blog'
function App() {

  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <div className= "Home" id = "Home">
          <Home />
        </div>
        <div className="Blog" id="Blog">
          <Blog />
        </div>
        <div className="About" id="About">
          <h2>About Me</h2>
          <p>I'm a web developer with a passion for creating engaging user experiences.</p>
          <p>In my free time, I enjoy blogging about technology and design.</p>
        </div>
        <div className="Contact" id="Contact">
          <h2>Contact Me</h2>
          <p>If you'd like to get in touch, feel free to reach out via email or social media.</p>
        </div> 
      </main>
    </>
  );
}

export default App;
