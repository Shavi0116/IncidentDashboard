import { useState } from 'react';
import { SeverityLevel } from '../types';
import './newincident.css';

interface NewIncidentProps {
  onSubmit: (incident: { title: string; description: string; severity: SeverityLevel }) => void;
}

export function NewIncident({ onSubmit }: NewIncidentProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<SeverityLevel>('Medium');
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit({ title, description, severity });
    setTitle('');
    setDescription('');
    setErrors({});
  };

  return (
    <div className="new-incident-form">
      <h2>Report New Incident</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title*</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>
        
        <div className="form-group">
          <label>Description*</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className={errors.description ? 'error' : ''}
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>
        
        <div className="form-group">
          <label>Severity</label>
          <div className="severity-options">
            {(['Low', 'Medium', 'High'] as SeverityLevel[]).map((level) => (
              <label key={level} className="severity-option">
                <input
                  type="radio"
                  name="severity"
                  value={level}
                  checked={severity === level}
                  onChange={() => setSeverity(level)}
                />
                <span className="radio-custom"></span>
                {level}
              </label>
            ))}
          </div>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}