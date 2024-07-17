import React from "react";

const QuranRecitation = () => {
  return (
    <div className=" flex lg:flex-row w-[85%] mx-auto items-center flex-col lg:gap-x-10">
      <div className=" lg:w-[40%] ">
        <img
          className=" w-[250] md:w-[350px] 4xl:[500px]"
          src="./assets/23.jpg"
          alt="23"
        />
      </div>
      <div className="w-[100%] space-y-6">
        <div className=" underline underline-offset-8">
          <h2 className=" text-[20px] lg:text-[24px] font-bold">
            Quran Recitation: Enhancing Your Spiritual Journey
          </h2>
        </div>
        <div>
          <h3 className="text-[19px] font-bold">Introduction:</h3>
          <p>
            Our Quran Recitation Course offers a transformative journey for
            individuals seeking to deepen their understanding of the Quran and
            develop proficiency in recitation. This comprehensive course is
            designed to provide a solid foundation in Quranic recitation,
            Tajweed (pronunciation rules), and the application of melodious
            recitation techniques.
          </p>
          <hr className="h-[2px] bg-black border-0 my-1" />
        </div>
        <div className=" space-y-4">
          <h3 className="text-[19px] font-bold">Course Overview:</h3>
          <p>
            In our Quran Recitation Course, you will embark on an enlightening
            voyage that spans across various aspects of Quranic recitation. Our
            expert instructors will guide you through the following key areas of
            study:
          </p>
          <div className=" space-y-2">
            <p>
              <b className=" underline underline-offset-4">
                Basic Arabic Pronunciation:
              </b>{" "}
              <br />
              Develop a strong foundation in Arabic pronunciation, ensuring
              accurate articulation of Arabic letters and sounds. Mastering the
              fundamentals of pronunciation is crucial for proper Quranic
              recitation.
            </p>
            <p>
              <b className=" underline underline-offset-4">
                Tajweed Principles:
              </b>{" "}
              <br />
              Immerse yourself in the art of Tajweed, the set of rules that
              governs the correct pronunciation and recitation of the Quran.
              Learn about the characteristics of letters, the rules of
              elongation, the rules of stoppage, and other essential Tajweed
              principles.
            </p>
            <p>
              <b className=" underline underline-offset-4">
                Quranic Verses and Chapters:
              </b>{" "}
              <br />
              Explore the significance, themes, and context of selected Quranic
              verses and chapters. Gain a deeper understanding of the profound
              messages and teachings contained within the verses you recite,
              enabling you to connect with the Quran on a more profound level.
            </p>
            <p>
              <b className=" underline underline-offset-4">
                Melodious Recitation:
              </b>{" "}
              <br />
              Discover the beauty of melodious Quranic recitation. Learn
              techniques to enhance your recitation, including modulation,
              intonation, and rhythmic patterns. Develop the skill of reciting
              with proper melody, improving your ability to engage with the
              Quran's poetic and linguistic brilliance.
            </p>
            <p>
              <b className=" underline underline-offset-4">
                Recitation Practice and Feedback:
              </b>{" "}
              <br />
              Engage in regular recitation practice sessions under the guidance
              of experienced instructors. Receive constructive feedback and
              personalized support to refine your recitation skills, ensuring
              continuous improvement throughout the course.
            </p>
            <p>
              <b className=" underline underline-offset-4">
                Spiritual Reflection and Connection:
              </b>{" "}
              <br />
              Nurture your spiritual growth through the Quran. Learn techniques
              to deepen your reflection on the verses, cultivate mindfulness
              during recitation, and develop a profound connection with the
              divine message.
            </p>
            <p>
              <b className=" underline underline-offset-4">
                Recitation Etiquette:
              </b>{" "}
              <br />
              Discover the etiquettes and manners of Quranic recitation.
              Understand the importance of reverence, humility, and focus during
              recitation, creating an atmosphere of sincerity and devotion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranRecitation;
