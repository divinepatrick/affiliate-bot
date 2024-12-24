import React, { useState } from 'react';
import axios from 'axios';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Home = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/query', { query });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <main className="container mx-auto p-4">
      <section className="my-8 text-center relative" id="home">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          loop
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {[
            {
              image:
                'https://storage.googleapis.com/a1aa/image/jXoU6TBC3r7rEJWeR8OdEfr5pQfpXeho85GzXYdmjf0t9COfE.jpg',
              title: 'Welcome to AI Affiliate Marketing Automation Platform',
              description:
                'Automate your affiliate marketing campaigns with our AI-powered tools and strategies designed to maximize your ROI and streamline your marketing efforts.',
              buttonText: 'Learn More',
            },
            {
              image:
                'https://storage.googleapis.com/a1aa/image/HuEzcdhFg2rmL5Eez0zxSVe7uqXLkLMKTSrofFtWQ8skvgznA.jpg',
              title: 'Revolutionize Your Marketing',
              description:
                'Leverage AI to transform your affiliate marketing strategies and achieve unprecedented success.',
              buttonText: 'Get Started',
            },
            {
              image:
                'https://storage.googleapis.com/a1aa/image/wgXzgvF6H2KELxqtgwOaQpCuQaYFbCl9dlqjqWIwgbK8FceJA.jpg',
              title: 'AI-Driven Insights',
              description:
                'Gain valuable insights and optimize your campaigns with our AI-powered analytics tools.',
              buttonText: 'Discover More',
            },
            {
              image:
                'https://storage.googleapis.com/a1aa/image/d32Z7rqCCJ49G94HjhXtN7MSh7UBD6PSsFJ8SDZ1TUB6FceJA.jpg',
              title: 'Optimize Your Strategy',
              description:
                'Use AI to fine-tune your marketing strategies and achieve better results.',
              buttonText: 'Learn More',
            },
            {
              image:
                'https://storage.googleapis.com/a1aa/image/safhj29V0c29Lim9S91mzXDECqsZIwUtOOZa3vCo8O11L48JA.jpg',
              title: 'Data-Driven Decisions',
              description:
                'Make informed decisions with AI-powered data analytics and insights.',
              buttonText: 'Get Started',
            },
          ].map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img
                src={slide.image}
                alt={slide.title}
                height="800"
                width="1200"
                className="w-full h-auto"
              />
              <div className="content">
                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg mb-4">{slide.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  {slide.buttonText}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="my-8 relative" id="products">
        <img
          alt="Technology background with AI elements"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          height="1080"
          src="https://storage.googleapis.com/a1aa/image/wgXzgvF6H2KELxqtgwOaQpCuQaYFbCl9dlqjqWIwgbK8FceJA.jpg"
          width="1920"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Our AI-Powered Marketing Solutions
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'AI-Powered Campaign Optimizer',
                description:
                  'Optimize your campaigns with real-time AI analytics and insights.',
                image:
                  'https://storage.googleapis.com/a1aa/image/v5lIPhxeTlTyXKV9pwRnlATPzJxpWTi6Jokg6B2QRcj4L48JA.jpg',
                buttonText: 'Learn More',
              },
              {
                title: 'AI-Driven Audience Targeting',
                description:
                  'Identify and target the right audience with precision using AI-driven tools.',
                image:
                  'https://storage.googleapis.com/a1aa/image/O5osXWC0n2ZoCROdLDBaF1N1i5JfNumz5e8jUlP1HQbuXw5TA.jpg',
                buttonText: 'Learn More',
              },
              {
                title: 'AI-Powered Ad Creative Generator',
                description:
                  'Generate high-converting ad creatives with the help of AI.',
                image:
                  'https://storage.googleapis.com/a1aa/image/ryXd8mtW2daeZa1cpRMRWRmw0qXevrhyYbLZfLbrkmtUvgznA.jpg',
                buttonText: 'Learn More',
              },
              {
                title: 'AI-Enhanced Performance Tracking',
                description:
                  'Track and analyze your performance metrics with AI-enhanced tools.',
                image:
                  'https://storage.googleapis.com/a1aa/image/3QQiu99g5OZ8BRrDBPJyqPlA9KPeXclokWcyUZji9u9zL48JA.jpg',
                buttonText: 'Learn More',
              },
            ].map((product, index) => (
              <div key={index} className="bg-white bg-opacity-80 p-4 rounded shadow">
                <img
                  alt={product.title}
                  className="w-full h-40 object-cover rounded mb-4"
                  height="400"
                  src={product.image}
                  width="600"
                />
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                <p className="text-lg mb-4">{product.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  {product.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="my-8 text-center relative" id="search">
        <img
          alt="Abstract background with AI elements"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          src="https://storage.googleapis.com/a1aa/image/HuEzcdhFg2rmL5Eez0zxSVe7uqXLkLMKTSrofFtWQ8skvgznA.jpg"
        />
        <div className="relative z-10 px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
          <h1 className="text-4xl font-bold mb-4">
            Find the Best Affiliate Marketing Platforms
          </h1>
          <p className="text-lg mb-8">
            Get personalized recommendations for the best and highest paid affiliate marketing platforms based on your niche and performance metrics.
          </p>
          <div>
            <form
              id="chat-form"
              className="flex flex-col md:flex-row md:items-center md:justify-center"
              onSubmit={handleSubmit}
            >
              <input
                id="user-input"
                type="search"
                placeholder="Ask me anything..."
                className="py-2 pl-10 text-sm text-gray-700"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Search
              </button>
            </form>
            {response && <div className="mt-4">{response}</div>}
          </div>
          <div id="chat-history" className="mt-8"></div>
        </div>
      </section>
      <section className="my-8 text-center relative" id="contact">
        <div className="relative z-10 px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg mb-8">
            Have any questions or want to learn more about our products? Contact us today!
          </p>
          <form className="max-w-2xl mx-auto">
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="name">Name</label>
              <input className="w-full px-3 py-2 border rounded" type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="email">Email</label>
              <input className="w-full px-3 py-2 border rounded" type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 border rounded" id="message" name="message" rows="4" required></textarea>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded" type="submit">Send</button>
          </form>
        </div>
      </section>
    </main>
    
  );
};

export default Home;