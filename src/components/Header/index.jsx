import React from 'react';
import avatarImage from '../../assets/images/header/avatar.png'
import brazilFlag from  '../../assets/images/header/brasil.svg';
import usaFlag from  '../../assets/images/header/united-states.svg';
const Header = () => {
  return(
    <header>
        <div class="flags">
            {/* <!-- Flags downloaded from: https://www.flaticon.com/br/packs/countrys-flags --> */}
            <a href="../"><img src={brazilFlag} alt="Brazilian Portuguese" /></a>
            <a href="../"><img src={usaFlag} alt="English" /></a>
        </div>
        <div class="name-and-avatar">
            <h2>I'm Douglas Cajueiro</h2>

            <img className="avatar" src={avatarImage} alt="This is my cartoon version." />
        </div>
    </header>
  );
}

export default Header;