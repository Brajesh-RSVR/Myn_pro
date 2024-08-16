import Link from "next/link";
import React from "react";


// Define TypeScript interfaces for props
interface Feature {
  title: string;
  description: string;
}

interface PlanDetailsCardProps {
  title?: string;
  features?: Feature[];
}

// Update the component to use TypeScript types
export const PlanDetailsCard: React.FC<PlanDetailsCardProps> = ({
  title,
  features,
}) => {
  return (
    <div className="flex flex-col gap-6 md:w-[600px]">
      {title && (
        <div className="text-start font-medium text-xl leading-7 text-purple-700">
          {title}
        </div>
      )}
      <ul>
        {features?.map((item, index) => (
          <li key={index} className="mb-6 flex flex-col">
            <div className="mb-3 flex w-full gap-3 font-medium text-xl leading-[26px] text-green-800">
              <div className="h-6 w-6 min-w-6 bg-[url(/assets/myn/payroll/check-badge.png)] bg-no-repeat"></div>
              {item.title}
            </div>
            <p className="font-medium text-base leading-6 text-dark-700">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
      <div className="w-[172px] md:w-[190px]">
        <Link href="/employers/contact" passHref>
         button
        </Link>
      </div>
    </div>
  );
};
