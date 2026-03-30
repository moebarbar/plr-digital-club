interface SubmitButtonProps {
  children: React.ReactNode
  loading?: boolean
  disabled?: boolean
}

export default function SubmitButton({ children, loading, disabled }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading || disabled}
      className="w-full bg-[#1A1A4E] hover:bg-[#1565C0] text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Please wait...
        </>
      ) : (
        children
      )}
    </button>
  )
}
