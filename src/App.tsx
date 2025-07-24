import './App.css'
import React, { useState, useEffect } from 'react';
import Home from './Home.tsx'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 125); // adjust threshold as needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header${isScrolled ? ' scrolled' : ''}`}>
        <div className="site-titlex">
          Anuj K.
        </div>
        <nav>
          <a href= "#Home" className="nav-link">Home</a>
          <a href= "#Blog" className="nav-link">Blog</a>
          <a href= "#About" className="nav-link">About</a>
          <a href= "#Contact" className="nav-link">Contact</a>
        </nav>
      </header>
      <main style={{ padding: '2rem' }}>
        <div className= "Home" id = "Home">
          <Home />
        </div>
        <div className="Blog" id = "Blog">
          <h2>Latest Posts</h2>
          <p>
            <a href={import.meta.env.DEV ? 'http://localhost:4321/' : '/blog/'}>
              Visit the Blog
            </a>
          </p>
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