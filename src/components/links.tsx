"use client";
export default function Links() {
  return (
    // Adjusting classes for vertical centering on small screens (sm)
    <div className="z-50 flex items-center justify-center gap-4 px-4 py-4 sm:fixed sm:left-4 sm:top-1/2 sm:-translate-y-1/2 sm:flex-col sm:items-start sm:justify-end">
      <a
        href="https://github.com/jjcc2000"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        <img
          src="/images/github.png"
          alt="GitHub"
          className="h-10 w-10 sm:h-12 sm:w-12"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/johan-chac%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        <img
          src="/images/6bab3017350ca04c6fa05569672bd31e.jpg"
          alt="LinkedIn"
          className="h-10 w-10 sm:h-12 sm:w-12"
        />
      </a>

      <a
        href="mailto:johanchaconchacon@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        <img
          src="/images/new-email-interface-symbol-of-black-closed-envelope.svg"
          alt="Email"
          className="h-10 w-10 sm:h-12 sm:w-12"
        />
      </a>
    </div>
  );
}