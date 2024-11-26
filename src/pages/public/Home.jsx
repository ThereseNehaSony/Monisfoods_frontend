
import React from 'react';
import { Link } from 'react-router-dom';
import breakfast from '../../assets/breakfast.jpg';
import lunch from '../../assets/lunchh.jpeg';
import snack from '../../assets/snack.webp';

function Home() {
  return (
    <div className="">
      {/* Landing Session */}
      <div className="lg:h-screen bg-color lg:flex lg:items-center overflow-clip">
        <div className="lg:w-1/2 flex-shrink-0 text-white pt-32 px-10 lg:pl-48 ">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Monis Food: Authentic Flavors, Exceptional Service
          </h1>
          <p className="font-semibold text-gray-500 text-sm lg:text-lg mb-10 lg:mb-3">
            At Monis Food, we believe that eating healthy should be easy and enjoyable for everyone...
          </p>
        </div>
      </div>

      {/* Meal Category Cards */}
      <section className="wrapper">
        <div className="container-fostrap">
          <div className="content">
            <div className="container mx-auto">
              <div className="flex flex-wrap -mx-2">
                {/* Breakfast Card */}
                <div className="w-full sm:w-1/3 px-2 mb-4">
                  <div className="card bg-white shadow-md hover:shadow-xl rounded-3xl overflow-hidden">
                    <a className="img-card block overflow-hidden flex justify-center items-center">
                      <img
                        src={breakfast}
                        className="w-44 h-44 object-cover rounded-full transition-transform duration-300 hover:scale-110"
                      />
                    </a>
                    <div className="card-content p-4 text-left">
                      <h4 className="card-title font-bold text-xl mb-2">
                        <Link
                          to="/menu?category=breakfast"
                          className="text-black no-underline text-center block"
                        >
                          Breakfast
                        </Link>
                      </h4>
                      <p className="text-gray-700 text-center">Book by 8pm the previous day</p>
                    </div>
                    <div className="card-read-more border-t border-gray-200">
                      {/* <Link
                        to="/menu?category=breakfast"
                        className="block text-center py-2 font-semibold uppercase text-blue-600"
                      >
                        Book Now
                      </Link> */}
                    </div>
                  </div>
                </div>

                {/* Lunch Card */}
                <div className="w-full sm:w-1/3 px-2 mb-4">
                  <div className="card bg-white shadow-md hover:shadow-xl rounded-3xl overflow-hidden">
                    <a className="img-card block overflow-hidden flex justify-center items-center">
                      <img
                        src={lunch}
                        className="w-44 h-44 object-cover rounded-full transition-transform duration-300 hover:scale-110"
                      />
                    </a>
                    <div className="card-content p-4 text-left">
                      <h4 className="card-title font-bold text-xl mb-2">
                        <Link
                          to="/menu?category=lunch"
                          className="text-black no-underline text-center block"
                        >
                          Lunch
                        </Link>
                      </h4>
                      <p className="text-gray-700 text-center">Book by 8pm the previous day</p>
                    </div>
                    <div className="card-read-more border-t border-gray-200">
                      {/* <Link
                        to="/menu?category=lunch"
                        className="block text-center py-2 font-semibold uppercase text-blue-600"
                      >
                        Book Now
                      </Link> */}
                    </div>
                  </div>
                </div>

                {/* Snack Card */}
                <div className="w-full sm:w-1/3 px-2 mb-4">
                  <div className="card bg-white shadow-md hover:shadow-xl rounded-3xl overflow-hidden">
                    <a className="img-card block overflow-hidden flex justify-center items-center">
                      <img
                        src={snack}
                        className="w-44 h-44 object-cover rounded-full transition-transform duration-300 hover:scale-110"
                      />
                    </a>
                    <div className="card-content p-4 text-left">
                      <h4 className="card-title font-bold text-xl mb-2">
                        <Link
                          to="/menu?category=snack"
                          className="text-black no-underline text-center block"
                        >
                          Snack
                        </Link>
                      </h4>
                      <p className="text-gray-700 text-center">Book by 8pm the previous day</p>
                    </div>
                    <div className="card-read-more border-t border-gray-200">
                      {/* <Link
                        to="/menu?category=snack"
                        className="block text-center py-2 font-semibold uppercase text-blue-600"
                      >
                        Book Now
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
