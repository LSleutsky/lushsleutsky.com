import ContactCard from "@/components/ContactCard";

export default function Contact({
  showHeading = true,
  message = "I'm always open to discussing new opportunities and interesting projects. Feel free to reach out."
}: {
  showHeading?: boolean;
  message?: string;
}) {
  if (!showHeading) {
    return <ContactCard centered message={message} />;
  }

  return (
    <section className="relative py-20 sm:py-24" id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
          <span className="text-indigo-400">{`//`}</span> Get In Touch
        </h2>
        <ContactCard centered={false} message={message} />
      </div>
    </section>
  );
}
