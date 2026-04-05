import { useEffect, useRef, useState } from "react";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import SandboxBanner from "../components/SandboxBanner";
import OrderSummary from "../components/OrderSummary";
import FadeInSection from "../components/FadeInSection";
import LoadingModal from "../components/LoadingModal";

const CLIENT_KEY = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const CUSTOMER_KEY = "DEMO_CUSTOMER_KEY";
const AMOUNT = 189_000;

export default function OrderPage() {
  const widgetsRef = useRef<Awaited<
    ReturnType<Awaited<ReturnType<typeof loadTossPayments>>["widgets"]>
  > | null>(null);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const tossPayments = await loadTossPayments(CLIENT_KEY);
      const widgets = tossPayments.widgets({ customerKey: CUSTOMER_KEY });
      widgetsRef.current = widgets;

      await widgets.setAmount({ currency: "KRW", value: AMOUNT });

      if (cancelled) return;

      await Promise.all([
        widgets.renderPaymentMethods({
          selector: "#payment-method",
          variantKey: "DEFAULT",
        }),
        widgets.renderAgreement({
          selector: "#agreement",
          variantKey: "AGREEMENT",
        }),
      ]);

      if (!cancelled) setReady(true);
    }

    init();

    return () => {
      cancelled = true;
    };
  }, []);

  const handlePayment = async () => {
    const widgets = widgetsRef.current;
    if (!widgets) return;

    setLoading(true);

    try {
      await widgets.requestPayment({
        orderId: `ORDER_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
        orderName: "백패킹 세트 A (1박2일) 렌탈",
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-toss-gray-50">
      <SandboxBanner />

      <div className="max-w-lg mx-auto px-5 py-8 pb-32">
        <FadeInSection delay={0}>
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-toss-black">
              백패킹 세트 렌탈
            </h1>
            <p className="text-sm text-toss-gray-300 mt-1">
              결제 데모 페이지
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="mb-5">
            <OrderSummary />
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="mb-5">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {!ready && (
                <div className="p-6 space-y-4">
                  <div className="h-4 w-32 bg-toss-gray-50 rounded animate-skeleton" />
                  <div className="h-12 bg-toss-gray-50 rounded-xl animate-skeleton" />
                  <div className="h-12 bg-toss-gray-50 rounded-xl animate-skeleton" />
                  <div className="h-12 bg-toss-gray-50 rounded-xl animate-skeleton" />
                </div>
              )}
              <div id="payment-method" />
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={300}>
          <div className="mb-5">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {!ready && (
                <div className="p-6">
                  <div className="h-4 w-48 bg-toss-gray-50 rounded animate-skeleton" />
                </div>
              )}
              <div id="agreement" />
            </div>
          </div>
        </FadeInSection>
      </div>

      <FadeInSection delay={400}>
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-toss-gray-100">
          <div className="max-w-lg mx-auto px-5 py-4">
            <button
              onClick={handlePayment}
              disabled={!ready || loading}
              className="w-full py-4 bg-toss-blue hover:bg-toss-blue-dark disabled:bg-toss-gray-200 text-white font-semibold text-base rounded-xl transition-colors"
            >
              {ready
                ? `${new Intl.NumberFormat("ko-KR").format(AMOUNT)}원 결제하기`
                : "결제 수단을 불러오는 중..."}
            </button>
          </div>
        </div>
      </FadeInSection>

      <LoadingModal isOpen={loading} />
    </div>
  );
}
