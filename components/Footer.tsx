export default function Footer() {
  return (
    <footer>
      <div>
        <h4>About</h4>
        <a href="#">Mission</a>
        <a href="#">Volunteer</a>
        <a href="#">Donate</a>
      </div>
      <div>
        <h4>Adopt an animal</h4>
        <a href="#">Adopt a dog</a>
        <a href="#">Adopt a cat</a>
        <a href="#">Adopt a unique pet</a>
      </div>
      <div>
        <h4>Put up an animal for adoption</h4>
        <a href="#">Post a dog for adoption</a>
        <a href="#">Post a cat for adoption</a>
        <a href="#">Post a unique pet</a>
      </div>
      <div>
        <h4>Blog</h4>
        <a href="#">Articles about pet care</a>
        <a href="#">Articles about this website's construction</a>
        <a href="#">Articles about Bali</a>
      </div>
      <div
        style={{
          display: "flex",
          flexBasis: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <p>© 2021 Bali Pet Finder, Inc. Privacy | Terms and Conditions</p>
        <p>English Facebook Instagram Twitter</p>
      </div>
    </footer>
  );
}
