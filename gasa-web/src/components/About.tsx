export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero" style={{ background: '#f6f8fc', padding: '2rem 0', borderRadius: '12px', margin: '2rem 0' }}>
        <div className="container about-hero-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Empowering Your Business, One Task at a Time</h1>
            <p style={{ fontSize: '1.1rem', color: '#444' }}>Your dedicated partner for seamless operations and strategic growth.</p>
          </div>
          <img src="https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg" alt="Team working together" style={{ width: '320px', borderRadius: '12px' }} />
        </div>
      </section>
      <div className="container about-main" style={{ display: 'flex', gap: '3rem', marginTop: '2rem' }}>
        <section style={{ flex: 1 }}>
          <h2>Our Mission</h2>
          <p>At GASA ASSIST, our mission is to empower entrepreneurs and businesses by providing exceptional virtual assistance services. We are dedicated to streamlining operations, enhancing productivity, and supporting growth, allowing our clients to focus on their core competencies and achieve their strategic goals. We believe in building lasting partnerships based on trust, efficiency, and a deep understanding of our clients' unique needs.</p>
          <h3>Core Values</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>✔️ <b>Excellence</b>: Commitment to delivering the highest quality in every task.</li>
            <li>✔️ <b>Integrity</b>: Operating with honesty, transparency, and ethical conduct.</li>
            <li>✔️ <b>Collaboration</b>: Working closely with clients as an extension of their team.</li>
            <li>✔️ <b>Innovation</b>: Continuously seeking better, more efficient solutions.</li>
            <li>✔️ <b>Client-Centricity</b>: Prioritizing client success and satisfaction above all else.</li>
          </ul>
        </section>
        <section style={{ flex: 1 }}>
          <h2>Meet Our Team</h2>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="team-card" style={{ background: '#fff', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Alice Johnson" style={{ width: '80px', borderRadius: '50%' }} />
              <h4>Alice Johnson</h4>
              <div style={{ fontSize: '0.95rem', color: '#666' }}>CEO & Founder</div>
              <p style={{ fontSize: '0.95rem' }}>Alice founded GASA ASSIST with a vision to revolutionize how businesses manage their administrative burdens, bringing over 15 years of experience in executive support.</p>
            </div>
            <div className="team-card" style={{ background: '#fff', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chen" style={{ width: '80px', borderRadius: '50%' }} />
              <h4>Michael Chen</h4>
              <div style={{ fontSize: '0.95rem', color: '#666' }}>Head of Operations</div>
              <p style={{ fontSize: '0.95rem' }}>Michael ensures our services run seamlessly, leveraging his extensive background in project management and process optimization.</p>
            </div>
            <div className="team-card" style={{ background: '#fff', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sophia Rodriguez" style={{ width: '80px', borderRadius: '50%' }} />
              <h4>Sophia Rodriguez</h4>
              <div style={{ fontSize: '0.95rem', color: '#666' }}>Client Relations Manager</div>
              <p style={{ fontSize: '0.95rem' }}>Sophia is dedicated to building strong client relationships, ensuring every partnership is productive and mutually beneficial.</p>
            </div>
            <div className="team-card" style={{ background: '#fff', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="David Lee" style={{ width: '80px', borderRadius: '50%' }} />
              <h4>David Lee</h4>
              <div style={{ fontSize: '0.95rem', color: '#666' }}>Lead Virtual Assistant</div>
              <p style={{ fontSize: '0.95rem' }}>David's meticulous attention to detail and proactive approach make him an invaluable asset to our clients, specializing in complex administrative tasks.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
