import { CiInstagram } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { PiLinkedinLogo } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";
const Footer = () => {
  return (
    <footer>
     
      <ul>
       
        <a href="https://www.instagram.com/_.Shifanaabid" target="_blank" rel="noopener noreferrer" style={{alignItems:'center'}}>
        <CiInstagram  style={{width:'30px',height:'40px', marginRight:'1rem'}}/></a>

       <a href="tel:8157973633" target="_blank" rel="noopener noreferrer" style={{alignItems:'center'}}>
        <IoCallOutline style={{width:'30px',height:'40px',marginRight:'1rem'}} /></a>
       
        <a href="https://www.linkedin.com/in/Shifana Sherin" target="_blank" rel="noopener noreferrer" style={{alignItems:'center'}}>
        <PiLinkedinLogo style={{width:'30px',height:'40px',marginRight:'1rem'}} /></a>

         <a href="https://www.github.com/Shifana-ux" target="_blank" rel="noopener noreferrer" style={{alignItems:'center'}}>
        <VscGithubAlt  style={{width:'30px',height:'40px',marginRight:'1rem'}}/></a>
       
      </ul>
    </footer>
  );
};

export default Footer;
