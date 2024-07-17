import React from "react";

const Hero = () => {
  return (
    
      <div className=" flex lg:flex-row w-[85%] mx-auto items-center flex-col lg:gap-x-10">
        <div className=" lg:w-[40%] ">
          <img className=" w-[250] md:w-[350px] 4xl:[500px]" src="./assets/14.png" alt="" />
        </div>
        <div className="w-[100%] space-y-6">
          <div className=" underline underline-offset-8">
            <h2 className=" text-[20px] lg:text-[24px] font-bold">
              Noorani Qaida: A Comprehensive Guide for Beginners
            </h2>
          </div>
          <div>
            <h3 className="text-[19px] font-bold">Introduction:</h3>
            <p>
              Noorani Qaida is a fundamental instructional guide designed to
              teach beginners the basics of reciting the Quran. It serves as a
              stepping stone for those who wish to embark on a journey of
              understanding and reciting the holy Quran accurately. Noorani
              Qaida lays a strong foundation in Arabic pronunciation, phonetics,
              and Tajweed rules, making it an indispensable tool for beginners
              of all ages.
            </p>
            <hr className="h-[2px] bg-black border-0 my-1" />
          </div>
          <div>
            <h3 className="text-[19px] font-bold">
              Purpose and Significance::
            </h3>
            <p>
              The primary objective of Noorani Qaida is to familiarize learners
              with the Arabic alphabet, proper pronunciation of letters, and the
              rules of Tajweed (the science of reciting the Quran).
            </p>
            <hr className="h-[2px] bg-black border-0 my-1" />
          </div>
          <div>
            <h3 className="text-[19px] font-bold">
              Structure and Methodology::
            </h3>
            <p>
              Noorani Qaida adopts a step-by-step approach, starting with the
              basics and gradually progressing to more complex concepts. It
              begins with the recognition of individual Arabic letters, their
              shapes, and sounds. Learners are then introduced to different
              vowel markings (Harakat) and the pronunciation of letters in
              various positions. The Qaida also covers the rules of Noon
              Sakinah, Meem Sakinah, Madd, and other essential Tajweed rules,
              providing learners with a solid understanding of Quranic
              recitation.
            </p>
            <hr className="h-[2px] bg-black border-0 my-1" />
          </div>

          <div className=" space-y-4">
            <h3 className="text-[19px] font-bold">Benefits:</h3>

            <p>
              <b className=" underline underline-offset-4">
                Clear and Structured Learning:
              </b>{" "}
              <br />
              Noorani Qaida provides a clear and structured learning path for
              beginners. It introduces learners to the Arabic alphabet,
              pronunciation rules, and Tajweed in a systematic manner. By
              following the step-by-step approach of Noorani Qaida, students can
              grasp the fundamentals of Quranic Arabic with ease.{" "}
            </p>
            <p>
              <b className=" underline underline-offset-4">
                Emphasis on Proper Pronunciation:
              </b>{" "}
              <br />
              One of the key benefits of Noorani Qaida is its emphasis on proper
              pronunciation. It focuses on teaching learners the correct way to
              articulate each letter, including the challenging aspects of
              Tajweed . By mastering the pronunciation guidelines presented in
              Noorani Qaida, students can recite the Quran accurately,
              preserving the beauty and integrity of the words of Allah.
            </p>
            <p>
              <b className=" underline underline-offset-4">
                Self-paced Learning:
              </b>{" "}
              <br />
              Noorani Qaida allows individuals to learn at their own pace. It is
              suitable for learners of all ages and backgrounds, enabling them
              to progress gradually and build a strong foundation in Quranic
              Arabic. With self-paced learning, students can allocate time
              according to their convenience and dedicate more attention to
              areas that require additional practice or revision.
            </p>
          </div>
        </div>
      </div>
   
  );
};

export default Hero;
