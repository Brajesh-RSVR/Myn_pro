import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  content: {
    idealText: string;
    feeText: string;
  };
  alertMessage: any;
}

export const PlanCard: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  alertMessage,
}) => {
  return (
    <div className="flex h-[360px] w-[300px] flex-col gap-6 rounded-xl border-2 border-purple-700 bg-[#EEEAFFB2] p-10 md:h-[360px] md:w-[520px] ">
      <div className="flex  flex-col items-center gap-3 ">
        <div className="text-center font-medium text-base leading-6 text-purple-700">
          {subtitle}
        </div>
        <p className="font-AthleticsMedium text-[36px] leading-11 text-purple-900">
          {title}
        </p>
      </div>

      <ul>
        <li className="mb-6 flex w-full gap-1 font-medium text-xl leading-[28px] text-dark-700">
          <div className="h-6 w-6 min-w-6 bg-[url(/assets/myn/payroll/check-badge.png)] bg-no-repeat"></div>
          <span>
            <b className="font-InterBold text-green-800">Ideal For</b>:
            {content.idealText}
          </span>
        </li>
        <li className="mb-3 flex w-full gap-1 font-medium text-xl leading-7 text-dark-700">
          <div className="h-6 w-6 min-w-6 bg-[url(/assets/myn/payroll/check-badge.png)] bg-no-repeat"></div>
          <span>
            {" "}
            <b className="font-InterBold  text-green-800">Placement Fees</b>:
            {content.feeText}
          </span>
        </li>
      </ul>

      <div className="w-full max-w-[250px]  text-start font-AthleticsMedium text-sm leading-4 text-dark-700">
        *subject to complexity of vacancies and candidate availability.{" "}
        <Link href="#details">
          <span className="font-bold text-purple-700  underline underline-offset-1">
            View details ↓
          </span>
        </Link>
      </div>
      {/* {alertMessage} */}
    </div>
  );
};
