export default function SandboxBanner() {
  return (
    <nav className="sticky top-0 z-40 bg-amber-50/90 backdrop-blur-md border-b border-amber-200/50">
      <div className="max-w-lg mx-auto px-5 py-2.5">
        <span className="text-[12px] font-medium text-amber-700 whitespace-nowrap">
          doribear.dev ― 개발용 화면으로 실제 결제되지 않습니다.
        </span>
      </div>
    </nav>
  );
}
