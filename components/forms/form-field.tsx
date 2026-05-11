import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

interface FormFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  error: string;
  helperText?: string;
  textarea?: boolean;
}

export default function FormField({
  label,
  name,
  id,
  onChange,
  error,
  placeholder,
  required,
  helperText,
  textarea = false,
}: FormFieldProps) {
  return (
    <div>
      <div className="space-y-2">
        <Label htmlFor={id}>{label}</Label>
        {textarea ? (
          <Textarea
            id={id}
            name={name}
            placeholder={placeholder}
            required={required}
            onChange={
              onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void
            }
          />
        ) : (
          <Input
            id={id}
            name={name}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
          />
        )}
      </div>
      <div className="mt-2">
        {helperText && (
          <p className="text-xs text-muted-foreground">{helperText}</p>
        )}
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
