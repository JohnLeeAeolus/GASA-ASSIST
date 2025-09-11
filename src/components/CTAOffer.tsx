


function CTAOffer() {
  return (
    <section
      style={{
        background: '#f4f8fe',
        position: 'relative',
        padding: '3.5rem 0',
        minHeight: 520,
        borderTop: '2px solid #e0e4f6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2.5rem',
          padding: '0 2rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Left: Offer text and image */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 480 }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1976d2', marginBottom: 16 }}>
            Hire a GASA Virtual Assistant
          </h2>
          <p style={{ color: '#222', fontSize: '1.1rem', marginBottom: 12 }}>
            For a limited time, enjoy a credit while building your remote team with GASA ASSIST—trusted, ethical, and professional.
          </p>
          <div style={{ fontWeight: 600, color: '#1976d2', marginBottom: 24 }}>
            Scale with a human-first approach today.
          </div>
          <img
            src="/assets/cta-person.png"
            alt="Virtual Assistant"
            style={{
              width: '220px',
              borderRadius: '1.5rem',
              boxShadow: '0 4px 32px #1976d230',
              background: '#fff',
            }}
          />
        </div>
        {/* Right: Contact form */}
        <div
          style={{
            flex: 1,
            minWidth: 340,
            maxWidth: 440,
            background: '#fff',
            borderRadius: 32,
            boxShadow: '0 8px 32px #1976d230',
            border: '1.5px solid #e0e4f6',
            padding: '2.5rem 2.2rem',
            marginTop: 24,
            marginBottom: 24,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
          }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: 18, width: '100%', maxWidth: 400, alignSelf: 'center' }}>
            <div style={{ display: 'flex', gap: 12, width: '100%', flexWrap: 'wrap' }}>
              <input required placeholder="First name *" style={{ ...inputStyle, minWidth: 0 }} />
              <input required placeholder="Last name *" style={{ ...inputStyle, minWidth: 0 }} />
            </div>
            <input required type="email" placeholder="Email *" style={inputStyle} />
            <input required type="tel" placeholder="Phone number *" style={inputStyle} />
            <input placeholder="Company Name *" style={inputStyle} />
            <div style={{ fontWeight: 500, color: '#1976d2', fontSize: '1.05rem', marginTop: 8 }}>
              What level of support are you looking for? *
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 8 }}>
              <label style={radioLabel}>
                <input type="radio" name="support" required /> I'm looking for full-time support
              </label>
              <label style={radioLabel}>
                <input type="radio" name="support" /> I'm looking for part-time support
              </label>
              <label style={radioLabel}>
                <input type="radio" name="support" /> I'm actually looking for a job
              </label>
            </div>
            <button type="submit" style={{ ...submitBtnStyle, width: '100%' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTAOffer;

const inputStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  padding: '0.7rem 1rem',
  borderRadius: 8,
  border: '1.5px solid #d0d7e6',
  fontSize: '1.08rem',
  marginBottom: 0,
  background: '#f8fafc',
  color: '#222',
  boxSizing: 'border-box',
};

const radioLabel: React.CSSProperties = {
  fontWeight: 400,
  color: '#222',
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

const submitBtnStyle: React.CSSProperties = {
  background: '#1976d2',
  color: '#fff',
  fontWeight: 700,
  fontSize: '1.1rem',
  border: 'none',
  borderRadius: 8,
  padding: '0.9rem 0',
  marginTop: 8,
  boxShadow: '0 2px 8px #00b6b040',
  cursor: 'pointer',
  transition: 'background 0.2s',
};
