import { API_CONTACT_EMAIL, buildAccessRequest } from "@/lib/api-access-request";

const FALLBACK = `We couldn’t send your request. Please email ${API_CONTACT_EMAIL} directly.`;

// ponytail: honeypot only, no rate limit; add a Vercel Firewall rate-limit rule on this path if spam arrives.
export async function POST(request: Request) {
    const data = await request.formData().catch(() => null);
    if (!data) return Response.json({ error: "Please check your details." }, { status: 400 });
    if (data.get("website")) return Response.json({ ok: true }); // bot filled the hidden field

    let brief;
    try {
        brief = buildAccessRequest(data);
    } catch (err) {
        return Response.json({ error: err instanceof Error ? err.message : "Please check your details." }, { status: 400 });
    }

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
            from: "CuriosityXR <noreply@curiosityxr.com>",
            to: API_CONTACT_EMAIL,
            reply_to: brief.email,
            subject: brief.subject,
            text: brief.text,
        }),
    }).catch(() => null);
    if (!res?.ok) {
        console.error("access request email failed", res?.status, await res?.text());
        return Response.json({ error: FALLBACK }, { status: 502 });
    }
    return Response.json({ ok: true });
}
