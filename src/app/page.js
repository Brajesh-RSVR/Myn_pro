import React from "react";
import Head from "next/head";



import Link from "next/link";

import { TwoLayoutSection } from "./component/TwoLayoutSection";



function PayrollService() {


  return (
    <>
      <Head>
        <title>Myn | Payroll </title>
      </Head>
     
        <Consumer />
    
    </>
  );
}

const Consumer = () => {

  return (
    <div>



      <div className="flex flex-col ">
        {/* <Container> */}
        <TwoLayoutSection
          imgBanner={
            "bg-[url(/assets/myn/payroll/mobile_banner.png)] h-[284px] bg-no-repeat md:h-[560px] bg-contain bg-center md:w-[617px] w-[312px]"
          }
        >
          <h1 className="w-fit font-AthleticsMedium font-medium text-[40px] leading-[48px] text-purple-900 lg:text-[52px] lg:leading-[52px]">
            Save Money with our{" "}
            <span className="text-purple-700">Fully-Funded Payroll</span>
          </h1>
          <p className="font-InterMedium font-medium text-base text-dark-700">
            Experience a payroll service with all the bells and whistles. A
            fully-funded payroll with up to 60 credit days and rates as low as
            6%.
          </p>
          <div className="flex items-center gap-3 px-3 py-6">
            <Link href="/employers/contact">
              <button
                className={
                  " rounded-[40px] border-none bg-white px-[20px]  py-[8px] font-InterMedium"
                }
              >
                <div className="flex items-center justify-center gap-3">
                  <div
                    className={
                      "font-InterRegular font-medium text-[16px]"
                    }
                  >
                    Learn More
                  </div>
                  {/* <ArrowDownIcon className={"h-5 w-5"} /> */}
                </div>
              </button>
            </Link>
          </div>
        </TwoLayoutSection>
        {/* </Container> */}
        <TwoLayoutSection
          classStyle={"lg:flex-row-reverse md:flex-row-reverse"}
          imgBanner={
            "bg-[url(/assets/myn/payroll/mobile_2.png)]  h-[400px] bg-no-repeat md:h-[690px] bg-contain bg-center md:w-[340px] w-[196px]"
          }
        >
          <h1 className="w-fit font-AthleticsMedium text-[36px] leading-[43px] text-purple-900 lg:text-[44px] lg:leading-[52px]">
            Flexible Payroll
          </h1>
          <p className="font-InterMedium font-medium text-base leading-6 text-dark-700 ">
            Myn’s Payroll services are designed to take the hassle out of
            managing your finances. Here’s how it works:
          </p>
          <ul>
            <li className="mb-2 flex w-full gap-3 font-medium text-xl leading-[26px] text-green-800">
              <div className="h-6  w-6 bg-[url(/assets/myn/payroll/check-badge.png)] bg-no-repeat"></div>
              Effortless Onboarding
            </li>
            <li className="mb-2 flex w-full gap-3 font-medium text-xl leading-[26px] text-green-800">
              <div className="h-6  w-6 bg-[url(/assets/myn/payroll/check-badge.png)] bg-no-repeat"></div>
              Transparent Pay
            </li>
            <li className="flex w-full gap-3 font-medium text-xl leading-[26px] text-green-800">
              <div className="h-6  w-6 bg-[url(/assets/myn/payroll/check-badge.png)] bg-no-repeat"></div>
              Multiple Payment Options{" "}
            </li>
          </ul>

          <Link href="/employers/contact">
            {/* <CTAButton className="h-10 w-[167px]" title="Join Now" /> */}
          </Link>
        </TwoLayoutSection>

        <TwoLayoutSection
          imgBanner={
            "bg-[url(/assets/myn/payroll/Advance-Pay.png)]  h-[400px] bg-no-repeat md:h-[690px] bg-contain bg-center md:w-[340px] w-[196px]"
          }
          paraClassStyle={"lg:w-[472px]"}
        >
          <h1 className="w-fit font-AthleticsMedium text-[36px] leading-[43px] text-purple-900 lg:text-[44px] lg:leading-[52px]">
            No More Waiting: Instant Access to Earned Income
          </h1>
          <p className="font-InterMedium font-medium text-base leading-6 text-dark-700 ">
            Struggling with unexpected expenses between paydays? With Myn, your
            workforce can access a low-cost Pay Advance and get the money
            they’ve already earned in their accounts within just one hour. We’re
            revolutionising how contractors get paid, making life as a contract
            worker easier, fairer and less stressful.
          </p>
          <ul>
            <li className="mb-2 flex w-full gap-3 font-medium text-xl leading-[26px] text-green-800">
              <div className="h-6  w-6 bg-[url(/assets/myn/payroll/check-badge.png)] bg-no-repeat"></div>
              Money within One Hour
            </li>
            <li className="mb-2 flex w-full gap-3 font-medium text-xl leading-[26px] text-green-800">
              <div className="h-6  w-6 bg-[url(/assets/myn/payroll/check-badge.png)] bg-no-repeat"></div>
              Peace of Mind
            </li>
            <li className="mb-2 flex w-full gap-3 font-medium text-xl leading-[26px] text-green-800">
              <div className="h-6  w-6 bg-[url(/assets/myn/payroll/check-badge.png)] bg-no-repeat"></div>
              No Credit Checks
            </li>
            <li className="mb-2 flex w-full gap-3 font-medium text-xl leading-[26px] text-green-800">
              <div className="h-6  w-6 bg-[url(/assets/myn/payroll/check-badge.png)] bg-no-repeat"></div>
              Easy Access
            </li>
          </ul>
          <Link href="/employers/contact">
            {/* <CTAButton className="h-10 w-[167px]" title="Join Now" /> */}
          </Link>
        </TwoLayoutSection>

        <div className=" bg-[url(/assets/myn/payroll/mobile-bg.png)] bg-cover bg-right  bg-no-repeat md:bg-[url(/assets/myn/payroll/desktop-bg.png)]    ">
          <TwoLayoutSection
            classStyle={
              "lg:flex-row-reverse md:flex-row-reverse lg:mb-24 mb-[60px] "
            }
            imgBanner={
              "bg-[url(/assets/myn/payroll/all-done.png)]  h-[400px] bg-no-repeat md:h-[690px] bg-contain bg-center md:w-[340px] w-[196px]"
            }
            paraClassStyle={"lg:w-[622px]"}
          >
            <h4 className="font-InterMedium font-bold text-[24px]  leading-8 text-purple-700 ">
              The Myn Web App
            </h4>
            <h1 className="w-fit font-AthleticsMedium text-[36px] leading-[43px] text-purple-900 lg:text-[44px] lg:leading-[52px]">
              Your New Favourite Source-to-Pay Web App
            </h1>
            <p className="font-InterMedium font-medium text-[24px] leading-8 text-dark-700 ">
              User-friendly platform offering game changing job search, fuss
              free payment and amazing rewards.
            </p>
            <div className="flex flex-col justify-between px-6 sm:w-[409px] sm:flex-row">
              <div>
                <ul className="list-disc">
                  <li className="font-InterMedium font-medium text-base leading-6 text-dark-700 ">
                    Search & Match{" "}
                  </li>
                  <li className="font-InterMedium font-medium text-base leading-6 text-dark-700 ">
                    Timesheets{" "}
                  </li>
                  <li className="font-InterMedium font-medium text-base leading-6 text-dark-700 ">
                    Intelligent Payroll{" "}
                  </li>
                  <li className="font-InterMedium font-medium text-base leading-6 text-dark-700 ">
                    Pay Advance
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-disc">
                  <li className="font-InterMedium font-medium text-base leading-6 text-dark-700 ">
                    Compliance{" "}
                  </li>
                  <li className="font-InterMedium font-medium text-base leading-6 text-dark-700 ">
                    Financial Services
                  </li>
                  <li className="font-InterMedium font-medium text-base leading-6 text-dark-700 ">
                    Rewards & Benefits{" "}
                  </li>
                  <li className="font-InterMedium font-medium text-base leading-6 text-dark-700 ">
                    Health & Wellbeing
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:hidden">
              <Link href="/employers/contact">
                {/* <CTAButton className="h-10 w-[187px]" title="Add Web App" /> */}
              </Link>
            </div>
            <div className=" hidden h-44 w-44  bg-[url(/assets/myn/payroll/QR-Code.png)] bg-center bg-no-repeat md:block"></div>
          </TwoLayoutSection>

          <div className="xl:px-[60px] flex w-full flex-col px-[29px]  md:px-[10px] lg:px-[40px]  ">
            <div className="flex flex-col items-center justify-center px-7">
              <h2 className="font-AthleticsMedium font-medium text-[44px] leading-13 text-white lg:text-[52px] lg:leading-14">
                Boundaries are dismantled
              </h2>

              <h2 className="pb-[60px] font-AthleticsMedium font-medium text-[44px] leading-13 text-green-500  lg:text-[52px] lg:leading-14">
                Your Future Work awaits You!
              </h2>
              <p className="pb-10 font-bold text-[32px] leading-[38px] text-white">
                Hear from Contractors Part of the Myn Talent Pools
              </p>
            </div>

            <div className="flex flex-col items-center justify-around gap-6  py-4 pb-10 lg:flex-row">
              <Contractor
                name={"Jane Doe"}
                title={"Service Analyst"}
                quote={
                  "I love having the opportunity to take on new challenges"
                }
                className="bg-[url(/assets/myn/payroll/woman1.png)] bg-center"
              />
              <Contractor
                name={"John Doe"}
                title={"Data Analyst"}
                quote={
                  "I am proud of contributing to a company which is making a difference in people’s lives"
                }
                className="bg-[url(/assets/myn/payroll/man.png)] bg-center"
              />
              <Contractor
                name={"Jo Dee"}
                title={"Contracts Manager"}
                quote={
                  "It’s great having the opportunity to be part of projects which really add value to Connect2Kent and its workforce"
                }
                className="bg-[url(/assets/myn/payroll/woman2.png)]  bg-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

const Contractor = ({
  name,
  title,
  quote,
  className = "",
}) => {
  return (
    <div className=" xl:h-[200px] xl:w-[493px] xl:flex-row 2xl:h-[220px]   2xl:w-[534px] relative flex h-full  flex-col md:mb-3  md:h-[250px] md:w-[534px] md:flex-row lg:w-[580px] lg:flex-row ">
      {" "}
      <div
        className={
          `xl:h-[200px] xl:w-[178px] xl:bg-cover xl:bg-center 2xl:w-[230px] 2xl:bg-right flex h-[300px] w-full rounded-2xl bg-cover bg-center bg-no-repeat  md:h-[250px] md:w-[240px] md:bg-cover md:bg-center
          ${className}`
        }
      />
      <div className="xl:h-[200px] xl:w-[255px] 2xl:w-[330px] flex h-full  w-full  shrink flex-col justify-center gap-5 rounded-2xl bg-white px-8 py-6 shadow-lg sm:w-[430px] md:absolute md:right-0 md:h-[250px] md:w-[330px] md:gap-3 md:p-5  lg:w-2/3">
        <div className="flex flex-col">
          <h3 className="font-InterBold font-bold text-2xl">{name}</h3>
          <p className=" text-myn-700 font-InterRegular text-base font-normal ">
            {title}
          </p>
        </div>
        <p className="leading-1 font-InterRegular font-normal text-dark-700">
          “{quote}”
        </p>
      </div>
    </div>
  );
};

export default PayrollService;
