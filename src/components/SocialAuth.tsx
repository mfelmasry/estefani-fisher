import { useState } from "react";

type Provider = {
  id: string;
  label: string;
  name: string;
  email: string;
};

const PROVIDERS: Provider[] = [
  { id: "google", label: "Google", name: "Con Google", email: "hola@gmail.com" },
  { id: "microsoft", label: "Microsoft", name: "Con Microsoft", email: "hola@outlook.com" },
  { id: "apple", label: "Apple", name: "Con Apple", email: "hola@icloud.com" },
  { id: "facebook", label: "Facebook", name: "Con Facebook", email: "hola@facebook.com" },
];

export default function SocialAuth({
  onContinue,
}: {
  onContinue: (user: { name: string; email: string; provider: string }) => void;
}) {
  const [busy, setBusy] = useState<string | null>(null);

  function choose(provider: Provider) {
    setBusy(provider.id);
    window.setTimeout(() => {
      onContinue({
        name: provider.name,
        email: provider.email,
        provider: provider.id,
      });
    }, 700);
  }

  return (
    <div className="social-auth">
      <p className="social-kicker">Continuar con tu cuenta</p>
      <div className="social-grid">
        {PROVIDERS.map((provider) => (
          <button
            key={provider.id}
            type="button"
            className={`social-btn social-btn-${provider.id}`}
            onClick={() => choose(provider)}
            disabled={Boolean(busy)}
          >
            <Icon id={provider.id} />
            <span>{busy === provider.id ? "Conectando…" : provider.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Icon({ id }: { id: string }) {
  if (id === "google") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    );
  }
  if (id === "microsoft") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#F25022" d="M2 2h9.5v9.5H2z" />
        <path fill="#7FBA00" d="M12.5 2H22v9.5h-9.5z" />
        <path fill="#00A4EF" d="M2 12.5h9.5V22H2z" />
        <path fill="#FFB900" d="M12.5 12.5H22V22h-9.5z" />
      </svg>
    );
  }
  if (id === "apple") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.4 12.6c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.3-.1-2.6.8-3.3.8s-1.7-.8-2.9-.7c-1.5.1-2.8.9-3.6 2.2-1.5 2.7-.4 6.6 1.1 8.8.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.9.7 1.9-1.1 2.7-2.2c.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.3-.9-2.3-3.4zM14.7 6.3c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.6-1.1 1.6-1 2.6 1 .1 1.9-.5 2.6-1.2z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#1877F2"
        d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18 4.4 23 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.9v2.2h3.3l-.5 3.5h-2.8V24C19.6 23 24 18 24 12.1z"
      />
    </svg>
  );
}
