import { signIn, signOut, useSession } from "next-auth/client";
import { useState } from "react";

export default function Nav({ toggleLogin }) {
  const [session, loading] = useSession();

  return (
    <nav>
      <div className="brand">Bali Pet Finder</div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Mission</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Adopt</a>
          </li>
          <li>
            <a href="#">Add</a>
          </li>
          <li>
            <a href="#">Volunteer</a>
          </li>
        </ul>
      </div>
      <div className="user">
        {session ? (
          <a onClick={() => signOut()}>Sign Out</a>
        ) : (
          <a onClick={() => toggleLogin()}>Sign in</a>
        )}
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
            box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.2);
            position: fixed;
            z-index: 10;
            top: 0;
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
          a:hover {
            cursor: pointer;
          }
        `}
      </style>
    </nav>
  );
}
