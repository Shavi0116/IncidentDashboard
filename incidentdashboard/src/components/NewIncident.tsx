import { useState } from 'react';
import { SeverityLevel } from '../types';
import './newincident.css';
interface ReportFormProps {
  onSubmit: (incident: { title: string; description: string; severity: SeverityLevel }) => void;
}

export function NewIncident({ onSubmit }: ReportFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<SeverityLevel>('Medium');
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit({ title, description, severity });
    // Reset form
    setTitle('');
    setDescription('');
    setSeverity('Medium');
    setErrors({});
  };

  return (
    <div className="report-form-container">
      <h2>Report New Incident</h2>
      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-group">
          <label htmlFor="title">Title*</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description*</label>
          <textarea
            id="description"
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
                <span>{level}</span>
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit Incident
        </button>
      </form>
    </div>
  );
}