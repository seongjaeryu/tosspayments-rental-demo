interface LoadingModalProps {
  isOpen: boolean;
}

export default function LoadingModal({ isOpen }: LoadingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center gap-4 animate-fade-in-up">
        <div className="w-10 h-10 border-3 border-toss-gray-100 border-t-toss-blue rounded-full animate-spin" />
        <p className="text-sm font-medium text-toss-gray-500">
          결제를 진행하고 있습니다
        </p>
      </div>
    </div>
  );
}
