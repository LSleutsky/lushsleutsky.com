import ContactLinks from "@/components/ContactLinks";

export default function ContactCard({ message, centered }: { message: string; centered: boolean }) {
  return (
    <div
      className={`border-dark-700 bg-dark-900/50 rounded-2xl border p-8 ${centered ? "text-center sm:text-left" : ""}`}
    >
      <p className="mb-6 text-gray-400">{message}</p>
      <ContactLinks />
    </div>
  );
}
