import React from "react";
import { AlertCircle } from "lucide-react";
interface FormProps {
  onSubmit: (e: FormEvent) => void;
  error?: string;
  success?: string;
  children: React.ReactNode;
  className?: string;
}
const Form: React.FC<FormProps> = ({
  onSubmit,
  error,
  success,
  children,
  className = ""
}) => {
  return <form onSubmit={onSubmit} className={className} noValidate>
      {error && <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5" />
          <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
        </div>}
      {success && <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-green-700 dark:text-green-300 text-sm">
            {success}
          </p>
        </div>}
      {children}
    </form>;
};
export default Form;