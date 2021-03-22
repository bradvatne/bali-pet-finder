import { Options, Listing } from "../components";

export default function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="menu">
        <p>100+ Pets for Adoption</p>
        <h1>Pets for Adoption in Kuta</h1>
        <Options />
        <p>Review our advice for adopting pets here.</p>
        <div className="listings">
          <Listing/>
          <Listing/>
          <Listing/>
          <Listing/>
          <Listing/>
          <Listing/>
          <Listing/>
          <Listing/>
          <Listing/>
          <Listing/>
        </div>
      </div>
      <style jsx>
        {`
        .listings {
         
        }
          .menu-wrapper {
            padding: 1rem;
            flex-basis: 40%;
            position: relative;
            margin-top: 63px;
          }

          .menu {
            margin-top: 2rem;
           
          }

          .listings {
            margin-top: 2rem;
          }

          @media(max-width: 1140px) {
            .menu-wrapper {
              flex-basis: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}
