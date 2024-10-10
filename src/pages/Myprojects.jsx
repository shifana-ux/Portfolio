import React from 'react';

const Projects = () => {
  return (
    <div>
    <section style={{color: '#5e7949',textAlign:'flex-start',display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
      <h1 >My Projects</h1>
      <div className="projects">
        <div className="project">
         <li>To Do App</li>
          <a href="https://shifana-ux.github.io/Todoapp/" target="_blank" rel="noopener noreferrer">To do app</a> 
        </div>
        <div className="project">
        <li>Portfolio</li>
        </div>
      </div>
     </section>
    
     </div>
   
  );
};

export default Projects;
