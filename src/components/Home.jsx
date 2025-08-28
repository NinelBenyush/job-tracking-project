import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import s from "./Home.module.css";
import Login from "./Login";

export default function Home() {
  return (
    <>
      <Header />
      <section className={s.heroSection}>
        <aside className={s.heroContent}>
          <h1 className={s.heroTitle}>Track Your Career</h1>
          <p className={s.heroSubtitle}>Like a Pro</p>
          <p className={s.heroDescription}>
            Transform your job search with intelligent tracking, automated
            follow-ups, and data-driven insights that land you the perfect role.
          </p>
        </aside>
        <div className={s.heroLogin}>
          <Login />
        </div>
      </section>

      <section id="how-it-works" className={s.section}>
        <div className={s.sectionContainer}>
          <div className={s.sectionHeader}>
            <h2>How It Works</h2>
            <p>
              hree simple steps to transform your job search from chaos to
              clarity
            </p>
          </div>

          <div className={s.stepsGrid}>
            <div className={s.stepCard}>
              <div className={s.stepNumber}>1</div>
              <div className={s.stepIcon}>📝</div>
              <h3>Create Your Profile</h3>
              <p>Then you will have an access to your personal dashboard</p>
            </div>
            <div className={s.stepCard}>
              <div className={s.stepNumber}>2</div>
              <div className={s.stepIcon}>📊</div>
              <h3>Track Applications</h3>
              <p>YMonitor every application</p>
            </div>
            <div className={s.stepCard}>
              <div className={s.stepNumber}>3</div>
              <div className={s.stepIcon}>🚀</div>
              <h3>Land Your Dream Job</h3>
              <p>
                Get insights on response rates, optimize your approach, and
                celebrate your success
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={s.about}>
        <div className={s.aboutContent}>
          <div className={s.aboutGrid}>
            <div className={s.aboutText}>
              <h2>Why Choose Us</h2>
              <p>We understand the struggle and created the solution</p>
              <p>
                You can track all your job applications in one place <br></br>
                Stay organized, never miss a follow-up, and get insights to
                improve your job search strategy.
              </p>
              <div className={s.aboutHighlights}>
                <span className={s.highlightTag}>Smart Tracking</span>
                <span className={s.highlightTag}>Automated Reminders</span>
                <span className={s.highlightTag}>Progress Analytics</span>
                <span className={s.highlightTag}>Easy Dashboard</span>
              </div>
            </div>

            <div className={s.aboutStats}>
              <div className={s.statItem}>
                <span className={s.statNumber}>Automated alerts</span>
                <span className={s.statLabel}>
                  Set it and forget it - we handle the tedious tracking
                </span>
              </div>
              <div className={s.statItem}>
                <span className={s.statNumber}>
                  Charts & Analytics Dashboard
                </span>
                <span className={s.statLabel}>
                  Pie chart: % offers, rejections, waiting
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="start" className={s.contactSection}>
        <div className={s.sectionContainer}>
          <div className={s.sectionHeader}>
            <h2>Ready to Start?</h2>
            <p>Start your journey today</p>
          </div>
          <div className={s.contactContent}>
            <div className={s.contactCard}>
              <div className={s.contactDetails}>
                <h4>Get started n minutes</h4>
                <div className={s.startChecklist}>
                  <div className={s.checkItem}>
                    <div className={s.checkIcon}>✓</div>
                    <span className={s.checkText}>
                      Free forever plan available
                    </span>
                  </div>
                  <div className={s.checkItem}>
                    <div className={s.checkIcon}>✓</div>
                    <span className={s.checkText}>No credit card required</span>
                  </div>
                  <div className={s.checkItem}>
                    <div className={s.checkIcon}>✓</div>
                    <span className={s.checkText}>
                      Setup in under 5 minutes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
