const formatPrice = (price: number) =>
  new Intl.NumberFormat("ko-KR").format(price);

export default function OrderSummary() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-toss-black">
          백패킹 세트 A
        </h2>
        <p className="text-sm text-toss-gray-300 mt-1">1박 2일 렌탈</p>
      </div>

      <div className="flex items-center gap-2 mb-5 px-3 py-2.5 bg-toss-gray-50 rounded-xl">
        <svg
          className="w-4 h-4 text-toss-gray-300 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-sm text-toss-gray-500">
          2026.04.10 (금) ~ 2026.04.11 (토)
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-toss-gray-400">렌탈비</span>
          <span className="text-sm font-medium text-toss-gray-600">
            {formatPrice(89000)}원
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-toss-gray-400">보증금</span>
          <span className="text-sm font-medium text-toss-gray-600">
            {formatPrice(100000)}원
          </span>
        </div>
      </div>

      <div className="border-t border-toss-gray-100 mt-4 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold text-toss-black">
            총 결제금액
          </span>
          <span className="text-xl font-bold text-toss-blue">
            {formatPrice(189000)}원
          </span>
        </div>
      </div>

      <p className="text-xs text-toss-gray-300 mt-3 leading-relaxed">
        ※ 보증금은 장비 회수·정비 완료 후 전액 반환됩니다
      </p>
    </div>
  );
}
