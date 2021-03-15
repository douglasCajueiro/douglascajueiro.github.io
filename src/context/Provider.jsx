import React from  'react';
import MyContext from './MyContext';

const context = {
  language: 'english',
  theme: 'dark',

}
const Provider = ({children}) => {
  return (
    <MyContext.Provider value={context}>
      {children}
    </MyContext.Provider>

  );
}

export default Provider;