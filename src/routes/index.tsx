import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hello World" },
      { name: "description", content: "A simple and clean Hello World web app." },
      { property: "og:title", content: "Hello World" },
      { property: "og:description", content: "A simple and clean Hello World web app." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Hello, World!
      </h1>
      <p className="mt-4 text-center text-muted-foreground">
        Welcome to your clean, minimal web app.
      </p>
    </main>
  );
}
