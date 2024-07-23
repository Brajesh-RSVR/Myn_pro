import TwoLayoutSection from "./component";
import { images } from "../../src/app/assets";
import Image from "next/image";
import Header from "./component/header";
import FooterSection from "./component/footer/footer";
import ProfileCard from "./component/profileCard/profileCard";
import Testimonial from "./component/testimonial/testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <TwoLayoutSection imgBanner={images.bannerImageMobile}>
          <h1 className="w-fit text-[40px] leading-[40px] lg:text-[52px] lg:leading-[52px]">
            Save Money with our{" "}
            <span className="text-[#763FEC]">Fully-Funded Payroll</span>
          </h1>
          <p className="text-base">
            Experience a payroll service with all the bells and whistles. A
            fully-funded payroll with up to 60 credit days and rates as low as
            6%.
          </p>
          <div className="flex gap-3 items-center py-6 px-3">
            <button className="text-[20px] font-medium">Learn More</button> |
          </div>
        </TwoLayoutSection>
        <TwoLayoutSection
          classstyle={"lg:flex-row-reverse"}
          imgBanner={images.mobileImage}
        >
          <h1 className="w-fit text-[40px] leading-[40px] lg:text-[52px] lg:leading-[52px]">
            Flexible Payroll
          </h1>
          <p className="text-base">
            Myn’s Payroll services are designed to take the hassle out of
            managing your finances. Here’s how it works:
          </p>
          <ul>
            <li className="text-xl font-medium text-[##2C7600] flex gap-3 w-full">
              <div className="w-6 h-6">
                <Image src={images.checkBadge} alt="" />
              </div>
              Effortless Onboarding
            </li>
            <li className="text-xl font-medium text-[##2C7600] flex gap-3 w-full">
              <div className="w-6 h-6">
                <Image src={images.checkBadge} alt="" />
              </div>
              Transparent Pay
            </li>
            <li className="text-xl font-medium text-[##2C7600] flex gap-3 w-full">
              <div className="w-6 h-6">
                <Image src={images.checkBadge} alt="" />
              </div>
              Multiple Payment Options{" "}
            </li>
          </ul>
          <div className="flex gap-3 w-fit text-[#0C0429] items-center bg-[#93EE5C] rounded-[40px] py-3 px-6">
            <button className="text-[20px]">Join Now</button> |
          </div>
        </TwoLayoutSection>
        <TwoLayoutSection
          imgBanner={images.mobileImage}
          paraClassStyle={"lg:w-[472px]"}
        >
          <h1 className="w-fit text-[40px] leading-[40px] lg:text-[52px] lg:leading-[52px]">
            No More Waiting: Instant Access to Earned Income
          </h1>
          <p className="text-base">
            Struggling with unexpected expenses between paydays? With Myn, your
            workforce can access a low-cost Pay Advance and get the money
            they’ve already earned in their accounts within just one hour. We’re
            revolutionising how contractors get paid, making life as a contract
            worker easier, fairer and less stressful.
          </p>
          <ul>
            <li className="text-xl font-medium text-[##2C7600] flex gap-3 w-full">
              <div className="w-6 h-6">
                <Image src={images.checkBadge} alt="" />
              </div>
              Money within One Hour
            </li>
            <li className="text-xl font-medium text-[##2C7600] flex gap-3 w-full">
              <div className="w-6 h-6">
                <Image src={images.checkBadge} alt="" />
              </div>
              Peace of Mind
            </li>
            <li className="text-xl font-medium text-[##2C7600] flex gap-3 w-full">
              <div className="w-6 h-6">
                <Image src={images.checkBadge} alt="" />
              </div>
              No Credit Checks
            </li>
            <li className="text-xl font-medium text-[##2C7600] flex gap-3 w-full">
              <div className="w-6 h-6">
                <Image src={images.checkBadge} alt="" />
              </div>
              Easy Access
            </li>
          </ul>
          <div className="flex gap-3 w-fit text-[#0C0429] items-center bg-[#93EE5C] rounded-[40px] py-3 px-6">
            <button className="text-[20px]">Join Now</button> |
          </div>
        </TwoLayoutSection>
        <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 z-10">
          <TwoLayoutSection
            classstyle={"lg:flex-row-reverse"}
            imgBanner={images.mobileImage}
            paraClassStyle={"lg:w-[622px]"}
          >
            <h1 className="w-fit text-[40px] leading-[40px] lg:text-[52px] lg:leading-[52px]">
              Your New Favourite Source-to-Pay Web App
            </h1>
            <p className="text-base">
              User-friendly platform offering game changing job search, fuss
              free payment and amazing rewards.
            </p>
            <div className="flex flex-col lg:flex-row px-6 lg:w-[409px] justify-between">
              <div>
                <ul class="list-disc">
                  <li>Search & Match </li>
                  <li>Timesheets </li>
                  <li>Intelligent Payroll </li>
                  <li>Pay Advance</li>
                </ul>
              </div>
              <div>
                <ul class="list-disc">
                  <li>Search & Match </li>
                  <li>Timesheets </li>
                  <li>Intelligent Payroll </li>
                  <li>Pay Advance</li>
                </ul>
              </div>
            </div>
            <div className="flex lg:hidden gap-3 w-fit text-[#0C0429] items-center bg-[#93EE5C] rounded-[40px] py-3 px-6">
              <button className="text-[20px]">Join Now</button> |
            </div>
            <Image src={images.qrCode} alt="" className="hidden lg:block" />
          </TwoLayoutSection>
          <div className="left-0 top-0 z-[-1] absolute w-full bg-white h-full  rounded-br-[250px] lg:rounded-br-[80%]" />
        </div>
        <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="flex flex-col px-7 justify-center items-center">
            <h2 className="text-[42px] lg:text-[52px] text-white">
              Boundaries are dismantled
            </h2>
            <h2 className="text-[42px] lg:text-[52px] text-[#93EE5C]">
              Your Future Work awaits You!
            </h2>
            <p className="text-[32px] text-white">
              Hear from Contractors Part of the Myn Talent Pools
            </p>
          </div>
          <div className="py-4 flex flex-wrap flex-row justify-center items-center gap-6">
            <ProfileCard
              name="Jane Do"
              title="Service Analyst"
              quote="I love having the opportunity to take on new challenges"
              imageUrl={images.sampleImgOne}
            />
            <ProfileCard
              name="Jane Do"
              title="Service Analyst"
              quote="I love having the opportunity to take on new challenges"
              imageUrl={images.sampleImgOne}
            />
            <ProfileCard
              name="Jane Do"
              title="Service Analyst"
              quote="I love having the opportunity to take on new challenges"
              imageUrl={images.sampleImgOne}
            />
          </div>
          <div className="py-4 flex flex-wrap flex-row justify-center items-center gap-6">
            <Testimonial
              name="Public Sector Resourcing Framework"
              quote="Myn partnered with AMS through the PSR program, focusing on candidate sourcing and talent pooling for the Central Government Procurement Framework."
              title="PSR AMS"
              className="bg-[url(../../src/app/assets/images/tc1.png)] bg-contain bg-top md:bg-right"
            />
            <Testimonial
              name="Public Sector Resourcing Framework"
              quote="Myn partnered with AMS through the PSR program, focusing on candidate sourcing and talent pooling for the Central Government Procurement Framework."
              title="PSR AMS"
              className="bg-[url(../../src/app/assets/images/tc2.png)] bg-contain bg-top md:bg-right"
            />
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
