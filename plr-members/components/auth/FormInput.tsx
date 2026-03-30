interface FormInputProps {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  placeholder?: string
  disabled?: boolean
}

export default function FormInput({
  label,
  name,
  type,
  value,
  onChange,
  error,
  placeholder,
  disabled,
}: FormInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full border rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1565C0] focus:border-transparent transition-colors ${
          error ? 'border-red-400' : 'border-gray-300'
        } ${disabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : ''}`}
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  )
}
