import "../styles/tailwind_config.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="custom-font min-h-screen w-full bg-slate-50 text-slate-900">
      <Component {...pageProps} />
    </main>
  );
}
