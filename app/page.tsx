export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
        <span className="mb-4 inline-block rounded-full bg-[#161b22] border border-[#30363d] px-4 py-1 text-sm text-[#58a6ff]">
          For medical, law &amp; language students
        </span>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Turn Notion Notes into{" "}
          <span className="text-[#58a6ff]">Anki Flashcards</span>{" "}
          Automatically
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[#8b949e]">
          Connect your Notion workspace, let AI extract Q&amp;A pairs from your notes,
          and download ready-to-import Anki decks (.apkg) in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="mt-8 inline-block rounded-lg bg-[#58a6ff] px-8 py-3 text-base font-semibold text-[#0d1117] hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">No credit card required for 7-day trial</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "AI Q&A Extraction",
            "Notion API Integration",
            "Anki .apkg Export",
            "Spaced Repetition Optimized",
            "Bulk Conversion"
          ].map((f) => (
            <span
              key={f}
              className="rounded-full border border-[#30363d] bg-[#161b22] px-4 py-1.5 text-sm text-[#c9d1d9]"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-4 py-16">
        <h2 className="mb-10 text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="w-full max-w-sm rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8 shadow-lg shadow-[#58a6ff]/10">
          <div className="mb-1 text-sm font-semibold uppercase tracking-widest text-[#58a6ff]">Pro</div>
          <div className="mt-2 flex items-end gap-1">
            <span className="text-5xl font-bold text-white">$8</span>
            <span className="mb-1 text-[#8b949e]">/month</span>
          </div>
          <p className="mt-3 text-sm text-[#8b949e]">Everything you need to ace your exams</p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Unlimited Notion pages converted",
              "AI-powered Q&A extraction",
              "Anki .apkg file download",
              "Spaced repetition metadata",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="mt-8 block w-full rounded-lg bg-[#58a6ff] py-3 text-center text-base font-semibold text-[#0d1117] hover:bg-[#79b8ff] transition-colors"
          >
            Get Started – $8/mo
          </a>
          <p className="mt-3 text-center text-xs text-[#8b949e]">7-day free trial · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-4 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-white">FAQ</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
            <h3 className="font-semibold text-white">How does the Notion integration work?</h3>
            <p className="mt-2 text-sm text-[#8b949e]">
              You connect your Notion workspace via OAuth. We read your selected pages, extract structured content,
              and use AI to identify question-answer pairs automatically.
            </p>
          </div>
          <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
            <h3 className="font-semibold text-white">What Notion note formats are supported?</h3>
            <p className="mt-2 text-sm text-[#8b949e]">
              We support toggle lists, headers with body text, tables, and bullet-point definitions.
              The AI adapts to your writing style to extract the best flashcard pairs.
            </p>
          </div>
          <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
            <h3 className="font-semibold text-white">Can I import the cards directly into Anki?</h3>
            <p className="mt-2 text-sm text-[#8b949e]">
              Yes. We generate a standard .apkg file that you import into Anki desktop or AnkiMobile with one click.
              Cards include spaced repetition scheduling metadata out of the box.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-sm text-[#8b949e]">
        &copy; {new Date().getFullYear()} NotionToAnki. All rights reserved.
      </footer>
    </main>
  );
}
