type GridContainerProps = {
  children: React.ReactNode;
  containerClassName: string;
  title: string;
};
const GridContainer = ({
  children,
  containerClassName,
  title,
}: GridContainerProps) => {
  return (
    <div className={containerClassName}>
      <h3 className="text-4xl font-bold">{title}</h3>
      {children}
    </div>
  );
};

export default GridContainer;
