import about_image from "../images/about_img.avif";

const About = () => {
  return (
    <div className="relative">
      <div className="absolute pl-96 pt-80">
        <h1 className="text-5xl font-bold pb-4 pt-20 pl-32">
          Instant Food, for Instant Hunger
        </h1>
        <p className="text-lg pl-32 ">
          Welcome to <span className="hightlight">Hungary Hub</span>, where our
          passion for healthy food meets culinary excellence.
          <br /> We are a dedicated team of food enthusiasts on a mission to
          provide you with <br />a delightful dining experience that not only
          tantalizes your taste buds but also nourishes your body.
        </p>
      </div>
      <img className="" src={about_image} alt="food"></img>
    </div>
  );
};

export default About;
