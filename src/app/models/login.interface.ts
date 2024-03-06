export interface LoginResponse {
  sessionID: string | null;
  error: ErrorLogin | null;
  privacyTerm: PrivacyTerm | null
}

export interface ErrorLogin {
  code: string
  description: string
}

interface PrivacyTerm {
  content: null;
  id: null;
  required: false;
}
