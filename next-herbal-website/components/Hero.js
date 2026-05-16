export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="badge fade-in">100% Natural Ingredients</span>
        <h1 className="slide-up">Discover the Healing Power of Nature</h1>
        <p className="slide-up-delay">Premium herbal remedies crafted with ancient wisdom and modern science to restore your body&apos;s natural balance.</p>
        <div className="hero-buttons slide-up-delay-2">
          <a href="#products" className="btn btn-primary">Explore Products</a>
          <a href="#physician" className="btn btn-outline">Meet the Physician</a>
        </div>
      </div>
    </section>
  );
}
