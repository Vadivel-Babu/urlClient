type Props = { children: React.ReactNode };

const Container: React.FC<Props> = ({ children }) => {
  return <div className="max-w-[1300px] p-2 mx-auto">{children}</div>;
};

export default Container;
