import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">School Lunch</h2>
      <h2 className="text-1xl font-bold text-gray-900 mb-4">(A Unit of Monis Foods)</h2>
      
        <h6 className="text-2xl font-bold text-gray-900 mb-4">About Us</h6>
        <p className="text-lg text-gray-700 mb-8">
        Welcome to School Lunch, a dedicated unit of Monis Foods, where we prioritize the nutritional needs and preferences of students, teachers, and parents alike. Our mission is to provide wholesome, delicious, and convenient meal options that fuel young minds and support their daily activities.
At School Lunch, we understand the critical role that nutrition plays in a child's growth and learning. That’s why we are committed to offering a diverse menu that meets the dietary requirements of various age groups while ensuring every meal is satisfying and enjoyable.

        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">What We Offer</h3>
            <li>
        	Nutritious Meal Plans: Our meals are thoughtfully crafted by nutritionists to provide a balanced diet, helping students stay energized and focused throughout the school day.</li>
<li>Variety and Choice: We offer a range of options for breakfast, lunch, and snacks, catering to different tastes and dietary restrictions, including vegetarian and allergy-friendly choices.</li>
<li>	Easy Ordering: With our user-friendly online platform, parents can easily book meals for their children, whether it's for the entire week or just a single day.</li>
<li>	Flexible Booking Options: We provide both weekly and daily booking options, allowing families to customize meal plans according to their needs and schedules.</li>

            
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Our Commitment</h3>
            <p className="text-gray-700 mt-4">
            At School Lunch, we are dedicated to fostering a healthy school environment by providing high-quality meals that students will love. 
            Our focus on fresh ingredients and responsible sourcing reflects our commitment to sustainability and community health.
            </p>
          </div>

          
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-700">
          Join us at School Lunch, where nourishing meals create brighter futures for our children!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
