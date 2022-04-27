import React, {useState} from "react";
import Nav from './components/Navbar';
import { AiOutlineCloseCircle} from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi";



function App() {

  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    
    <div>
      {!isOpen ?

        <GiHamburgerMenu className="burger"
          onClick={handleNavClick} /> :
        <></>
      }
      {isOpen ?
        <>
          <Nav className="nav-mobile" extra={<AiOutlineCloseCircle
            className="close"
            onClick={handleNavClick} />}
          />
        </>
        : <></>}
      <Nav className="nav-large" />
     
    </div>
  );
}

export default App;
