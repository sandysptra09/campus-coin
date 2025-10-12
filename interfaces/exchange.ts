export interface ExchangeInputProps {
  section: number;
  setSection: React.Dispatch<React.SetStateAction<number>>;
  setFormData: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  setCertificatePreviewURL: React.Dispatch<React.SetStateAction<string | null>>;
};