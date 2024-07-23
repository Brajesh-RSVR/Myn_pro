import Image from "next/image";

const ProfileCard = ({ name, title, quote, imageUrl }) => {
  return (
    <div className="relative w-[280px] h-[422px] lg:w-[534px] lg:h-[220px]">
      <div className="absolute top-0 left-0">
        <Image
          className="h-[220px] w-[280px] lg:w-[240px] object-cover rounded-2xl"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="flex shadow-2xl flex-col gap-5 absolute bottom-0 lg:top-0 right-0 p-8 rounded-2xl bg-white w-[280px] lg:w-[330px] h-[220px]">
        <div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {name}
          </a>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
        </div>

        <p className="mt-2 text-gray-500">{quote}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
