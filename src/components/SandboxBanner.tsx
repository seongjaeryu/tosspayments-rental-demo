export default function SandboxBanner() {
  return (
    <div className="bg-toss-blue/5 border-b border-toss-blue/10">
      <div className="max-w-lg mx-auto px-5 py-2.5 flex items-center justify-center gap-2">
        <span className="inline-flex items-center rounded-full bg-toss-blue/10 px-2.5 py-0.5 text-xs font-semibold text-toss-blue">
          SANDBOX
        </span>
        <span className="text-xs text-toss-gray-400">
          테스트 결제 페이지입니다 · 실제 결제가 이루어지지 않습니다
        </span>
      </div>
    </div>
  );
}
