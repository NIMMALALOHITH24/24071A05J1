import { useParams, useNavigate } from 'react-router-dom';
import { Upload, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const ApplyJob = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate('/jobs');
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="container page-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="glass-card animate-fade-in" style={{ textAlign: 'center', maxWidth: '400px' }}>
          <CheckCircle size={64} style={{ color: 'var(--success)', margin: '0 auto 1rem' }} />
          <h2>Application Submitted!</h2>
          <p>Thank you for applying. We will review your application and get back to you soon.</p>
          <p className="text-muted" style={{ fontSize: '0.875rem' }}>Redirecting to jobs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container page-content">
      <div className="glass-card animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Apply for Job #{jobId}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" required placeholder="Jane Doe" />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" required placeholder="jane@example.com" />
          </div>

          <div className="form-group">
            <label className="form-label">Resume / CV</label>
            <div className="form-input" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', borderStyle: 'dashed', cursor: 'pointer' }}>
              <Upload size={32} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
              <span>Click to upload or drag and drop</span>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>PDF, DOCX up to 5MB</span>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '2rem' }}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;
