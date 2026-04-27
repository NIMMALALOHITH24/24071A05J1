import { Send, MapPin, Mail } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container page-content animate-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1>Get in Touch</h1>
        <p>Have questions or need assistance? Our team is here to help.</p>
      </div>

      <div className="grid-cols-2">
        <div className="glass-card">
          <h2 style={{ marginBottom: '1.5rem' }}>Contact Information</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: 'var(--radius-md)', color: 'var(--primary)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Our Office</h3>
                <p style={{ margin: 0 }}>123 Main Street<br />Anytown, USA</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: 'var(--radius-md)', color: 'var(--primary)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Email</h3>
                <p style={{ margin: 0 }}>contact@jobboard.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h2 style={{ marginBottom: '1.5rem' }}>Send us a Message</h2>
          {submitted ? (
            <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <h3 style={{ color: 'var(--success)' }}>Message Sent!</h3>
              <p style={{ margin: 0 }}>We will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-input" required placeholder="Your name" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" required placeholder="your@email.com" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-input" required placeholder="Your message here..."></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-block">
                <Send size={18} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
