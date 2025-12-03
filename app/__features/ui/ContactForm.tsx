'use client';
import { sendEMail, State } from "@/app/api/SendEmail/SendService";
import { useActionState } from "react";

export function ContactForm() {
  const init: State = {message: null, errors: {}};
	const [state, formAction] = useActionState(sendEMail, init);

  return (
    <form className="space-y-4" action={formAction}>
      {["name", "email", "project"].map((field) => (
        <div key={field} className="space-y-2">
          <label className="text-sm font-medium text-slate-600">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            name={field}
            id={field}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            placeholder={`Enter your ${field}`}
          />
        </div>
      ))}

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600">Message</label>
        <textarea
          name="message"
          id="message"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          rows={4}
          placeholder="Tell me a bit about your idea…"
        />
      </div>

      <button type="submit" className="w-full rounded-xl hover:scale-105 bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all duration-200 active:scale-95">
        Send message
      </button>
      {state.message && (
        <p className="text-sm text-green-600 mt-2">{state.message}</p>
      )}
    </form>
  );
}
