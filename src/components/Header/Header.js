import React from 'react';
import './Header.css';

const Header = ({ title, actions }) => {
  return (
    <header className='header'>
      <div className='header-left'>
        <img
          src='https://s3-alpha-sig.figma.com/img/81b2/4b70/8a15005c2a5cc5fa6c34a9a4190a7020?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fzPhwj~EsENCoagkqyNzGAlgEeWZ5ZV3dv0C1EkJqHWEbUE1CG~17jhGfW2B8yiV3lD2r2CMo98tAaocNV8rJRJyMo3ymqgx2W8R53TttVuWcxKicRaJfhJfOhcO8wWg8Oi9HpqXRG-OifHUbiF1kAxVNUtA53hYx6edcBGELXHjVsP-UHV2KKAIF-hLeY9k75rASTn2ukmyFtqeanwfi~MxRwij~SzgzxLnFLFBazQ7VkTx7Uq5lzB6GJn-WLGHunCKSyY4BgNfsMUS--xDN57P~3YYdEefLSLu9dVWG0GaI5mHc7ArNVhfRpDXo49-QZ~-x6JcaH0jLFdjnkyYqA__'
          alt='Header Logo'
          className='header-logo'
        />
        <h1 className='header-title'>{title}</h1>
      </div>
      <div className='header-actions'>
        {actions &&
          actions.map((action, index) => (
            <button key={index} className='header-btn' onClick={action.onClick}>
              {action.text}
            </button>
          ))}
        <span className='header-icon'>⚙️</span>
        <span className='header-icon'>🔔</span>
      </div>
    </header>
  );
};

export default Header;
