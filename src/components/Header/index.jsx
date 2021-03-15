import React, { useContext } from 'react';
import avatarImage from '../../assets/images/header/avatar.png'
import portuguese from  '../../assets/images/header/brasil.svg';
import english from  '../../assets/images/header/united-states.svg';
import MyContext from '../../context/MyContext';
const Header = () => {
  const {language} = useContext(MyContext);
  return(
    <header>
          {console.log(language)}
          <div class="flags">
              {/* <!-- Flags downloaded from: https://www.flaticon.com/br/packs/countrys-flags --> */}
              
                <img 
                  className={language === 'portuguese'
                    ? 'selected-language'
                    : ''
                  }
                  src={portuguese} 
                  alt="Brazilian Portuguese"
                />
              
              
                <img 
                  className={language === 'english'
                    ? 'selected-language'
                    : ''
                  }
                  src={english} 
                  alt="English" 
                />
          </div>
          <div class="name-and-avatar">
              <h2>I'm Douglas Cajueiro</h2>
              <img className="avatar" src={avatarImage} alt="This is my cartoon version." />
          </div>
        </header>
  );
}

export default Header;