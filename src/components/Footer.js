import React from 'react';

function Footer() {


  // new Date().getFullYear();

  return ( 
    <footer className = "footer">
      <p className = "footer__text" > 
      {`© ${new Date().getFullYear()} Mesto Russia`}
      </p>
    </footer >
  );
}

export default Footer;