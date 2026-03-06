export default function InfluenceTradingHousePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container-custom text-center space-y-6 py-32">
        <span className="px-4 py-2 bg-blue-900/50 text-blue-400 border border-blue-700/50 rounded-full text-sm font-semibold">
          In Development
        </span>
        <h1 className="text-4xl md:text-5xl font-bold pt-4">
          Influence <span className="text-[#00D9FF]">Trading House</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Trading signals platform with account management, subscription services, and
          financial education. Built for serious traders.
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-4">
          {["Next.js", "Node.js", "Express.js", "PostgreSQL"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-800 text-[#00D9FF] rounded-md border border-[#00D9FF]/30 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 justify-center pt-8">
          <a
            href="https://influencetradinghouse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#00D9FF] text-black font-bold rounded-lg hover:opacity-90 transition-opacity duration-300"
          >
            Visit Live Site →
          </a>
          <a
            href="/#projects"
            className="inline-block px-8 py-3 border border-gray-600 text-white rounded-lg hover:border-[#00D9FF] transition-colors duration-300"
          >
            ← Back to Projects
          </a>
        </div>
      </div>
    </main>
  );
}