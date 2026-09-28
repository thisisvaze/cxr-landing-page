import Wrapper from "@/components/global/wrapper";
import AnimationContainer from "@/components/global/animation-container";
import { generateMetadata as buildMetadata } from "@/utils";

// noIndex: the page earned 100 impressions and 0 clicks over 6 months and has no
// search value, but stays crawlable and reachable — the Meta Horizon Store listing
// requires a publicly accessible privacy policy URL.
export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How CuriosityXR collects, uses, discloses, and protects your personal information.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-24">
      <Wrapper>
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-lg prose-invert max-w-none">
            <p>This policy explains how CuriosityXR handles personal information when you use our apps (CuriosityXR and Houseguest), website, and subscription services such as CXR Plus.</p>
            <p className="text-muted-foreground text-sm mt-2">Last updated: September 27, 2026</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information we process</h2>
            <p>
              Depending on the features you use, we process microphone audio, transcripts, questions,
              conversation history, content you submit, and information about the models and images you
              interact with. Headset, controller, and hand tracking support interactions in the app;
              information about what you point at, look toward, or hold can provide context for your
              questions. We also process device and connection information such as IP address and device
              type, usage and error logs, and contact details you provide to support.
            </p>
            <p>
              Some features use your headset&apos;s passthrough camera, for example when you ask about an object
              in front of you. Camera images are sent to our AI service providers only to answer that request.
              We do not keep them in your conversation history or use them to identify you.
            </p>
            <p>
              For purchases and subscriptions, we use your app-scoped Meta User ID, purchase records,
              subscription and trial status, and billing period dates to verify and restore access. Meta
              handles checkout and payment details.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How we use and share information</h2>
            <p>
              We use this information to provide personalized AI tutoring and conversation practice, speech features, learning content,
              subscription access, support, and service improvements. Audio and relevant conversation or
              content data are sent to service providers to transcribe speech, generate responses and visuals,
              and provide spoken answers.
            </p>
            <p>
              We use service providers for AI processing, hosting, storage, and analytics. Information may be
              processed outside your country. We do not sell personal information. We may disclose information
              when required by law or necessary to protect users and our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Retention and your choices</h2>
            <p>
              We retain personal information as needed to provide our services, resolve issues, and meet legal
              obligations. You can control microphone access through your device settings. To request access,
              correction, or deletion of your data, email <a href="mailto:support@curiosityxr.com" className="text-indigo-400 hover:underline">support@curiosityxr.com</a>. We may verify your identity before handling
              your request. We will delete your data on request unless retention is required by law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Security</h2>
            <p>
              We take reasonable measures to protect personal information from unauthorized access, loss, or
              misuse.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Children</h2>
            <p>
              Our apps are not intended for children under 13. We do not knowingly collect personal
              information from children under 13. Contact us if you believe a child has provided data so we
              can address it.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Updates and contact</h2>
            <p>
              We will post policy updates here and revise the date above. For privacy questions, contact
              CuriosityXR at <a href="mailto:support@curiosityxr.com" className="text-indigo-400 hover:underline">support@curiosityxr.com</a>.
            </p>
          </div>
        </AnimationContainer>
      </Wrapper>
    </main>
  );
}
