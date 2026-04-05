import { useState, useEffect } from "react";

export default function SandboxBanner() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-toss-gray-100">
      <div className="max-w-lg mx-auto px-4 h-11 flex items-center gap-3">
        {/* Logo button — toggles icon ↔ X */}
        <button
          onClick={() => setExpanded((p) => !p)}
          aria-expanded={expanded}
          aria-label={expanded ? "닫기" : "정보"}
          className="w-7 h-7 flex items-center justify-center rounded-lg bg-toss-gray-50 border border-toss-gray-100 hover:bg-toss-gray-100/80 transition-all shrink-0"
        >
          <div className="relative w-5 h-5">
            <img
              src="/favicon.ico"
              alt="doribear.dev"
              width={20}
              height={20}
              className={`absolute inset-0 transition-all duration-200 ${
                expanded ? "opacity-0 scale-75" : "opacity-100 scale-100"
              }`}
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className={`absolute inset-0 w-5 h-5 text-toss-gray-400 transition-all duration-200 ${
                expanded ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </div>
        </button>

        {/* Content area — smooth crossfade */}
        <div className="flex-1 min-w-0 relative overflow-hidden">
          {/* Default: doribear.dev + SANDBOX badge */}
          <div
            className={`flex items-center gap-2 transition-all duration-300 ease-in-out ${
              expanded
                ? "opacity-0 -translate-y-3 pointer-events-none absolute inset-0"
                : "opacity-100 translate-y-0"
            }`}
          >
            <span className="text-[13px] font-semibold text-toss-black truncate">
              백패킹 장비 렌탈 플랫폼
            </span>
            <span className="inline-flex items-center rounded-full bg-toss-gray-50 px-2 py-0.5 text-[10px] font-medium text-toss-gray-300 shrink-0">
              TEST
            </span>
          </div>

          {/* Expanded: sandbox description */}
          <div
            className={`flex items-center transition-all duration-300 ease-in-out ${
              expanded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none absolute inset-0"
            }`}
          >
            <span className="text-[12px] text-toss-gray-400 leading-tight">
              개발용 테스트 화면 · 실제로 결제되지 않습니다.
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
