import BackgroundCircle from "@/components/BackgroundCircle";
import Question from "./question-section";
import Tabs from "./tabs";
import {
  MainScreenProps,
  KeyConceptProps,
  Message,
} from "@/types/chat/chat-types";
import Navbar from "./navbar";
const MainScreen = ({
  url,
  detailedSummary,
  concepts,
  title,
  description,
  id,
  collection,
}: MainScreenProps) => {
  return (
    <div className="w-full h-full flex justify-between z-0">
      {/* <Navbar /> */}
      <BackgroundCircle
        radius="15%"
        position={{ top: "55%", left: "25%" }}
        color="#7F4205"
        opacity={0.3}
        blur={120}
      />
      <BackgroundCircle
        radius="20%"
        position={{ top: "70%", left: "80%" }}
        color="#824E09"
        opacity={0.8}
        blur={170}
      />
      {/* <BackgroundCircle
        radius="20%"
        position={{ top: "15%", left: "65%" }}
        color="#824E09"
        opacity={0.6}
        blur={140}
      /> */}
      <BackgroundCircle
        radius="20%"
        position={{ top: "70%", left: "50%" }}
        color="#824E09"
        opacity={0.5}
        blur={150}
      />
      <BackgroundCircle
        radius="10%"
        position={{ top: "70%", left: "30%" }}
        color="#a74d11"
        opacity={1}
        blur={150}
      />
      <BackgroundCircle
        radius="25%"
        position={{ top: "50%", left: "30%" }}
        color="#9F5000"
        opacity={0.4}
        blur={120}
      />
      {/* <BackgroundCircle
        radius="45%"
        position={{ top: "0%", left: "40%" }}
        color="#a74d11"
        opacity={0.3}
        blur={150}
      /> */}
      <div className="w-7/12  hidden md:block z-20 ">
        <Tabs
          url={url}
          detailedSummary={detailedSummary}
          concepts={concepts}
          title={title}
          description={description}
        />
      </div>
      {/* <div className="bg-gray-900 w-[2px]  hidden md:block"></div> */}
      <Question id={id} collection={collection} />
    </div>
  );
};

export default MainScreen;
