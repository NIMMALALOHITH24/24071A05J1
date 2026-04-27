import { Link } from 'react-router-dom';
import { MapPin, Clock, Building } from 'lucide-react';
import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="glass-card job-card">
      <div className="job-card-header">
        <div className="job-company-logo">
          <Building size={24} />
        </div>
        <div className="job-header-info">
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">{job.company}</p>
        </div>
      </div>
      
      <div className="job-details">
        <div className="job-detail-item">
          <MapPin size={16} />
          <span>{job.location}</span>
        </div>
        <div className="job-detail-item">
          <Clock size={16} />
          <span>{job.type}</span>
        </div>
      </div>
      
      <div className="job-tags">
        {job.tags.map((tag, index) => (
          <span key={index} className="badge">{tag}</span>
        ))}
      </div>
      
      <Link to={`/apply/${job.id}`} className="btn btn-primary btn-block job-apply-btn">
        Apply Now
      </Link>
    </div>
  );
};

export default JobCard;
