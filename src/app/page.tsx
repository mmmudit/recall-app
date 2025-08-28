// app/page.tsx
import React from "react";

export default function Home() {
  return (
    <main>
      {/* ===== Navbar ===== */}
      <nav className="navbar container">
        <h2 className="logo">Recall</h2>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div>
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <section className="hero container">
        <div>
          <h1>
            Master Any Subject <span>50% Faster</span> with AI-Powered Learning
          </h1>
          <p>
            Transform your study materials into personalized summaries,
            adaptive quizzes, and spaced repetition schedules. Perfect for
            college students, high schoolers, and lifelong learners.
          </p>
          <button className="btn btn-primary">Start Free Trial</button>
          <button className="btn btn-outline" style={{ marginLeft: "1rem" }}>
            See How It Works
          </button>
        </div>
        <div>
          {/* Replace with Image later */}
          <div style={{
            width: "400px",
            height: "250px",
            background: "#e6ffe6",
            borderRadius: "1rem"
          }}>
            <p style={{ textAlign: "center", paddingTop: "100px" }}>📘 Illustration</p>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className="container">
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Powerful Features for Smarter Learning
        </h2>
        <div className="features">
          <div className="feature-card">📂 Multi-Format Input</div>
          <div className="feature-card">📝 Intelligent Summarization</div>
          <div className="feature-card">🎯 Adaptive Quizzing</div>
          <div className="feature-card">⏰ Spaced Repetition</div>
          <div className="feature-card">📊 Progress Tracking</div>
          <div className="feature-card">🤝 Collaborative Learning</div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className="container">
        <h2 style={{ textAlign: "center" }}>Simple, Transparent Pricing</h2>
        <div className="pricing">
          <div className="pricing-plan">
            <h3>Free Plan</h3>
            <p>$0/month</p>
            <ul>
              <li>5 documents per month</li>
              <li>Basic features</li>
              <li>Ad-supported</li>
            </ul>
            <button className="btn btn-outline">Get Started</button>
          </div>
          <div className="pricing-plan highlight">
            <h3>Student Plan</h3>
            <p>$4.99/month</p>
            <ul>
              <li>Unlimited documents</li>
              <li>All features included</li>
              <li>Ad-free experience</li>
            </ul>
            <button className="btn btn-primary">Start Free Trial</button>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="container">
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Frequently Asked Questions
        </h2>
        <div className="faq-item">
          <h4>How does AI summarization work?</h4>
          <p>
            Our AI analyzes your content and creates concise summaries while
            preserving key concepts and important details.
          </p>
        </div>
        <div className="faq-item">
          <h4>What file formats are supported?</h4>
          <p>
            PDFs, Word documents, text files, videos, and web links for
            comprehensive learning material processing.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is my study data secure?</h4>
          <p>
            Yes, we use enterprise-grade encryption and never share your
            personal study materials with third parties.
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 Recall. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
