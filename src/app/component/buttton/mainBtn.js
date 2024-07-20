import React from "react";

function MainBtn({
  color = "bg-blue-500",
  title = "Join Now",
  Icon = null,
  iconColor = "text-white",
}) {
  return (
    <div
      className={`flex gap-3 w-fit items-center rounded-[40px] py-3 px-6 ${color}`}
    >
      <button className="text-[16px] text-[#0C0429]">{title}</button>
      {Icon && <Icon className={`w-6 h-6 ${iconColor}`} />}
    </div>
  );
}

export default MainBtn;
