import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div data-testid="page-not-found" className="min-h-[70vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-[11px] uppercase tracking-[0.22em] text-sage-600 mb-6">404</div>
        <h1 className="font-serif text-6xl sm:text-7xl leading-[1] tracking-tight text-ink">
          This chapter <span className="serif-italic-emph">doesn't exist.</span>
        </h1>
        <p className="mt-6 text-ink-muted text-lg max-w-lg mx-auto">
          The page you're looking for has moved, or perhaps was never written. Let's find you the right one.
        </p>
        <Link
          to="/"
          data-testid="not-found-home-link"
          className="mt-10 inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white rounded-full px-6 py-3.5 text-[15px] font-medium transition-all hover:-translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>
    </div>
  );
}
