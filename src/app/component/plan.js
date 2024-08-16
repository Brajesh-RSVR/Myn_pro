import React from "react";
import { motion } from "framer-motion";
import { PlanCard } from "./PlansCards";
import { PlanDetailsCard } from "./PlansDetaIilsCard"; // Assuming this component handles displaying detailed info

const CARD_OFFSET = 120;
const SCALE_FACTOR = 0.06;
// Define the tabs array

export const CardStack = () => {
  const [cards, setCards] = React.useState(tabs);
  const [selectedCard, setSelectedCard] = React.useState(tabs[0]);

  const moveToEnd = (from) => {
    const updatedCards = moveItem(cards, from, cards.length - 1);
    setCards(updatedCards);
    setSelectedCard(updatedCards[updatedCards.length - 1]);
  };

  const moveNext = () => {
    setCards((prevCards) => {
      const [first, ...rest] = prevCards;
      const updatedCards = [...rest, first];
      setSelectedCard(updatedCards[0]); // Set the first card as the new selected card
      return updatedCards;
    });
  };

  const movePrevious = () => {
    setCards((prevCards) => {
      const last = prevCards[prevCards.length - 1];
      const rest = prevCards.slice(0, -1);
      const updatedCards = [last, ...rest];
      setSelectedCard(updatedCards[0]); // Set the first card as the new selected card
      return updatedCards;
    });
  };

  return (
    <div className="flex pt-20 h-full flex-col md:flex-row">
      {/* Card Stack and Navigation */}
      <div className="  flex flex-row p-4 md:w-1/2">
        <div className=" flex h-full w-full items-center justify-center">
          <ul className="relative flex h-full w-full items-center justify-center">
            {cards.map((card, index) => {
              const canDrag = index === 0;

              return (
                <motion.li
                  key={card.id}
                  className="absolute h-3/4 w-3/4 list-none rounded-lg md:h-3/4 md:w-1/2"
                  style={{
                    cursor: canDrag ? "grab" : "auto",
                  }}
                  animate={{
                    top: index * -CARD_OFFSET,
                    // scale: 1 - index * SCALE_FACTOR,

                    zIndex: cards.length - index,
                  }}
                  drag={canDrag ? "y" : false}
                  dragConstraints={{
                    top: 0,
                    bottom: 0,
                  }}
                  onDragEnd={() => moveToEnd(index)}
                >
                  <PlanCard
                    title={card.title}
                    subtitle={card.subtitle}
                    content={card.content}
                    alertMessage={card.alertMessage}
                  />
                </motion.li>
              );
            })}
          </ul>
        </div>
        <div className="mt-4 flex flex-col justify-center gap-4">
          <button
            onClick={movePrevious}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white"
          >
            Previous
          </button>
          <button
            onClick={moveNext}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white"
          >
            Next
          </button>
        </div>
      </div>

      {/* Card Details */}
      <div className="">
        <PlanDetailsCard
          features={selectedCard?.detail?.features}
          title={selectedCard?.detail?.title}
        />
      </div>
    </div>
  );
};

// Utility function to move an item within an array
const moveItem = (arr, fromIndex, toIndex) => {
  const result = [...arr]; // Create a copy of the array
  const [item] = result.splice(fromIndex, 1); // Remove the item from the original position
  result.splice(toIndex, 0, item); // Insert the item at the new position
  return result;
};

const tabs = [
  {
    id: 1,
    subtitle: "Ideal for Small Teams",
    title: "Starter",
    content: {
      idealText: "Businesses looking to hire a few key players",
      feeText: "Typically 9%*",
    },
    alertMessage: (
      <div className=" absolute bottom-[-113px] right-12 h-[108px] w-[396px] gap-3 rounded-xl bg-green-800 px-6 py-4 text-center font-medium text-xl leading-7 text-white">
        Reach 10 placements and you will automatically be upgraded to Pro for
        additional functionalities.
      </div>
    ),

    detail: {
      title: "",
      features: [
        {
          title: "Fully Digital Source-to-Pay Platform",
          description:
            "End to end employment portal optimising talent sourcing, management, payroll, retention and well-being.",
        },
        {
          title: "AI-Powered Candidate Scoring",
          description:
            "Our advanced AI algorithms rank candidates based on their fit for your roles, saving you time and effort.",
        },
        {
          title: "Vacancy QA",
          description:
            "Ensure your job postings are of the highest quality to attract the best talent.",
        },
        {
          title: "Candidate CV Search",
          description:
            "Access to the Myn Community with over 150k of active available candidates across the UK.",
        },
        {
          title: "In-App Communication Tools",
          description:
            "Seamlessly communicate with candidates without leaving the platform.",
        },
        {
          title: "Payroll & Timesheeting",
          description: "Effortless payroll management for your new hires.",
        },
        {
          title: "Compliance",
          description:
            "We ensure all hires meet necessary compliance standards.",
        },
        {
          title: "Digital Forms & Documents",
          description: "Streamline your hiring process with digital paperwork.",
        },
      ],
    },
  },
  {
    id: 2,
    subtitle: "For Growing Businesses",
    title: "Pro",
    content: {
      idealText: "Businesses with ongoing recruitment requirements",
      feeText: "Typically 8%* (for more than 10 placements)",
    },
    alertMessage: (
      <div className=" absolute bottom-[-113px] right-12 h-[108px] w-[396px] gap-3 rounded-xl bg-green-800 px-6 py-4 text-center font-medium text-xl leading-7 text-white">
        Enjoy reduced fees as you recruit more and increase volumes with added
        features included.
      </div>
    ),
    detail: {
      title: "All of the benefits of the Starter Package, plus:",
      features: [
        {
          title: "Private Talent Pool",
          description:
            "Build and nurture your own pool of candidates for future hiring needs.",
        },
        {
          title: "Custom Career Site",
          description:
            "Enhance your brand with a dedicated careers page tailored to your company.",
        },
        {
          title: "Custom Branding & Workflows",
          description:
            "Maintain your brand's identity across all candidate communications.",
        },
        {
          title: "Targeted Advertising Strategies",
          description: "Reach the right candidates with precision marketing",
        },
        {
          title: "Advanced Insights & Reporting",
          description:
            "Gain deeper insights into your recruitment process with detailed reports.",
        },
        {
          title: "Dedicated Success Manager",
          description:
            "Get personalised support to maximize your hiring success.",
        },
      ],
    },
  },
  {
    id: 3,
    subtitle: "Tailored for Large Organisations",
    title: "Enterprise",
    content: {
      idealText: "Large companies with extensive recruitment needs",
      feeText: "Custom rates (fees decrease with higher recruitment volume)",
    },
    alertMessage:<div>
        icon
    </div>,
    detail: {
      title: "Everything in the Pro Package, plus bespoke services:",
      features: [
        {
          title: "Market Analysis & Competitor Insights",
          description:
            "Stay ahead with comprehensive market and competitor analysis.",
        },
        {
          title: "Bespoke Service Options",
          description: "Customised solutions to fit your unique hiring needs.",
        },
        {
          title: "Custom Integrations",
          description:
            "Integrate seamlessly with your existing CRM or ATS for a unified workflow.",
        },
      ],
    },
  },
];
