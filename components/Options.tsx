export default function Options() {
  return (
    <ul>
      <li>All Pets</li>
      <li>For Adoption</li>
      <li>Kuta</li>
      <li>More Filters</li>
      <style jsx>
        {`
          ul {
            display: flex;
            gap: 2rem;
          }
        `}
      </style>
    </ul>
  );
}
