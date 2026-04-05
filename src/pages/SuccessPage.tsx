import { useSearchParams, useNavigate } from "react-router-dom";
import SandboxBanner from "../components/SandboxBanner";
import FadeInSection from "../components/FadeInSection";

const formatPrice = (value: string) =>
  new Intl.NumberFormat("ko-KR").format(Number(value));

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const paymentKey = searchParams.get("paymentKey");

  if (!orderId || !amount) {
    return (
      <div className="min-h-screen bg-toss-gray-50 flex items-center justify-center px-5">
        <div className="text-center">
          <p className="text-toss-gray-400 mb-4">
            잘못된 접근입니다
          </p>
          <button
            onClick={() => navigate("/")}
            className="text-toss-blue font-medium text-sm"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-toss-gray-50">
      <SandboxBanner />

      <div className="max-w-lg mx-auto px-5 py-16 flex flex-col items-center">
        <FadeInSection delay={0} className="flex flex-col items-center">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-toss-black mb-1">
            결제가 완료되었습니다
          </h1>
          <p className="text-sm text-toss-gray-300">
            테스트 결제가 정상적으로 처리되었습니다
          </p>
        </FadeInSection>

        <FadeInSection delay={150} className="w-full mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm w-full">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-toss-gray-400">주문번호</span>
                <span className="text-sm font-medium text-toss-gray-600 text-right max-w-[60%] break-all">
                  {orderId}
                </span>
              </div>
              <div className="border-t border-toss-gray-50" />
              <div className="flex justify-between items-center">
                <span className="text-sm text-toss-gray-400">결제금액</span>
                <span className="text-lg font-bold text-toss-blue">
                  {formatPrice(amount)}원
                </span>
              </div>
              {paymentKey && (
                <>
                  <div className="border-t border-toss-gray-50" />
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-toss-gray-400 shrink-0">
                      결제키
                    </span>
                    <span className="text-xs font-mono text-toss-gray-300 text-right max-w-[60%] break-all ml-4">
                      {paymentKey}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={300} className="w-full mt-4">
          <div className="bg-toss-gray-50 rounded-xl px-4 py-3">
            <p className="text-xs text-toss-gray-300 text-center leading-relaxed">
              테스트 모드에서는 결제 승인(confirm) 과정이 생략됩니다.
              <br />
              실제 서비스에서는 서버에서 결제를 최종 승인합니다.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={400} className="w-full mt-6">
          <button
            onClick={() => navigate("/")}
            className="w-full py-4 bg-toss-blue hover:bg-toss-blue-dark text-white font-semibold text-base rounded-xl transition-colors"
          >
            홈으로 돌아가기
          </button>
        </FadeInSection>
      </div>
    </div>
  );
}
