import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); alert('Message sent!'); };

  return (
    <div className="contact-page">
      <h1 style={{ textAlign: 'center', margin: '2rem 0 1rem', fontWeight: 700 }}>Connect With GASA ASSIST</h1>
      <p style={{ textAlign: 'center', color: '#444', marginBottom: '2rem' }}>
        We're here to help streamline your operations and empower your business. Reach out to us with any inquiries or to discuss your virtual assistance needs.
      </p>
      <div className="container contact-main" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        <form onSubmit={handleSubmit} style={{ flex: 1, background: '#fff', borderRadius: '10px', padding: '1.5rem', boxShadow: '0 2px 8px #e0e4f6' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Send Us a Message</h2>
          <input name="name" placeholder="Your full name" value={form.name} onChange={handleChange} style={{ width: '100%', marginBottom: '0.7rem', padding: '0.5rem' }} required />
          <input name="email" placeholder="Your email address" value={form.email} onChange={handleChange} style={{ width: '100%', marginBottom: '0.7rem', padding: '0.5rem' }} required />
          <input name="subject" placeholder="What's your inquiry about?" value={form.subject} onChange={handleChange} style={{ width: '100%', marginBottom: '0.7rem', padding: '0.5rem' }} required />
          <textarea name="message" placeholder="Type your message here..." value={form.message} onChange={handleChange} style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem', minHeight: '80px' }} required />
          <button type="submit" style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.5rem 1.2rem', fontWeight: 500, width: '100%' }}>Send Message</button>
        </form>
        <div style={{ flex: 1, background: '#fff', borderRadius: '10px', padding: '1.5rem', boxShadow: '0 2px 8px #e0e4f6' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Why Choose GASA ASSIST?</h2>
          <p style={{ color: '#444', marginBottom: '1rem' }}>
            At GASA ASSIST, we are dedicated to providing unparalleled virtual assistance tailored to your unique business needs. Our commitment to efficiency, professionalism, and client satisfaction ensures you receive the support necessary to thrive.
          </p>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: '1rem 0 0.5rem' }}>Frequently Asked Questions</h3>
          <details style={{ marginBottom: '0.5rem' }}>
            <summary>How do your services work?</summary>
            <div style={{ color: '#444' }}>We provide flexible virtual assistance on an hourly or project basis. Simply outline your needs, and we’ll match you with a skilled assistant.</div>
          </details>
          <details style={{ marginBottom: '0.5rem' }}>
            <summary>What are your rates?</summary>
            <div style={{ color: '#444' }}>Contact us for a custom quote based on your requirements.</div>
          </details>
          <details>
            <summary>Can I get a custom service package?</summary>
            <div style={{ color: '#444' }}>Absolutely! We tailor our services to fit your business needs.</div>
          </details>
        </div>
      </div>
      <div className="container contact-details" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, background: '#fff', borderRadius: '10px', padding: '1.5rem', boxShadow: '0 2px 8px #e0e4f6' }}>
          <h3>Our Details</h3>
          <div style={{ margin: '0.5rem 0' }}><b>Phone:</b> <a href="tel:+15551234567">+1 (555) 123-4567</a></div>
          <div style={{ margin: '0.5rem 0' }}><b>Email:</b> <a href="mailto:info@gasaassist.com">info@gasaassist.com</a></div>
          <div style={{ margin: '0.5rem 0' }}><b>Address:</b> 123 Virtual Way, Suite 456, GASA City, AB 78901</div>
          <div style={{ margin: '0.5rem 0' }}><b>Operating Hours:</b> Mon-Fri, 9 AM - 5 PM EST</div>
        </div>
        <div style={{ flex: 1, background: '#fff', borderRadius: '10px', padding: '1.5rem', boxShadow: '0 2px 8px #e0e4f6' }}></div>
      </div>
    </div>
  );
}
