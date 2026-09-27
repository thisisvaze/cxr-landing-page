export const API_CONTACT_EMAIL = "vaze@curiosityxr.com";

export function buildAccessRequest(data: FormData) {
    const read = (key: string, label: string, max: number) => {
        const value = data.get(key);
        if (typeof value !== "string" || !value.trim() || value.trim().length > max) {
            throw new Error(`Please check ${label}.`);
        }
        return value.trim();
    };
    const name = read("name", "your name", 80);
    const email = read("email", "your email", 254);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error("Please enter a valid email address.");
    }
    const company = read("company", "your product or company", 120);
    const useCase = read("useCase", "your use case", 600);
    const subject = `API access request — ${company.replace(/\s+/g, " ")}`;
    const body = [
        `Name: ${name}`, `Email: ${email}`, `Product / company: ${company}`,
        "", "What I’m building / example topic:", useCase,
    ].join("\n");

    return { email, subject, text: body };
}
