export default function SandboxBanner() {
  return (
    <nav className="sticky top-0 z-40 bg-toss-gray-600/80 backdrop-blur-md">
      <div className="max-w-lg mx-auto px-5 py-2.5 flex items-center gap-1.5">
        <svg
          className="w-3.5 h-3.5 text-amber-400 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-[12px] font-medium text-white whitespace-nowrap">
          doribear.dev ― 개발용 화면으로 실제 결제 안됨
        </span>
      </div>
    </nav>
  );
}
