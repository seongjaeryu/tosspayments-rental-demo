export default function SandboxBanner() {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-toss-gray-100">
      <div className="max-w-lg mx-auto px-5 py-2.5 flex items-center justify-between">
        <span className="text-sm font-semibold text-toss-black tracking-tight">
          doribear.dev
        </span>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center rounded-full bg-toss-blue/10 px-2 py-0.5 text-[11px] font-semibold text-toss-blue">
            SANDBOX
          </span>
          <span className="text-[11px] text-toss-gray-300 hidden sm:inline">
            실제 결제가 이루어지지 않습니다
          </span>
        </div>
      </div>
    </div>
  );
}
