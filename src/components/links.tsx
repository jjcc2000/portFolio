"use client";
export default function Links() {
  return (
    <div className="fixed left-4 top-1/2 z-50 flex -translate-y-1/2 transform flex-col items-center gap-4">
      <a
        href="https://github.com/jjcc2000"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        <img src="/images/github.png" alt="GitHub" className="h-12 w-12" />
      </a>

      <a
        href="https://www.linkedin.com/in/johan-chac%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        <img
          src="/images/6bab3017350ca04c6fa05569672bd31e.jpg"
          alt="Linkedin"
          className="h-12 w-12"
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
          className="h-12 w-12"
        />
      </a>
    </div>
  );
}
