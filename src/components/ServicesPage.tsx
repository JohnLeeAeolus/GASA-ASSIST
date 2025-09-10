const services = [
  {
    icon: '📑',
    title: 'Administrative Support',
    description: 'Efficiently manage your emails, schedule appointments, organize documents, and handle data entry. We streamline your day-to-day operations, freeing up your time for core business activities.'
  },
  {
    icon: '📅',
    title: 'Calendar Management',
    description: 'Optimize your schedule, coordinate meetings, and send timely reminders. Our precise management ensures you never miss an important event or deadline, enhancing your productivity.'
  },
  {
    icon: '📣',
    title: 'Social Media Management',
    description: 'Develop and execute engaging social media strategies, create compelling content, and manage your online presence. Boost your brand’s visibility and connect with your audience.'
  },
  {
    icon: '📞',
    title: 'Customer Service',
    description: 'Provide professional and responsive customer support, handling inquiries, resolving issues, and ensuring client satisfaction. Build stronger relationships with your customer base.'
  },
  {
    icon: '📝',
    title: 'Content Creation',
    description: 'Craft high-quality blog posts, articles, website copy, and marketing materials. We produce engaging and SEO-friendly content tailored to your brand’s voice and objectives.'
  },
  {
    icon: '📊',
    title: 'Market Research',
    description: 'Conduct thorough market research to identify trends, analyze competitors, and gather valuable insights. Make informed business decisions supported by comprehensive data.'
  }
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section className="services-hero" style={{ background: '#f6f8fc', padding: '2rem 0', borderRadius: '12px', margin: '2rem 0' }}>
        <div className="container services-hero-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Our Services</h1>
            <p style={{ fontSize: '1.1rem', color: '#444' }}>Discover how GASA ASSIST can revolutionize your productivity and support your business growth with our comprehensive range of virtual assistance solutions.</p>
          </div>
          <img src="https://assets-global.website-files.com/63e3e7b2e0c1b2b7e2e1e1e1/63e3e7b2e0c1b2b7e2e1e1e2_services-illustration.svg" alt="Services Illustration" style={{ width: '320px', borderRadius: '12px' }} />
        </div>
      </section>
      <div className="container">
        <h2 style={{ textAlign: 'center', margin: '2rem 0 1.5rem', fontWeight: 700 }}>Comprehensive Solutions for Your Business Needs</h2>
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map((s) => (
            <div key={s.title} className="service-card" style={{ background: '#fff', borderRadius: '10px', padding: '1.5rem', boxShadow: '0 2px 8px #e0e4f6', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{s.icon}</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{s.title}</h3>
              <p style={{ fontSize: '1rem', color: '#444', margin: '0.5rem 0 1.5rem' }}>{s.description}</p>
              <button style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.5rem 1.2rem', fontWeight: 500, cursor: 'pointer', alignSelf: 'stretch' }}>Inquire Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
