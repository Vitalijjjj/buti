export function ScanIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 9V6C3 4.89543 3.89543 4 5 4H9M15 4H19C20.1046 4 21 4.89543 21 6V9M21 15V18C21 19.1046 20.1046 20 19 20H15M9 20H5C3.89543 20 3 19.1046 3 18V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
