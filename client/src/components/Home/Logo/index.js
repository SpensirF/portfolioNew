import './index.scss';
import Spencer from '../../../assets/images/Spencer.png';
import { useRef } from 'react';


const Logo = () => {

    const bgRef = useRef();
    // const outlineLogoRef = useRef(); 
    const solidLogoRef = useRef(); 
    

    return (
        <div className="logo-container" ref={bgRef} >
            <img ref={solidLogoRef} className="solid-logo" src={Spencer} alt="S" />
            <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          
        </g>
      </svg>
        </div>
    )
}


export default Logo 