export type SeverityLevel='Low'|'Medium'|'High';

export interface Incident{
    id:number;
    title:string;
    description:string;
    severity:SeverityLevel;
    reported_at:string;
}

export const mockIncidents: Incident[] = [
    {
      "id": 1,
      "title": "Biased Hiring Algorithm",
      "description": "AI resume screener downgraded applicants from historically Black colleges due to biased training data.",
      "severity": "High",
      "reported_at": "2025-03-15T10:00:00Z"
    },
    {
      "id": 2,
      "title": "LLM Hallucinates Legal Advice",
      "description": "Chatbot falsely cited non-existent case law, leading a user to file an incorrect legal motion.",
      "severity": "High",
      "reported_at": "2025-04-01T14:30:00Z"
    },
    {
      "id": 3,
      "title": "Chatbot Exposes Payment Data",
      "description": "Customer support chatbot leaked partial credit card numbers due to a prompt injection attack.",
      "severity": "High",
      "reported_at": "2025-03-20T09:15:00Z"
    },
    {
      "id": 4,
      "title": "Autonomous Taxi Runs Red Light",
      "description": "Self-driving car misinterpreted a faded traffic signal, resulting in a near-miss accident.",
      "severity": "High",
      "reported_at": "2025-04-05T07:45:00Z"
    },
    {
      "id": 5,
      "title": "Deepfake CEO Scam",
      "description": "Fraudsters used AI-generated voice cloning to impersonate a CEO and authorize fraudulent transfers.",
      "severity": "High",
      "reported_at": "2025-03-28T16:20:00Z"
    },
    {
      "id": 6,
      "title": "AI-Graded Exams Show Racial Bias",
      "description": "Automated essay scoring system gave lower grades to non-native English speakers.",
      "severity": "Medium",
      "reported_at": "2025-04-10T11:10:00Z"
    },
    {
      "id": 7,
      "title": "Chatbot Encourages Self-Harm",
      "description": "Mental health chatbot suggested harmful coping mechanisms to vulnerable users.",
      "severity": "High",
      "reported_at": "2025-03-22T13:50:00Z"
    },
    {
      "id": 8,
      "title": "Facial Recognition False Arrest",
      "description": "Man wrongly detained after AI misidentified him from grainy surveillance footage.",
      "severity": "High",
      "reported_at": "2025-04-08T09:30:00Z"
    },
    {
      "id": 9,
      "title": "AI-Generated Fake News Surge",
      "description": "Disinformation network used LLMs to mass-produce convincing fake news articles.",
      "severity": "High",
      "reported_at": "2025-03-17T18:15:00Z"
    },
    {
      "id": 10,
      "title": "Robot Chef Cuts Customer",
      "description": "Kitchen automation arm malfunctioned due to a vision system error, causing minor injury.",
      "severity": "Medium",
      "reported_at": "2025-04-12T14:00:00Z"
    },
    {
      "id": 11,
      "title": "AI Misses Cancer Diagnosis",
      "description": "Radiology AI overlooked early-stage tumors in patients with rare conditions.",
      "severity": "High",
      "reported_at": "2025-04-03T10:45:00Z"
    },
    {
      "id": 12,
      "title": "Algorithmic Trading Flash Crash",
      "description": "AI stock trader triggered a market plunge by misinterpreting a news headline.",
      "severity": "High",
      "reported_at": "2025-03-25T12:20:00Z"
    },
    {
      "id": 13,
      "title": "Voice Assistant Wakes ICU Patients",
      "description": "Smart speakers in a hospital responded to ambient noises, disrupting patient rest.",
      "severity": "Low",
      "reported_at": "2025-04-14T08:05:00Z"
    },
    {
      "id": 14,
      "title": "AI Copyright Infringement",
      "description": "Image generator produced near-identical copies of copyrighted artwork.",
      "severity": "Medium",
      "reported_at": "2025-04-07T15:40:00Z"
    },
    {
      "id": 15,
      "title": "Chatbot Retains Deleted Data",
      "description": "Users' deleted conversations remained in training datasets despite GDPR requests.",
      "severity": "High",
      "reported_at": "2025-03-30T11:55:00Z"
    },
    {
      "id": 16,
      "title": "Autonomous Drone Collision",
      "description": "Delivery drone crashed into a tree due to a sensor blind spot.",
      "severity": "Medium",
      "reported_at": "2025-04-18T16:10:00Z"
    },
    {
      "id": 17,
      "title": "AI Denies Legitimate Insurance Claims",
      "description": "Claims system flagged 40% of valid claims as 'suspicious' without explanation.",
      "severity": "High",
      "reported_at": "2025-04-22T13:25:00Z"
    },
    {
      "id": 18,
      "title": "GPT Jailbreak Leaks Training Data",
      "description": "Adversarial prompt extracted fragments of private emails from model's training set.",
      "severity": "High",
      "reported_at": "2025-03-19T14:50:00Z"
    },
    {
      "id": 19,
      "title": "AI Suggests Illegal Actions",
      "description": "Business advisor chatbot recommended tax evasion strategies when prompted subtly.",
      "severity": "High",
      "reported_at": "2025-04-09T10:15:00Z"
    },
    {
      "id": 20,
      "title": "Fake AI-Generated Customer Service",
      "description": "Scammers cloned a company's chatbot to steal login credentials.",
      "severity": "High",
      "reported_at": "2025-04-25T09:45:00Z"
    },
    {
      "id": 21,
      "title": "AI Moderator Bans Activists",
      "description": "Content moderation system disproportionately silenced political dissidents.",
      "severity": "Medium",
      "reported_at": "2025-03-27T12:30:00Z"
    },
    {
      "id": 22,
      "title": "Autonomous Forklift Damage",
      "description": "Warehouse robot dropped pallets due to weight sensor miscalibration.",
      "severity": "Low",
      "reported_at": "2025-04-16T17:20:00Z"
    },
    {
      "id": 23,
      "title": "Predictive Policing Feedback Loop",
      "description": "Crime prediction AI caused over-policing in areas it flagged, creating false trends.",
      "severity": "High",
      "reported_at": "2025-03-23T15:55:00Z",
    },
    {
      "id": 24,
      "title": "AI-Graded Job Interviews",
      "description": "Video interview analyzer penalized candidates with speech impediments.",
      "severity": "High",
      "reported_at": "2025-04-11T14:40:00Z",
    },
  ]