"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { API_CONTACT_EMAIL } from "@/lib/api-access-request";

const fieldClass = "mt-2 w-full rounded-lg border border-white/20 bg-neutral-950 px-3 py-3 text-base text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-400";

export default function ApiAccessForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
    const [error, setError] = useState("");

    async function sendRequest(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("sending");
        setError("");
        try {
            const res = await fetch("/api/access-request", { method: "POST", body: new FormData(event.currentTarget) });
            if (!res.ok) throw new Error((await res.json().catch(() => null))?.error);
            setStatus("sent");
        } catch (err) {
            setStatus("idle");
            setError(err instanceof Error && err.message ? err.message : `We couldn’t send your request. Please email ${API_CONTACT_EMAIL} directly.`);
        }
    }

    if (status === "sent") {
        return (
            <div role="status" className="rounded-2xl border border-violet-400/30 bg-violet-500/10 p-6 sm:p-8">
                <p className="text-lg font-medium text-white">Request received.</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">I’ll reply within one business day to plan a sample on your topic. Anything to add? Write to <a className="text-violet-200 underline underline-offset-2" href={`mailto:${API_CONTACT_EMAIL}`}>{API_CONTACT_EMAIL}</a>.</p>
            </div>
        );
    }

    return (
        <form onSubmit={sendRequest} onChange={() => setError("")} className="rounded-2xl border border-white/15 bg-neutral-950/70 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm text-neutral-200">
                    Name
                    <input className={fieldClass} name="name" autoComplete="name" required maxLength={80} />
                </label>
                <label className="text-sm text-neutral-200">
                    Work email
                    <input className={fieldClass} name="email" type="email" autoComplete="email" required maxLength={254} />
                </label>
                <label className="text-sm text-neutral-200 sm:col-span-2">
                    Product, company, or website
                    <input className={fieldClass} name="company" autoComplete="organization" required maxLength={120} placeholder="The learning product you’re building" />
                </label>
                <label className="text-sm text-neutral-200 sm:col-span-2">
                    What would you like to build?
                    <textarea className={fieldClass} name="useCase" required maxLength={600} rows={3} placeholder="An AI science tutor for ages 12–16" />
                </label>
            </div>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <p className="mt-5 text-xs leading-relaxed text-neutral-400">
                <Link href="/privacy-policy" className="underline underline-offset-2">Privacy policy</Link>
            </p>
            <Button type="submit" disabled={status === "sending"} className="magic-button mt-6">{status === "sending" ? "Sending…" : "Request access"}</Button>
            {error && <p role="alert" className="mt-4 text-sm text-red-300">{error}</p>}
        </form>
    );
}
