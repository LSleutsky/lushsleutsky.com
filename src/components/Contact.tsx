import ContactLinks from "@/components/ContactLinks";

const defaultMessage =
  "I'm always open to discussing new opportunities and interesting projects. Feel free to reach out.";

export default function Contact({
  showHeading = true,
  message = defaultMessage
}: {
  showHeading?: boolean;
  message?: string;
}) {
  return (
    <section className="relative py-20 sm:py-24" id="contact">
      <div className="mx-auto max-w-6xl px-6">
        {showHeading && (
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> Get In Touch
          </h2>
        )}
        <div className="border-dark-700 bg-dark-900/50 rounded-2xl border p-8">
          <p className="mb-6 text-gray-400">{message}</p>
          <ContactLinks />
        </div>
      </div>
    </section>
  );
}
