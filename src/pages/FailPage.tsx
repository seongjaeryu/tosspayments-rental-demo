import { useSearchParams, useNavigate } from "react-router-dom";
import SandboxBanner from "../components/SandboxBanner";
import FadeInSection from "../components/FadeInSection";

export default function FailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const code = searchParams.get("code") || "UNKNOWN_ERROR";
  const message =
    searchParams.get("message") || "알 수 없는 오류가 발생했습니다";

  return (
    <div className="min-h-screen bg-toss-gray-50">
      <SandboxBanner />

      <div className="max-w-lg mx-auto px-5 py-16 flex flex-col items-center">
        <FadeInSection delay={0} className="flex flex-col items-center">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-5">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-toss-black mb-1">
            결제에 실패했습니다
          </h1>
          <p className="text-sm text-toss-gray-300">
            아래 내용을 확인해주세요
          </p>
        </FadeInSection>

        <FadeInSection delay={150} className="w-full mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm w-full">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-toss-gray-400">에러 코드</span>
                <span className="text-sm font-mono font-medium text-toss-gray-600">
                  {code}
                </span>
              </div>
              <div className="border-t border-toss-gray-50" />
              <div>
                <span className="text-sm text-toss-gray-400 block mb-1">
                  에러 메시지
                </span>
                <p className="text-sm text-toss-gray-500 leading-relaxed">
                  {message}
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={300} className="w-full mt-6">
          <button
            onClick={() => navigate("/")}
            className="w-full py-4 bg-toss-blue hover:bg-toss-blue-dark text-white font-semibold text-base rounded-xl transition-colors"
          >
            다시 시도하기
          </button>
        </FadeInSection>
      </div>
    </div>
  );
}
