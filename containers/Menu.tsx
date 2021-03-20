import { Nav, Options } from "../components";

export default function Menu() {
  return (
    <div className="menu-wrapper">
      <Nav />
      <div className="menu">
        <p>100+ Pets for Adoption</p>
        <h1>Pets for Adoption in Kuta</h1>
        <Options />
        <p>Review our advice for adopting pets here.</p>
      </div>
      <style jsx>
        {`
          .menu-wrapper {
            flex-basis: 55%;
            padding: 1rem;
          }

          .menu {
            margin-top: 6rem;
          }
        `}
      </style>
    </div>
  );
}
