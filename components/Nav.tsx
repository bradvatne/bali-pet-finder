export default function Nav() {
  return (
    <nav>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="brand">Bali Pet Finder</div>
      <div className="social">
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Github</li>
        </ul>
      </div>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: space-between;
            line-height: 2rem;
          }

          .brand {
              font-size: 2rem;
          }
        `}
      </style>
    </nav>
  );
}
