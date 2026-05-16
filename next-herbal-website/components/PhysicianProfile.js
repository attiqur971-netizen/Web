import Image from 'next/image';

export default function PhysicianProfile() {
  return (
    <section id="physician" className="physician-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Expert Care & Wisdom</h2>
          <div className="divider"></div>
        </div>
        <div className="profile-grid">
          <div className="profile-image reveal-left">
            <div className="image-frame">
              {/* Real Physician Image */}
              <img src="/hamid.jpg" alt="Physician Dr. Hakeem Hamid Raza" />
              <div className="qualification-badge">
                <strong>FTJ</strong>
                <span>Tib Council Islamabad, Pakistan</span>
              </div>
            </div>
          </div>
          <div className="profile-content reveal-right">
            <h3>Dr. Hakeem Hamid Raza</h3>
            <p className="credentials">Certified Herbal Physician (FTJ)</p>
            <p className="bio">With years of rigorous study and practical experience under the Tib Council of Islamabad, Pakistan, Dr. Hakeem Hamid Raza brings authentic Unani-Tibb (Graeco-Arab) medicine to modern wellness.</p>
            <p className="bio">His approach focuses on diagnosing the root cause of ailments and prescribing holistic, 100% natural herbal treatments that work in harmony with your body to promote lasting health.</p>
            
            <ul className="expertise-list">
              <li><span className="check">✓</span> Holistic Health Consultations</li>
              <li><span className="check">✓</span> Custom Herbal Formulations</li>
              <li><span className="check">✓</span> Dietary & Lifestyle Guidance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
