import { Link } from 'react-router-dom';
import { RiContactsLine } from "react-icons/ri";

const Header = () => {
  return (
    <header style={{
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px', 
      backgroundColor: '#d3e9e7',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RiContactsLine style={{ width: '40px', height: '40px', marginRight: '1rem',color:'#5e7949' }} />
        <h1 style={{ margin: 0 ,color:'#5e7949'}}>My Portfolio</h1>
      </div>

      <nav>
        <ul style={{ 
          listStyleType:'none', 
          padding: 0, 
          margin: 0, 
          display:'flex' 
        }}>
          <li style={{ marginRight: '20px' }}><Link to="/" style={{ textDecoration: 'none', color: '#5e7949', fontWeight: 'bold' }}>Home</Link></li>
          <li style={{ marginRight: '20px' }}><Link to="/about" style={{ textDecoration: 'none', color: '#5e7949', fontWeight: 'bold' }}>About</Link></li>
          <li style={{ marginRight: '20px' }}><Link to="/projects" style={{ textDecoration: 'none', color: '#5e7949', fontWeight: 'bold' }}>Projects</Link></li>
          <li style={{ marginRight: '20px' }}><Link to="/resume" style={{ textDecoration: 'none', color: '#5e7949', fontWeight: 'bold' }}>Resume</Link></li>
          <li><Link to="/contact" style={{ textDecoration: 'none', color: '#5e7949', fontWeight: 'bold' }}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;








// import { Link } from 'react-router-dom';
// import { RiContactsLine } from "react-icons/ri";

// const Header = () => {
//   return (
//     <header>
       
//         <h1>My Portfolio</h1>
//         <span>
//         <RiContactsLine  style={{width:'30px',height:'40px',marginRight:'1rem',alignItems:'revert'}}/>
//         </span>
       
        
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/projects">Projects</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
