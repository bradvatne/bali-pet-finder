import React from "react";

export default function Header(): React.ReactElement {
  return (
    <>
      <header>
        <nav>
            <div className="header-logo">

            </div>
            <div className="header-links">

            </div>

        </nav>
      </header>
      <style jsx>
        {`
          nav {
            height: 4rem;
            width: 100%;
            display: flex;
            background: indigo;
            position: absolute;
            z-index: 999;
          }
        `}
      </style>
    </>
  );
}
