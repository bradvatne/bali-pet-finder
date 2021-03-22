export default function Nav() {
  return (
    <nav>
      <div className="brand">Bali Pet Finder</div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
      <div className="user">
        <a href="#">Sign in</a>
      </div>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: space-between;
            line-height: 2rem;
            background-color: white;
            margin: 0;
            padding: 0;
            width: 100%;
            padding: 1rem;
            box-shadow: -1px 4px 5px 0px rgba(0,0,0,0.2);
            position: fixed;
            z-index: 10;
          }

          li {
            margin-right: 1rem;
          }

          .brand {
            font-size: 2rem;
          }
          .links {
            display: flex;
          }
        `}
      </style>
    </nav>
  );
}
