import { useState, useEffect, useCallback, useRef } from "react";

export default function SandboxBanner() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-toss-gray-100">
      <div className="max-w-lg mx-auto px-5 h-11 flex items-center gap-3">
        {/* Left: Logo button */}
        <div className="relative shrink-0" ref={dropdownRef}>
          <button
            onClick={toggle}
            aria-expanded={open}
            aria-label={open ? "닫기" : "메뉴"}
            className="w-7 h-7 flex items-center justify-center rounded-lg bg-toss-gray-50 border border-toss-gray-100 hover:bg-toss-gray-100/80 transition-all"
          >
            <div className="relative w-5 h-5">
              {/* App icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className={`absolute inset-0 w-5 h-5 text-toss-blue transition-all duration-200 ${open ? "opacity-0 scale-75" : "opacity-100 scale-100"}`}
              >
                <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" opacity="0.8" />
                <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor" opacity="0.5" />
                <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor" opacity="0.5" />
                <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" opacity="0.3" />
              </svg>
              {/* X icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                className={`absolute inset-0 w-5 h-5 text-toss-gray-400 transition-all duration-200 ${open ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </div>
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute top-full left-0 mt-1.5 z-50 w-72 rounded-xl shadow-lg border border-toss-gray-100 bg-white py-4 px-4 animate-fade-in-up"
              style={{ animationDuration: "0.2s" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700 border border-amber-200/60">
                  SANDBOX
                </span>
                <span className="text-[11px] text-toss-gray-300">테스트 모드</span>
              </div>
              <p className="text-[12px] text-toss-gray-400 leading-relaxed">
                이 페이지는 토스페이먼츠 샌드박스 환경에서 동작합니다.
                실제 결제가 이루어지지 않으며, 테스트 카드 번호로 결제
                플로우를 체험할 수 있습니다.
              </p>
              <div className="mt-3 pt-3 border-t border-toss-gray-50">
                <p className="text-[11px] text-toss-gray-300">
                  Powered by doribear.dev
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Center: Logo text + SANDBOX badge */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[13px] font-semibold text-toss-black truncate">
            doribear.dev
          </span>
          <span className="inline-flex items-center rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 border border-amber-200/60 shrink-0">
            SANDBOX
          </span>
        </div>
      </div>
    </nav>
  );
}
