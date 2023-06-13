import React from "react";
import CustomButton from "./CustomButton";
import "./Buttons.css";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-[80vh]">
      <div className="w-full mb-10">
        <h1 className="text-3xl text-center">
          Leave <span className="text-teal-400">Message</span>
        </h1>
      </div>

      <div className=" flex justify-around">
        <div className="text-center flex flex-col gap-3 p-4">
          <h1 className="text-4xl">Shanti lal</h1>
          <p className="text-2xl">shantilalpatliya18@gmail.com</p>
          <p className="text-xl">+91 9784102014</p>
          <div className="flex gap-2">
            <button className="twitter-button">
              <span className="icon">
                <svg
                  height="33"
                  viewBox="0 0 60 60"
                  width="33"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="m30 60c16.5685433 0 30-13.4314567 30-30s-13.4314567-30-30-30-30 13.4314567-30 30 13.4314567 30 30 30z"
                      fill="#00acee"
                    ></path>
                    <path
                      d="m41.0521385 18.4366943c-1.2089539-1.3744928-2.9316-2.2502302-4.838077-2.2819633-3.6604615-.0609279-6.6284077 3.0321924-6.6284077 6.908385 0 .5501252.0586385 1.0865774.1717154 1.6015572-5.5087846-.3573206-10.3929-3.2259026-13.6619538-7.5499514-.5705539 1.0361399-.8975077 2.2471609-.8975077 3.5444286 0 2.455838 1.1701846 4.6353768 2.9487231 5.922267-1.0865077-.0479675-2.1085616-.3768796-3.0021923-.9164654-.0006462.029493-.0006462.0589929-.0006462.0890105 0 3.4295872 2.2848 6.3067451 5.3170385 6.9769758-.556177.1575997-1.1417539.240078-1.7462308.2360697-.4271077-.0028322-.8424231-.0501962-1.2470769-.13524.8433923 2.8126097 3.2911846 4.8649983 6.1917692 4.93286-2.2684846 1.8830683-5.1264231 3.0045653-8.232 2.998159-.5350154-.0011037-1.0626-.035675-1.5811385-.1021874 2.933377 2.0127143 6.4174385 3.1845715 10.1606077 3.1855535 12.1917923.0031987 18.8589693-10.6066422 18.8589693-19.8093844 0-.3019324-.0066231-.6022496-.0192231-.9011167 1.2950538-.9649855 2.4187154-2.1748628 3.3073385-3.556433-1.1886.5357972-2.4662077.8916496-3.8068154 1.0409189 1.3683923-.8421727 2.419523-2.1900418 2.9143154-3.8063795-1.2808385.7767339-2.6993077 1.3337545-4.2092077 1.6229359z"
                      fill="#fff"
                    ></path>
                  </g>
                </svg>
              </span>
              <span className="text1">Follow me</span>
              <span className="text2">Twitter</span>
            </button>

            <button className="github-button">
              <span className="icon">
                <svg
                  viewBox="0 0 24 24"
                  height="33"
                  width="33"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </span>
              <span className="text1">Follow me</span>
              <span className="text2">Github</span>
            </button>

            <button className="linkedin-button">
              <span className="icon">
                <svg
                  fill="none"
                  height="33"
                  viewBox="0 0 120 120"
                  width="33"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipRule="evenodd" fillRule="evenodd">
                    <path
                      d="m120 60.0002c0 33.1366-26.8633 59.9998-60 59.9998-33.138 0-60-26.8632-60-59.9998 0-33.1376 26.8617-60.0002 60-60.0002 33.1364.00031715 60 26.8626 60 60.0002z"
                      fill="#2867b2"
                    ></path>
                    <g fill="#fff">
                      <path d="m63.8771 54.3451c.2959-.3181.411-.4154.4938-.5356 4.0325-5.884 9.7919-7.6141 16.5119-6.5811 7.7657 1.1953 12.7354 6.6312 14.004 14.949.3009 1.9723.4506 3.9525.449 5.9464-.0047 8.2817-.0177 16.563.0178 24.844.0054.9327-.2242 1.2067-1.1801 1.195-4.3386-.052-8.6787-.0514-13.0179 0-.9493.0104-1.1925-.2601-1.1874-1.1944.0352-7.7238.0228-15.4472.0152-23.1703-.0029-1.7554-.1234-3.4997-.6169-5.1996-1.5816-5.4524-7.7846-7.3664-12.2018-3.7408-2.3866 1.9581-3.3196 4.5473-3.3015 7.5947.0386 7.2858.0114 14.5713.0114 21.8571 0 .9558-.0533 1.9146.0162 2.8647.0608.8259-.2766.9848-1.0248.98-4.4194-.0298-8.8379-.033-13.2567.0019-.8017.0063-1.09-.1567-1.0808-1.038.0647-6.5672.091-13.1375.0939-19.7052.0012-8.0822-.0149-16.1637-.0714-24.2455-.006-.8848.1792-1.1465 1.0932-1.1363 4.4194.0495 8.8383.0422 13.2571.0051.7957-.0073 1.0177.2321.9923 1.0063-.0549 1.6656-.0165 3.3335-.0165 5.3026z"></path>
                      <path d="m40.1241 71.1028c0 7.2826-.0155 14.5659.0187 21.8491.0038.9045-.1785 1.2264-1.1645 1.2134-4.377-.0584-8.7549-.0447-13.1324-.0079-.8129.0066-1.0869-.1963-1.086-1.0507.0213-14.6861.0178-29.3712-.0041-44.0569-.0009-.765.1856-1.0209.9882-1.0133 4.4579.038 8.9154.0428 13.3722-.0032.8896-.0098 1.0279.3149 1.0244 1.1008-.027 7.3235-.0152 14.6458-.0165 21.9687z"></path>
                      <path d="m32.5678 25.8388c5.8726.0064 9.6878 4.6579 8.2959 10.1135-1.0517 4.1194-5.3122 6.491-10.2299 5.6924-5.2234-.8477-8.1348-5.9452-6.21-10.8714 1.2013-3.0767 4.2757-4.9392 8.144-4.9345z"></path>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="text1">Follow me</span>
              <span className="text2">LinkedIn</span>
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              className="border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <input type="text" className="border border-gray-200 rounded-md" />
            <textarea className="border border-gray-200 rounded-md" />
            <CustomButton title="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;