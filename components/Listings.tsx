function Listing() {
  return (
    <div className="listing-container">
      <div className="image">
        <p>Image</p>
      </div>
      <div className="info">
        <p className="preheading">This is the preheading</p>
        <p className="title">The title goes here.</p>
        <p className="features">Feature Another Third Fourth</p>
      </div>
      <style jsx>
        {`
          .listing-container {
            display: flex;
          }
          .image {
            width: 300px;
          }
        `}
      </style>
    </div>
  );
}

export default function Listings() {
  return (
    <div>
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />

    </div>
  );
}
