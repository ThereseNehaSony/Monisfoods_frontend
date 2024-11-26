import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto text-lg text-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Privacy Policy for School Lunch</h2>
        <p className="text-center mb-8 text-sm text-gray-600">(A unit of Monis Foods)</p>

        <p className="text-center mb-6 text-sm text-gray-600">Effective Date: [Insert Date]</p>

        <p className="mb-6">
          This Privacy Policy outlines how School Lunch, a unit of Monis Foods, collects, uses, discloses, and protects
          personal information provided by users of our services. We are committed to safeguarding your privacy and ensuring
          your personal information is handled responsibly.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h3>
        <p className="mb-4">
          We may collect the following types of information when you use our services:
        </p>
        <ul className="list-inside list-disc mb-6">
          <li><strong>Personal Information:</strong> This includes your name, email address, mobile number, and any other details you provide during the signup process or while using our services.</li>
          <li><strong>Student Information:</strong> When you register your children, we may collect information such as their names, classes, schools, and dietary preferences.</li>
          <li><strong>Payment Information:</strong> We may collect information related to your payment method, including credit card details or wallet information. This information is processed securely by our payment gateway provider, Razorpay.</li>
          <li><strong>Usage Data:</strong> We may collect information about your interactions with our website, including IP addresses, browser types, and pages visited.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h3>
        <p className="mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-inside list-disc mb-6">
          <li><strong>To Provide Services:</strong> To facilitate meal bookings, process payments, and deliver meals.</li>
          <li><strong>To Communicate:</strong> To send you updates, notifications, and important information regarding your orders and our services.</li>
          <li><strong>To Improve Our Services:</strong> To analyze user behavior and feedback to enhance our offerings and user experience.</li>
          <li><strong>To Comply with Legal Obligations:</strong> To fulfill any legal requirements or regulations.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing and Disclosure</h3>
        <p className="mb-4">
          We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:
        </p>
        <ul className="list-inside list-disc mb-6">
          <li><strong>With Service Providers:</strong> We may share your information with trusted third-party service providers, such as payment processors and IT service providers, to facilitate our operations.</li>
          <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law, or to protect our rights, privacy, safety, or property, and that of our users or others.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h3>
        <p className="mb-4">
          We implement a variety of security measures to protect your personal information from unauthorized access, use, or disclosure. We use encryption, firewalls, and secure server hosting to safeguard your data.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h3>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-inside list-disc mb-6">
          <li><strong>Access Your Information:</strong> Request a copy of the personal information we hold about you.</li>
          <li><strong>Correct Your Information:</strong> Update or correct any inaccuracies in your personal information.</li>
          <li><strong>Delete Your Information:</strong> Request the deletion of your personal information, subject to certain legal obligations.</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, please contact us using the information provided below.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to This Privacy Policy</h3>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h3>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p className="mb-4">
          <strong>School Lunch</strong><br />
          (A unit of Monis Foods)
        </p>
        <p className="mb-4">
          <strong>Email:</strong> [Your Email Address]
        </p>
        <p className="mb-4">
          <strong>Phone:</strong> [Your Phone Number]
        </p>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            By using our services, you consent to the terms outlined in this Privacy Policy. Thank you for trusting School Lunch with your personal information!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
