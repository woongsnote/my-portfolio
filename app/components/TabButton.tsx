interface TabButtonProps {
  isActive: boolean;
  selectTab: () => void;
  title: string;
}

const TabButton = ({ isActive, selectTab, title }: TabButtonProps) => {
  const buttonClasses = isActive ? "text-white border-b-2 border-primary-500" : "text-[#adb7be]";

  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
    >
      {title}
    </button>
  );
};

export default TabButton;
