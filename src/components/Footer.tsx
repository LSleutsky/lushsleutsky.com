import CopyrightIcon from "@/components/svg/CopyrightIcon";

export default function Footer() {
  return (
    <footer className="border-dark-800 border-t px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="flex items-center gap-1.5 text-sm text-gray-500">
          <CopyrightIcon /> {new Date().getFullYear()} Lush Sleutsky
        </p>
        <p className="text-sm text-gray-600">Senior Software Engineer</p>
      </div>
    </footer>
  );
}
