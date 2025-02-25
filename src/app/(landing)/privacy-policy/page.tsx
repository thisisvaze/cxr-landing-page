import Wrapper from "@/components/global/wrapper";
import AnimationContainer from "@/components/global/animation-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CuriosityXR",
  description: "CuriosityXR Privacy Policy - Learn how we collect, use, disclose, and protect your personal information",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-24">
      <Wrapper>
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p>
              At CuriosityXR, we understand the importance of privacy and the protection of personal information. 
              This privacy policy outlines how we collect, use, disclose, and protect your personal information 
              when you use our application and services.
            </p>
            
            <p className="text-muted-foreground text-sm mt-2">Last updated: Mar 4, 2023</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">What information do we collect?</h2>
            <p>
              When you use our application, we may collect certain personal information such as your name, 
              email address, and location. We may also collect information related to your device, such as 
              your IP address, browser type, and operating system. Additionally, we collect data related to 
              your usage of our application and services, such as the 3D models you interact with and the 
              questions you ask.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How do we use your information?</h2>
            <p>
              We use your personal information to provide our services to you and to improve our application. 
              Specifically, we use your information to:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Provide access to 3D models and the ability to ask questions.</li>
              <li>Respond to your inquiries and customer service requests.</li>
              <li>
                Improve our application and services, such as by analyzing usage data to identify 
                trends and areas for improvement.
              </li>
              <li>
                Personalize your experience, such as by recommending content based on your previous usage.
              </li>
            </ul>
            <p>
              We may also use your information for marketing purposes, such as to send promotional 
              emails or other communications about our application and services.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How do we disclose your information?</h2>
            <p>
              We may disclose your personal information to third-party service providers who assist us in 
              providing our services. For example, we may use a third-party hosting provider to host our 
              application and store user data. We may also disclose your information in response to a 
              subpoena, court order, or other legal request, or to comply with applicable laws or regulations. 
              Additionally, we may disclose your information if we believe it is necessary to investigate, 
              prevent, or take action regarding illegal activities, fraud, or violations of our terms of service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How we protect your information?</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, 
              disclosure, or destruction. We use industry-standard security measures, such as encryption 
              and secure storage, to protect your data. However, no method of transmission over the internet 
              or electronic storage is 100% secure. While we strive to use commercially acceptable means to 
              protect your personal information, we cannot guarantee its absolute security.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How can you update/delete my information?</h2>
            <p>
              Yes, you can update or correct your information depending on your relationship with Curiosity XR. 
              If you are a personnel of the company, you may refer to the internal employment policies for 
              instructions on how to update or correct your information. As a customer, you have the right to 
              request the restriction of certain uses and disclosures of your personally identifiable information.
            </p>
            <p>
              You may contact Curiosity XR to update or correct your personally identifiable information, 
              change your communication preferences, or delete your personally identifiable information on 
              their system by cancelling your account. However, such changes will not affect other information 
              that the company maintains or has provided to third parties in accordance with their privacy policy.
            </p>
            <p>
              To protect your privacy and security, Curiosity XR may take reasonable steps, such as requesting 
              a unique password, to verify your identity before granting you profile access or making corrections. 
              It is your responsibility to maintain the secrecy of your unique password and account information 
              at all times.
            </p>
            <p>
              Please note that it may not be technically possible to remove each and every record of the 
              information you have provided to Curiosity XR from their system. Backing up their systems to 
              protect information from inadvertent loss means that a copy of your information may exist in a 
              non-erasable form that may be difficult or impossible for the company to locate. However, 
              Curiosity XR will promptly update, correct, change, or delete personal information stored in 
              databases they actively use, and other readily searchable media, as appropriate and to the 
              extent reasonably and technically practicable.
            </p>
            <p>
              As an end user, if you wish to update, delete, or receive any information that Curiosity XR 
              has about you, you may contact them at <a href="mailto:support@curiosityxr.com" className="text-indigo-400 hover:underline">hello@curiosityxr.com</a>.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Children's privacy</h2>
            <p>
              Our application is not intended for use by children under the age of 13. We do not knowingly 
              collect personal information from children under the age of 13.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to the privacy policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting 
              the new policy on our website or within our application. You are advised to review this privacy 
              policy periodically for any changes.
            </p>
            
          </div>
        </AnimationContainer>
      </Wrapper>
    </main>
  );
} 