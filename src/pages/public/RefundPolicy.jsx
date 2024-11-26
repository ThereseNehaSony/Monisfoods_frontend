import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold">Refund Policy for School Lunch</h1>
      <p className="mt-2"><strong>Effective Date:</strong> [Insert Date]</p>

      <p>
        At School Lunch, we strive to provide high-quality meal services and ensure customer satisfaction. Our refund policy outlines
        the conditions under which refunds may be issued to users of our platform. By using our services, you agree to the terms of
        this refund policy.
      </p>

      <h2 className="mt-6 text-xl font-semibold">1. Refund Eligibility</h2>
      <p>Refunds may be granted under the following circumstances:</p>
      <ul className="list-disc pl-5">
        <li><strong>Cancellation of Meals:</strong> If you cancel your meal order before the designated cancellation deadline,
          you may be eligible for a refund, which will be credited to your wallet for future use.</li>
        <li><strong>School Leave:</strong> If your school announces a leave day that affects your scheduled meals, you will receive
          a credit for the meal cost corresponding to the canceled meals, which will be added to your wallet.</li>
        <li><strong>User-Initiated Leave:</strong> If you notify us in advance about a planned leave and request a refund for the
          meal on that specific day, we will credit the meal cost to your wallet.</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">2. Cancellation Deadlines</h2>
      <p>To be eligible for a refund, cancellations must be made by the following deadlines:</p>
      <ul className="list-disc pl-5">
        <li><strong>Breakfast:</strong> Cancellations must be made by 8 PM on the previous day.</li>
        <li><strong>Lunch and Snacks:</strong> Cancellations must be made by 8 AM on the same day.</li>
      </ul>
      <p>Cancellations made after these deadlines will not be eligible for a refund.</p>

      <h2 className="mt-6 text-xl font-semibold">3. Refund Process</h2>
      <p>Refunds will be processed automatically to the user’s wallet within 24 hours of the cancellation request or the announcement of a school leave.</p>
      <p>Users will receive a notification confirming the amount credited to their wallet along with the updated balance.</p>

      <h2 className="mt-6 text-xl font-semibold">4. Non-Refundable Items</h2>
      <p>Certain items and services are non-refundable:</p>
      <ul className="list-disc pl-5">
        <li>Meals ordered and consumed without cancellation prior to the deadlines.</li>
        <li>Wallet credits that are used for bookings.</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">5. Contact Us for Refunds</h2>
      <p className='mb-2'>If you believe you are eligible for a refund or have questions regarding your eligibility, please contact us at:</p>
      <p><strong>School Lunch</strong><br />
        (A unit of Monis Foods)<br />
        [Your Contact Information]<br />
        [Your Email Address]<br />
        [Your Phone Number]</p>

      <h2 className="mt-6 text-xl font-semibold">6. Changes to This Refund Policy</h2>
      <p>School Lunch reserves the right to update this refund policy at any time. Changes will be posted on our website, and the effective date will be updated. We encourage you to review this policy periodically to stay informed of our practices.</p>

      <p>Thank you for choosing School Lunch, and we appreciate your understanding of our refund policy!</p>
    </div>
  );
};

export default RefundPolicy;
