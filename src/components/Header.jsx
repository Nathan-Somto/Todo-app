import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';
function Header ({darkToggler, Bg,dark}) 
{
    return ( 
 <header className = {`bg  ${Bg}`}>
  <h1 className='text-white'>Todo</h1>
 <img  alt ="theme toggler"  onClick={darkToggler} src ={dark ? sun : moon  }/> 

</header>
     );
}

export default Header;