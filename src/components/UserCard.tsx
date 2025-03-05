"use client";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface Props {
    userName: string;
    userImage: string;
    userUrl: URL | string;
}

export default function UserCard({ userName, userImage, userUrl }: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]  w-auto sm:w-[25rem] h-[25rem] rounded-xl p-6 border  border-gray-700">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          {userName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="mt-4 rounded-b-full flex justify-center">
          <img
            src={userImage}
            height={200}
            width={200}
            className="object-cover rounded-full group-hover/card:shadow-xl min-h-[200px] min-w-[200px] border border-white"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-5">
          <CardItem
            translateZ={20}
            as="a"
            href={userUrl}
            target="_blank"
            className="px-4 py-3 rounded-md text-xs font-normal  text-black bg-white cursor-pointer"
            OnClick={() => {
              window.open(userUrl || "404", "_blank");
            }}
          >
            Go To User →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}