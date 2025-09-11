import { useState } from 'react';

const faqs = [
  {
    q: 'What is GASA ASSIST?',
    a: 'GASA ASSIST provides professional virtual assistant services for businesses and busy professionals, helping you with administrative, scheduling, and project coordination tasks.'
  },
  {
    q: 'How do I get started with a virtual assistant?',
    a: 'Simply contact us through our website and we’ll guide you through a quick onboarding process to match you with the right assistant.'
  },
  {
    q: 'What types of tasks can your virtual assistants handle?',
    a: 'Our VAs can help with email management, calendar scheduling, travel arrangements, research, customer support, and more.'
  },
  {
    q: 'Can I choose the hours my assistant works?',
    a: 'Yes! Our assistants are flexible and can work according to your preferred schedule and timezone.'
  },
  {
    q: 'Is my information secure with GASA ASSIST?',
    a: 'Absolutely. We take data privacy seriously and use secure tools to protect your information.'
  },
  {
    q: 'How do you ensure quality and reliability?',
    a: 'All our assistants are carefully vetted, trained, and monitored to ensure high-quality service.'
  },
  {
    q: 'What if I need to change my assistant?',
    a: 'If you’re not satisfied, we’ll work with you to find a better fit at no extra cost.'
  },
  {
    q: 'How do I communicate with my assistant?',
    a: 'You can communicate via email, chat, or video calls—whatever works best for you.'
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing depends on your needs and the number of hours required. Contact us for a custom quote.'
  },
  {
    q: 'Can I scale up or down as my needs change?',
    a: 'Yes, our services are flexible and can be adjusted as your business grows or your needs change.'
  },
  {
    q: 'Do you offer support for specialized tasks?',
    a: 'We have VAs with a variety of backgrounds and can match you with someone who fits your requirements.'
  },
  {
    q: 'How quickly can I get started?',
    a: 'Most clients are matched with a VA and up and running within a few days.'
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ maxWidth: 1100, margin: '4rem auto', padding: '0 1.5rem' }}>
      <h2 style={{ fontSize: '2.4rem', fontWeight: 400, marginBottom: 8 }}>
        Frequently Asked <span style={{ color: '#1976d2', fontWeight: 700 }}>Questions</span>
      </h2>
      <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 32 }}>
        If you can’t find the answer you’re looking for, simply <a href="#contact" style={{ color: '#1976d2', fontWeight: 600, textDecoration: 'none' }}>contact us</a> and one of our friendly staff members will be in touch with you within 1 business day.
      </p>
      <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
        {[0, 1].map(col => (
          <div key={col} style={{ flex: 1, minWidth: 320 }}>
            {faqs.filter((_, i) => i % 2 === col).map((faq, idx) => {
              const i = col + idx * 2;
              return (
                <div key={faq.q} style={{ borderBottom: '1.5px solid #e0e4f6', padding: '1.1rem 0', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={() => setOpen(open === i ? null : i)}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: open === i ? 8 : 0 }}>{faq.q}</div>
                    {open === i && <div style={{ color: '#444', fontWeight: 400, fontSize: '1.05rem', marginTop: 4 }}>{faq.a}</div>}
                  </div>
                  <span style={{ fontSize: 28, color: '#1976d2', fontWeight: 700, marginLeft: 16, userSelect: 'none', transition: 'transform 0.2s', transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <a href="#faqs" style={{ display: 'inline-block', background: '#fff', color: '#222', border: '2.5px solid #ffc43a', borderRadius: 32, fontWeight: 700, fontSize: '1.15rem', padding: '0.7rem 2.2rem', boxShadow: '0 2px 8px #ffc43a30', textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
          onMouseOver={e => { e.currentTarget.style.background = '#ffc43a'; e.currentTarget.style.color = '#222'; }}
          onMouseOut={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#222'; }}
        >VIEW MORE FAQs</a>
      </div>
    </section>
  );
}
