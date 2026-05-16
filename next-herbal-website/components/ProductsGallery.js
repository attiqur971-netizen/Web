export default function ProductsGallery() {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Our Premium Herbal Collection</h2>
          <p>Carefully selected and naturally sourced to bring you the best of herbal healing.</p>
          <div className="divider"></div>
        </div>
        
        <div className="products-grid">
          {/* Product 1 */}
          <div className="product-card reveal">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1564277287253-934c868e54cb?auto=format&fit=crop&q=80&w=600" alt="Immunity Booster Elixir" />
              <span className="product-tag">Bestseller</span>
            </div>
            <div className="product-info">
              <h4>Immunity Booster Elixir</h4>
              <p>A potent blend of herbs designed to strengthen your body&apos;s natural defense mechanisms.</p>
              <div className="product-footer">
                <span className="price">₨ 1,200</span>
                <button className="btn-small">Order Now</button>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="product-card reveal" style={{ transitionDelay: '100ms' }}>
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1611078519441-2b627df2a00c?auto=format&fit=crop&q=80&w=600" alt="Vitality Plus Capsules" />
            </div>
            <div className="product-info">
              <h4>Vitality Plus Capsules</h4>
              <p>Restore your energy levels and combat daily fatigue with this revitalizing natural supplement.</p>
              <div className="product-footer">
                <span className="price">₨ 1,500</span>
                <button className="btn-small">Order Now</button>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="product-card reveal" style={{ transitionDelay: '200ms' }}>
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1595981267035-7b04d84b4f1c?auto=format&fit=crop&q=80&w=600" alt="Digestive Ease Tea" />
            </div>
            <div className="product-info">
              <h4>Digestive Ease Tea</h4>
              <p>Soothe your stomach and improve digestion with our specially formulated herbal tea blend.</p>
              <div className="product-footer">
                <span className="price">₨ 850</span>
                <button className="btn-small">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
