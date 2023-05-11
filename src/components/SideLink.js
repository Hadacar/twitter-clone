import React from "react";

const SideLink = (props) => {
    const isActive = props.active === props.name

  return (
    <li className="group" onClick={()=>props.onMenuItemClick(props.name)}>
      <a href={props.name.toLowerCase()} className="pointer-events-none block cursor-pointer text-xl">
        <div className="inline-block">
          <div className={`px-5 py-3 flex item-center group-hover:bg-primary-light group-hover:rounded-full group-hover:text-primary-base duration-200
        ${isActive?"text-primary-base":""}
    `}>
            <props.Icon />
            <span className="ml-4 font-bold">{props.name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;
