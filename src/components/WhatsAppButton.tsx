import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/38344000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Go Travel & Tours on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-900/25 transition hover:-translate-y-1 hover:bg-emerald-600"
    >
      <MessageCircle size={28} />
    </a>
  );
}
