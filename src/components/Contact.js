const Contact = () => {
  return (
    <div>
      <div className="w-full md:w-96 md:max-w-full mx-auto my-20">
        <p className="text-5xl font-bold text-green-400 pb-4 text-center">
          Contact Us
        </p>
        <div className="p-6 border border-gray-300 sm:rounded-md">
          <form>
            <label className="block mb-6">
              <span className="text-gray-700">Your name</span>
              <input
                type="text"
                name="name"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="enter your name"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                className=" block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="xyz@gmail.com"
                required
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Message</span>
              <textarea
                name="message"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="3"
                placeholder="Tell us what you're thinking about Hungary Hub"></textarea>
            </label>
            <div className="mb-6">
              <button
                type="submit"
                className="h-10 px-5 text-white bg-green-400 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-green-500">
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
