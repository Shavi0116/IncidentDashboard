import { useState } from 'react';
import { SeverityLevel } from '../types';

interface ReportFormProps {
  onSubmit: (incident: { title: string; description: string; severity: SeverityLevel }) => void;
}

export function ReportForm({ onSubmit }: ReportFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<SeverityLevel>('Medium');
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    // Reset form and show success message
    setTitle('');
    setDescription('');
    setSeverity('Medium');
    setErrors({});
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="report-form-container">
      <h2>Report New Incident</h2>
      {isSubmitted && (
        <div className="success-message">
          Form submitted successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="report-form">
        {/* ... rest of your existing form JSX ... */}
      </form>
    </div>
  );
}