# 토스페이먼츠 샌드박스 결제 데모

백패킹 세트 렌탈 결제 플로우를 토스페이먼츠 샌드박스에서 체험할 수 있는 프론트엔드 데모 페이지.

**배포 URL**: `backpacking-pay.doribear.dev`

## 스택

- **프레임워크**: React + TypeScript (Vite)
- **스타일**: Tailwind CSS + Pretendard 폰트
- **결제**: 토스페이먼츠 결제위젯 SDK v2 (`@tosspayments/tosspayments-sdk`)
- **라우팅**: React Router v7
- **배포**: Cloudflare Pages

## 페이지 구성

| 경로 | 설명 |
|------|------|
| `/` | 주문서 페이지 — 상품 요약 + 결제위젯 + 결제 버튼 |
| `/success` | 결제 성공 — orderId, amount, paymentKey 표시 |
| `/fail` | 결제 실패 — 에러 코드 + 메시지 표시 |

## 결제 플로우

```
주문서 → 결제수단 선택 (토스 위젯) → 결제하기 클릭
  → 토스 샌드박스 결제 진행 → /success 또는 /fail 리다이렉트
```

- **샌드박스 전용**: 실제 결제가 발생하지 않음
- **프론트엔드 전용**: 서버 결제 승인(confirm) 미구현
- **클라이언트 키**: `test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm` (토스 공식 테스트 키)

## 주문 내용 (하드코딩)

| 항목 | 금액 |
|------|------|
| 백패킹 세트 A (1박2일) 렌탈비 | 89,000원 |
| 보증금 | 100,000원 |
| **합계** | **189,000원** |

렌탈 기간: 2026.04.10 (금) ~ 2026.04.11 (토)

## UI 특징

- **토스 스타일**: 심플, 위계있는 레이아웃, 넉넉한 여백
- **캐스케이드 딜레이 애니메이션**: 페이지 진입 시 섹션별 순차 fade-in
- **백그라운드 블러 모달**: 결제 진행 중 `backdrop-blur` 오버레이
- **반응형**: 모바일 우선, 데스크탑 대응

## 프로젝트 구조

```
src/
├── main.tsx                    # 엔트리 포인트
├── App.tsx                     # 라우터 (/, /success, /fail)
├── index.css                   # Tailwind + 커스텀 애니메이션
├── pages/
│   ├── OrderPage.tsx           # 주문서 + 토스 결제위젯 SDK 연동
│   ├── SuccessPage.tsx         # 결제 성공 결과
│   └── FailPage.tsx            # 결제 실패 결과
└── components/
    ├── FadeInSection.tsx       # 캐스케이드 딜레이 애니메이션 래퍼
    ├── SandboxBanner.tsx       # 상단 샌드박스 안내 배너
    ├── OrderSummary.tsx        # 주문 요약 카드 (렌탈비 + 보증금)
    └── LoadingModal.tsx        # 결제 진행 중 블러 모달
```

## 로컬 개발

```bash
npm install
npm run dev
```

## 빌드 & 배포

```bash
npm run build              # dist/ 생성
npm run deploy             # Cloudflare Pages 배포
```

### Cloudflare Pages 설정

- `wrangler.toml`에 SPA 라우팅 설정 포함 (`not_found_handling = "single-page-application"`)
- 커스텀 도메인: `backpacking-pay.doribear.dev`

## 토스페이먼츠 SDK 연동 참고

```typescript
// SDK 초기화
const tossPayments = await loadTossPayments(CLIENT_KEY);
const widgets = tossPayments.widgets({ customerKey: CUSTOMER_KEY });

// 금액 설정
await widgets.setAmount({ currency: "KRW", value: 189000 });

// 위젯 렌더링
await widgets.renderPaymentMethods({ selector: "#payment-method", variantKey: "DEFAULT" });
await widgets.renderAgreement({ selector: "#agreement", variantKey: "AGREEMENT" });

// 결제 요청
await widgets.requestPayment({
  orderId: `ORDER_${Date.now()}_${randomString}`,
  orderName: "백패킹 세트 A (1박2일) 렌탈",
  successUrl: `${origin}/success`,
  failUrl: `${origin}/fail`,
});
```

## 안 만든 것

- 백엔드 서버 (결제 승인 API 없음)
- 날짜 선택 캘린더
- 회원가입/로그인
- 상품 목록/상세
- DB 연동
