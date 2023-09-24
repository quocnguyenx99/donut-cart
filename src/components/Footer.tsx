function Footer() {
  const year: number = new Date().getFullYear();
  const pageContent = <p>© Donut Cart {year}. Make by Quoc Nguyen.</p>;
  const content = <footer className="footer">{pageContent}</footer>;
  return content;
}

export default Footer;
