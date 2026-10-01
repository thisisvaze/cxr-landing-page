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
            <p>This policy explains how CuriosityXR handles personal information when you use our apps (CuriosityXR, Houseguest and Timeguest), website, and subscription services such as CXR Plus.</p>
            <p className="text-muted-foreground text-sm mt-2">Last updated: October 1, 2026</p>

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
            <h2 className="text-2xl font-bold mt-8 mb-4">Meta platform data we collect</h2>
            <p>
              When you open one of our apps on a Meta Quest headset, we receive the following data from the
              Meta Horizon platform:
            </p>
            <ul>
              <li>
                <strong>User ID.</strong> Your app-scoped Meta User ID, a number that identifies your account
                within a single app. It does not reveal your name, email address, or Meta profile.
              </li>
              <li>
                <strong>Purchases and subscriptions.</strong> Whether you own the app, your purchase records,
                subscription and trial status, and billing period dates. Meta handles checkout and payment
                details; we never receive your payment information.
              </li>
            </ul>
            <p>We use your User ID to:</p>
            <ul>
              <li>confirm that you are signed in to a genuine Meta account that owns the app;</li>
              <li>check and restore your purchases and CXR Plus subscription;</li>
              <li>
                store your learning profile and conversation memory under that ID, so the app can remember
                you between sessions;
              </li>
              <li>link usage and error logs to an account so we can fix problems and prevent abuse.</li>
            </ul>
            <p>
              We store your User ID on our servers together with the data above. We do not sell it, use it
              for advertising, or share it with anyone other than the service providers that host our
              services.
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
              obligations. You can control microphone access through your device settings.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How to delete your data</h2>
            <p>
              You can ask us to delete your data at any time. Email <a href="mailto:support@curiosityxr.com?subject=Data%20deletion%20request" className="text-indigo-400 hover:underline">support@curiosityxr.com</a> with
              the subject &quot;Data deletion request&quot; and tell us which app you use. We will reply to
              confirm which account is yours, then delete your Meta User ID and everything stored under it
              (learning profile, conversation memory, conversation history, and usage logs) within 30 days,
              unless we are required by law to keep it. You can use the same address to request access to
              or correction of your data.
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
