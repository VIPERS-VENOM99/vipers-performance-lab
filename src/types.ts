export interface AuditFormState {
  trainingHistory: string;
  egoAudit: 'YES' | 'NO' | null;
  telemetryAdherence: 'CONFIRM' | 'DECLINE' | null;
  revocableAdmission: 'I ACCEPT' | 'I DECLINE' | null;
  candidateCodename?: string;
  candidateEmail?: string;
}

export interface SubmissionResult {
  dossierId: string;
  timestamp: string;
  status: 'PENDING_EVALUATION' | 'REJECTED_DISQUALIFIED';
  reason?: string;
}
