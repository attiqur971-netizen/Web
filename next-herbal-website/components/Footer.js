export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container">
        <div className="footer-col">
          <div className="logo">
            <span className="leaf-icon">🌿</span>
            <span className="logo-text" style={{ color: 'white' }}>Nature&apos;s Cure</span>
          </div>
          <p>Bringing you the finest herbal remedies under the expert guidance of Physician Dr. Hakeem Hamid Raza (FTJ).</p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#physician">About Physician</a></li>
            <li><a href="#products">Shop Products</a></li>
          </ul>
        </div>
        <div className="footer-col contact-info">
          <h3>Contact Us</h3>
          <p>📍 Vehari city</p>
          <p>📞 03196352084</p>
          <p>✉️ hamid13493@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nature&apos;s Cure by Dr. Hakeem Hamid Raza. All rights reserved.</p>
      </div>
    </footer>
  );
}
