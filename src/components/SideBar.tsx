import React from "react";

type Props = {
  name: string;
  href: string;
};

const SideBar = ({ items }: { items: Props[] }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.href}>
          <a role="navigation" href={item.href}>
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};

// const SideBar = ({
//   items,
// }: {
//   items: {
//     name: string;
//     href: string;
//   }[];
// }) => {
//   return (
//     <div>
//       {items.map((item) => (
//         <div key={item.href}>
//           <a role="navigation" href={item.href}>
//             {item.name}
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

export default SideBar;
