import { useState } from "react";
import { Incident } from "../types";
import "./incidentlist.css";

interface IncidentListProps {
  incidents: Incident[];
}

export function IncidentList({ incidents }: IncidentListProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="incident-list">
      {incidents.map((incident) => (
        <div key={incident.id} className="incident-card">
          <div className="incident-header">
            <h3>{incident.title}</h3>
            <div className="incident-meta">
              <span className={`severity ${incident.severity.toLowerCase()}`}>
                {incident.severity}
              </span>
              <span className="reported-date">
                {new Date(incident.reported_at).toLocaleDateString()}
              </span>
            </div>
          </div>
          <button
            onClick={() => toggleExpand(incident.id)}
            className="view-details-btn"
          >
            {expandedId === incident.id ? "Hide Details" : "View Details"}
          </button>
          {expandedId === incident.id && (
            <div className="incident-description">
              <p>{incident.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
