import { MessageCircle } from "lucide-react";
import { company } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Go Travel & Tours on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-950/25 transition hover:-translate-y-1 hover:bg-emerald-600"
    >
      <MessageCircle size={27} />
    </a>
  );
}
