export interface formError {
  from: string;
  subject: string;
  senderName: string;
  body: string;
}

export interface formState {
  success: boolean;
  errors: formError;
}
