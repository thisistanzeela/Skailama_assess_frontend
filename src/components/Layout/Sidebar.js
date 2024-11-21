import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <img
          src="https://s3-alpha-sig.figma.com/img/81b2/4b70/8a15005c2a5cc5fa6c34a9a4190a7020?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fzPhwj~EsENCoagkqyNzGAlgEeWZ5ZV3dv0C1EkJqHWEbUE1CG~17jhGfW2B8yiV3lD2r2CMo98tAaocNV8rJRJyMo3ymqgx2W8R53TttVuWcxKicRaJfhJfOhcO8wWg8Oi9HpqXRG-OifHUbiF1kAxVNUtA53hYx6edcBGELXHjVsP-UHV2KKAIF-hLeY9k75rASTn2ukmyFtqeanwfi~MxRwij~SzgzxLnFLFBazQ7VkTx7Uq5lzB6GJn-WLGHunCKSyY4BgNfsMUS--xDN57P~3YYdEefLSLu9dVWG0GaI5mHc7ArNVhfRpDXo49-QZ~-x6JcaH0jLFdjnkyYqA__"
          alt="Logo"
          className="logo"
        />
        {/* <span className="brand-name">Ques.AI</span> */}
      </div>
      <div className="menu">
        <div className="menu-item active">
          <span className="menu-icon">+</span>
          <span className="menu-text">Add your Podcast(s)</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">✏️</span>
          <span className="menu-text">Create & Repurpose</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">📋</span>
          <span className="menu-text">Podcast Widget</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">⬆️</span>
          <span className="menu-text">Upgrade</span>
        </div>
      </div>
      <div className="menu-footer">
        <div className="menu-footer-item">
          <span className="menu-icon">⚙️</span>
          <span className="menu-text">Help</span>
        </div>
        <div className="user-profile">
          <img
            src="https://s3-alpha-sig.figma.com/img/0e1e/616a/3b337ff0d665812f62ca5c1e8e06838a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ReaKlF0UXFptXpzL9Y2V3VZP7WPtle0BknMOFAbSCcJCOFXmxeuWVkFjAXtHxBoI0Arf4FJFxqwmG7ig1gMuiKSOtqrQwR2CjmXrxtQMJR8uSW0EnvJG94AX2YZhZSBb53ILYwL0wKD16vGGxWCczapwge71kgW5ZZQqY~cSmVsCjuyAQvfHB6-pnHxXDYoL68h0Zd0EQeHS2Sqya9ih5TYub7WqFJAhH1hXoeGgo~tycJzslaeuiWhUoK5G0RZaA5rEIHz2tdEYEDzXLA8vMr4fNtvAj2-Nbs7U35GeQl-n2Hy9yEfrpe6v8QLI9dUE13JzgUch6QxYAZbNtC9BJw__"
            alt="User"
            className="user-image"
          />
          <div className="user-info">
            <span className="user-name">Username</span>
            <span className="user-email">username@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
