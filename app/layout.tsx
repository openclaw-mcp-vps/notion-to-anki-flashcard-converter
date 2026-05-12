import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NotionToAnki – Convert Notion Notes to Anki Flashcards",
  description:
    "Automatically convert your Notion notes into Anki flashcards with AI-powered Q&A extraction and spaced repetition optimization."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="189dc5b3-2210-452d-acc6-71bc52b9d710"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
