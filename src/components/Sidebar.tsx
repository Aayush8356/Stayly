export const Sidebar = () => {
  const menu = [
    {
      id: 1,
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      id: 2,
      name: "Bookings",
      link: "/booking",
    },
    {
      id: 3,
      name: "Messages",
      link: "/message",
    },
    {
      id: 4,
      name: "Settings",
      link: "/settings",
    },
    {
      id: 5,
      name: "Logout",
      link: "/logout",
    },
  ];
  return (
    <div className="flex flex-col right-0 h-full w-[13rem] bg-slate-300 gap-6">
      {menu.map((item) => (
        <div key={item.id} className="font-serif p-6 text-lg">
          <a href={item.link}>{item.name}</a>
        </div>
      ))}
    </div>
  );
};
