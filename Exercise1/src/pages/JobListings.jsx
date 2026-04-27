import { useState } from 'react';
import { Search } from 'lucide-react';
import JobCard from '../components/JobCard';

const dummyJobs = [
  { id: 1, title: 'Junior Web Developer', company: 'TechStart', location: 'Remote', type: 'Full-time', tags: ['HTML', 'CSS', 'JavaScript'] },
  { id: 2, title: 'Graphic Designer', company: 'DesignCo', location: 'New York, NY', type: 'Full-time', tags: ['Photoshop', 'Illustrator'] },
  { id: 3, title: 'Data Entry Clerk', company: 'DataCorp', location: 'San Francisco, CA', type: 'Part-time', tags: ['Excel', 'Typing'] },
  { id: 4, title: 'Customer Support', company: 'HelpDesk', location: 'Austin, TX', type: 'Full-time', tags: ['Communication', 'Problem Solving'] },
  { id: 5, title: 'Social Media Assistant', company: 'SocialBuzz', location: 'Remote', type: 'Contract', tags: ['Facebook', 'Instagram'] },
  { id: 6, title: 'Content Writer', company: 'WriteNow', location: 'Chicago, IL', type: 'Freelance', tags: ['Writing', 'SEO'] },
];

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = dummyJobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container page-content animate-fade-in">
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1>Find Your Next Opportunity</h1>
        <p>Browse thousands of job openings from top companies.</p>
      </div>

      <div className="glass-card" style={{ marginBottom: '2rem' }}>
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="form-input"
            placeholder="Search jobs by title or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>
      </div>

      <div className="grid-cols-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }} className="glass-card">
            <h3>No jobs found</h3>
            <p>Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListings;
