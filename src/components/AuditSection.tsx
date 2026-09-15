import React, { useState } from 'react';
import { Terminal, ShieldAlert, CheckCircle2, AlertTriangle, RefreshCw, Send, Lock } from 'lucide-react';
import { AuditFormState, SubmissionResult } from '../types';

export const AuditSection: React.FC = () => {
  const [formData, setFormData] = useState<AuditFormState>({
    trainingHistory: '',
    egoAudit: null,
    telemetryAdherence: null,
    revocableAdmission: null,
    candidateCodename: '',
    candidateEmail: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleToggleEgo = (val: 'YES' | 'NO') => {
    setFormData((prev) => ({ ...prev, egoAudit: val }));
    setValidationError(null);
  };

  const handleToggleTelemetry = (val: 'CONFIRM' | 'DECLINE') => {
    setFormData((prev) => ({ ...prev, telemetryAdherence: val }));
    setValidationError(null);
  };

  const handleToggleAdmission = (val: 'I ACCEPT' | 'I DECLINE') => {
    setFormData((prev) => ({ ...prev, revocableAdmission: val }));
    setValidationError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.trainingHistory.trim()) {
      setValidationError('FIELD 01 REQUIRED: Documented operational history must be provided.');
      return;
    }

    if (formData.trainingHistory.trim().length < 40) {
      setValidationError('FIELD 01 INSUFFICIENT: Provide detailed training consistency and gap explanations.');
      return;
    }

    if (!formData.egoAudit) {
      setValidationError('FIELD 02 REQUIRED: Select YES or NO for Mechanical Humility.');
      return;
    }

    if (!formData.telemetryAdherence) {
      setValidationError('FIELD 03 REQUIRED: Select CONFIRM or DECLINE for Telemetry & Data Adherence.');
      return;
    }

    if (!formData.revocableAdmission) {
      setValidationError('FIELD 04 REQUIRED: Select I ACCEPT or I DECLINE for Revocable Admission Clause.');
      return;
    }

    setValidationError(null);
    setIsSubmitting(true);

    // Simulate forensic evaluation pipeline
    setTimeout(() => {
      setIsSubmitting(false);

      const isDisqualified =
        formData.egoAudit === 'NO' ||
        formData.telemetryAdherence === 'DECLINE' ||
        formData.revocableAdmission === 'I DECLINE';

      const randomHash = Math.floor(1000 + Math.random() * 9000);
      const dossierId = `VIPERS-C01-${randomHash}-EVAL`;

      if (isDisqualified) {
        setSubmissionResult({
          dossierId,
          timestamp: new Date().toISOString(),
          status: 'REJECTED_DISQUALIFIED',
          reason:
            'DOSSIER DISQUALIFIED: Candidate rejected non-negotiable clauses. Ego resistance or refusal of telemetry protocols violates The VIPERS Doctrine. Zero tolerance for half-measures.',
        });
      } else {
        setSubmissionResult({
          dossierId,
          timestamp: new Date().toISOString(),
          status: 'PENDING_EVALUATION',
        });
      }
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      trainingHistory: '',
      egoAudit: null,
      telemetryAdherence: null,
      revocableAdmission: null,
      candidateCodename: '',
      candidateEmail: '',
    });
    setSubmissionResult(null);
    setValidationError(null);
  };

  return (
    <section
      id="cohort-audit"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 bg-black relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080808] border border-neutral-800 text-neutral-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Terminal className="w-3.5 h-3.5 text-[#FFC400]" />
            <span>[ ADMISSION PROTOCOL // EVALUATION ONLY ]</span>
          </div>

          <h2
            id="audit-gate-headline"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase mb-5 leading-none"
          >
            APPLICATION BY EVALUATION. NOT ENTITLEMENT.
          </h2>

          <p
            id="audit-intake-disclaimer"
            className="text-base sm:text-lg text-neutral-300 border-l-2 border-[#FFC400] pl-4 py-1 leading-relaxed bg-[#080808]"
          >
            Cohort 01 is strictly capped at 12–15 practitioners. Access provides direct operational oversight from The Architects. Incomplete, evasive, or uncoachable applications will be discarded immediately.
          </p>
        </div>

        {/* Interactive Terminal Container */}
        <div
          id="audit-terminal-card"
          className="bg-[#080808] border border-neutral-800 p-6 sm:p-10 shadow-2xl shadow-black relative"
        >
          {/* Terminal Title Bar */}
          <div className="flex flex-wrap items-center justify-between pb-5 mb-8 border-b border-neutral-900 font-mono text-xs text-neutral-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400]" />
              <span className="text-white font-semibold uppercase tracking-wider">
                TERMINAL // COHORT-01-FORENSIC-AUDIT
              </span>
            </div>
            <div className="text-neutral-500 text-[11px]">
              SECURITY: ENCRYPTED // REVISION 2.4
            </div>
          </div>

          {/* Submission Result / Confirmation State */}
          {submissionResult ? (
            <div
              id="submission-status-readout"
              className={`p-6 sm:p-8 border font-mono space-y-5 ${
                submissionResult.status === 'PENDING_EVALUATION'
                  ? 'bg-black border-[#FFC400]/80 text-neutral-200'
                  : 'bg-black border-red-900/80 text-neutral-300'
              }`}
            >
              <div className="flex items-center gap-3">
                {submissionResult.status === 'PENDING_EVALUATION' ? (
                  <CheckCircle2 className="w-6 h-6 text-[#FFC400] shrink-0" />
                ) : (
                  <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
                )}
                <div>
                  <div className="text-xs uppercase text-neutral-500">
                    DOSSIER STATUS RECORD
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white tracking-wider">
                    {submissionResult.status === 'PENDING_EVALUATION'
                      ? 'DOSSIER TRANSMITTED // PENDING ARCHITECT EVALUATION'
                      : 'DOSSIER REJECTED // DISQUALIFIED AT THE GATE'}
                  </div>
                </div>
              </div>

              <div className="py-4 border-y border-neutral-900 space-y-2 text-xs text-neutral-400">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span>IDENTIFIER HASH:</span>
                  <span className="text-[#FFC400] font-bold">
                    {submissionResult.dossierId}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span>TIMESTAMP RECORD:</span>
                  <span className="text-neutral-300">{submissionResult.timestamp}</span>
                </div>
                {formData.candidateCodename && (
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span>APPLICANT CODENAME:</span>
                    <span className="text-neutral-300 uppercase">
                      {formData.candidateCodename}
                    </span>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span>COHORT QUOTA:</span>
                  <span className="text-neutral-300">12–15 PRACTITIONERS MAX</span>
                </div>
              </div>

              {submissionResult.status === 'PENDING_EVALUATION' ? (
                <div className="text-sm text-neutral-300 leading-relaxed bg-[#080808] p-4 border border-neutral-900">
                  <p className="mb-2">
                    <strong className="text-white font-mono">NEXT PROTOCOL:</strong> Your documented operational history and biomechanical baseline are being audited by Coach Sam, Coach Aziz, and Coach Mahmoud.
                  </p>
                  <p className="text-neutral-400 text-xs">
                    Shortlisted practitioners will be summoned for an uncompromised kinematic screen. Telemetry discipline will be audited immediately upon arrival.
                  </p>
                </div>
              ) : (
                <div className="text-sm text-red-400/90 leading-relaxed bg-red-950/20 p-4 border border-red-900/40">
                  {submissionResult.reason}
                </div>
              )}

              <div className="pt-2">
                <button
                  id="reset-audit-form-btn"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#080808] text-neutral-300 text-xs tracking-wider uppercase border border-neutral-800 hover:border-neutral-700 hover:text-white transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>INITIALIZE NEW EVALUATION</span>
                </button>
              </div>
            </div>
          ) : (
            /* Active Form State */
            <form id="vipers-candidate-audit-form" onSubmit={handleSubmit} className="space-y-8">
              {/* Optional Applicant Identifier Inputs for realism & completeness */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-neutral-900">
                <div>
                  <label
                    htmlFor="candidate-name-input"
                    className="block font-mono text-[11px] text-neutral-400 uppercase tracking-wider mb-2"
                  >
                    CANDIDATE CODENAME / IDENTIFIER:
                  </label>
                  <input
                    type="text"
                    id="candidate-name-input"
                    value={formData.candidateCodename}
                    onChange={(e) =>
                      setFormData({ ...formData, candidateCodename: e.target.value })
                    }
                    placeholder="e.g. PRACTITIONER-09 / JOHN D."
                    className="w-full bg-black border border-neutral-800 px-4 py-3 font-mono text-sm text-white placeholder-neutral-700 focus:outline-none focus:border-[#FFC400] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="candidate-email-input"
                    className="block font-mono text-[11px] text-neutral-400 uppercase tracking-wider mb-2"
                  >
                    COMMUNICATION CHANNEL (EMAIL):
                  </label>
                  <input
                    type="email"
                    id="candidate-email-input"
                    value={formData.candidateEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, candidateEmail: e.target.value })
                    }
                    placeholder="direct.dispatch@domain.com"
                    className="w-full bg-black border border-neutral-800 px-4 py-3 font-mono text-sm text-white placeholder-neutral-700 focus:outline-none focus:border-[#FFC400] transition-colors"
                  />
                </div>
              </div>

              {/* FIELD 01 // DOCUMENTED OPERATIONAL HISTORY */}
              <div id="field-01-container" className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <label
                    htmlFor="training-history-textarea"
                    className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2"
                  >
                    <span className="text-[#FFC400]">01 //</span>
                    <span>FIELD 01: DOCUMENTED OPERATIONAL HISTORY</span>
                  </label>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase">
                    {formData.trainingHistory.length} CHARACTERS LOGGED
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Detail your training frequency and core movement consistency over the past 12–24 months. If you had gaps exceeding 14 days, state the exact physiological or operational reason. (Beginner applications seeking habit-building are not accepted).
                </p>

                <textarea
                  id="training-history-textarea"
                  rows={4}
                  value={formData.trainingHistory}
                  onChange={(e) => {
                    setFormData({ ...formData, trainingHistory: e.target.value });
                    setValidationError(null);
                  }}
                  placeholder="Record training consistency, primary movement patterns, split cadence, and verified training age..."
                  className="w-full bg-black border border-neutral-800 p-4 font-mono text-sm text-white placeholder-neutral-700 focus:outline-none focus:border-[#FFC400] transition-colors leading-relaxed resize-y"
                />
              </div>

              {/* FIELD 02 // MECHANICAL HUMILITY (EGO AUDIT) */}
              <div id="field-02-container" className="space-y-3 pt-4 border-t border-neutral-900">
                <div className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="text-[#FFC400]">02 //</span>
                  <span>FIELD 02: MECHANICAL HUMILITY (EGO AUDIT)</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  If our kinematic movement audit determines your squat, hinge, or press mechanics are compromised, are you prepared to regress your working load by 50% for 4 weeks to rebuild joint integrity and active tension?
                </p>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <button
                    type="button"
                    id="toggle-ego-yes"
                    onClick={() => handleToggleEgo('YES')}
                    className={`py-3 px-4 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 border ${
                      formData.egoAudit === 'YES'
                        ? 'bg-[#FFC400] text-black border-[#FFC400] shadow-md shadow-[#FFC400]/20'
                        : 'bg-black text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
                    }`}
                  >
                    [ YES ]
                  </button>
                  <button
                    type="button"
                    id="toggle-ego-no"
                    onClick={() => handleToggleEgo('NO')}
                    className={`py-3 px-4 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 border ${
                      formData.egoAudit === 'NO'
                        ? 'bg-red-950 text-red-300 border-red-700'
                        : 'bg-black text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
                    }`}
                  >
                    [ NO ]
                  </button>
                </div>
              </div>

              {/* FIELD 03 // TELEMETRY & DATA ADHERENCE */}
              <div id="field-03-container" className="space-y-3 pt-4 border-t border-neutral-900">
                <div className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="text-[#FFC400]">03 //</span>
                  <span>FIELD 03: TELEMETRY & DATA ADHERENCE</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  VIPERS mandates recording primary working sets from standardized angles, logging exact load and tempo metrics, and executing protocols in silence. Are you prepared to operate under strict technical compliance with zero emotional hand-holding?
                </p>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <button
                    type="button"
                    id="toggle-telemetry-confirm"
                    onClick={() => handleToggleTelemetry('CONFIRM')}
                    className={`py-3 px-4 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 border ${
                      formData.telemetryAdherence === 'CONFIRM'
                        ? 'bg-[#FFC400] text-black border-[#FFC400] shadow-md shadow-[#FFC400]/20'
                        : 'bg-black text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
                    }`}
                  >
                    [ CONFIRM ]
                  </button>
                  <button
                    type="button"
                    id="toggle-telemetry-decline"
                    onClick={() => handleToggleTelemetry('DECLINE')}
                    className={`py-3 px-4 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 border ${
                      formData.telemetryAdherence === 'DECLINE'
                        ? 'bg-red-950 text-red-300 border-red-700'
                        : 'bg-black text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
                    }`}
                  >
                    [ DECLINE ]
                  </button>
                </div>
              </div>

              {/* FIELD 04 // THE REVOCABLE ADMISSION CLAUSE */}
              <div id="field-04-container" className="space-y-3 pt-4 border-t border-neutral-900">
                <div className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="text-[#FFC400]">04 //</span>
                  <span>FIELD 04: THE REVOCABLE ADMISSION CLAUSE</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Admission to Cohort 01 is a privilege. The Architects reserve the unilateral right to revoke access immediately if a practitioner introduces gym theater, ignores protocol, or violates The VIPERS Doctrine. Do you accept these terms?
                </p>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <button
                    type="button"
                    id="toggle-revocable-accept"
                    onClick={() => handleToggleAdmission('I ACCEPT')}
                    className={`py-3 px-4 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 border ${
                      formData.revocableAdmission === 'I ACCEPT'
                        ? 'bg-[#FFC400] text-black border-[#FFC400] shadow-md shadow-[#FFC400]/20'
                        : 'bg-black text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
                    }`}
                  >
                    [ I ACCEPT ]
                  </button>
                  <button
                    type="button"
                    id="toggle-revocable-decline"
                    onClick={() => handleToggleAdmission('I DECLINE')}
                    className={`py-3 px-4 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 border ${
                      formData.revocableAdmission === 'I DECLINE'
                        ? 'bg-red-950 text-red-300 border-red-700'
                        : 'bg-black text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
                    }`}
                  >
                    [ I DECLINE ]
                  </button>
                </div>
              </div>

              {/* Validation Feedback Warning */}
              {validationError && (
                <div
                  id="audit-validation-alert"
                  className="p-3 bg-red-950/40 border border-red-900/60 font-mono text-xs text-red-400 flex items-center gap-2"
                >
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Primary Gate Action Button */}
              <div className="pt-6 border-t border-neutral-900 space-y-4">
                <button
                  type="submit"
                  id="submit-dossier-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-[#FFC400] text-black font-mono font-bold text-sm tracking-widest uppercase border border-[#FFC400] hover:bg-white hover:border-white transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#FFC400]/10"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-black" />
                      <span>EVALUATING DOSSIER TELEMETRY...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 text-black" />
                      <span>[ SUBMIT DOSSIER // ENTER EVALUATION ]</span>
                    </>
                  )}
                </button>

                {/* Micro-Friction Line */}
                <div
                  id="audit-micro-friction-line"
                  className="text-center font-mono text-xs text-neutral-500 tracking-wider uppercase"
                >
                  [ ADMISSION IS SELECTIVE. ZERO COMMERCIAL GUARANTEE. THE STANDARD IS ABSOLUTE. ]
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
