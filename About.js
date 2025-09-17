export default function About() {
  return (
    <section id="about" className="py-20 text-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-4">About Me</h2>
      <p className="max-w-2xl mx-auto text-gray-300">
        {/* TODO: Replace with your own details */}
        Hi, I'm <strong>Your Name</strong>, a B.Tech CSE student passionate about
        web development, programming, and emerging technologies.
      </p>
      <a
        href="/resume.pdf"
        className="inline-block mt-6 px-6 py-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition-all"
      >
        Download Resume
      </a>
    </section>
  );
}
