import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-section">This page doesn&apos;t exist.</h1>
      <p className="mt-4 max-w-sm text-lead text-body">
        That link doesn&apos;t go anywhere. Here&apos;s the way back.
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
}
