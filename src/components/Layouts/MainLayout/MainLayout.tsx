import { FC, ReactElement, ReactNode, useState } from "react";
import { Header } from "../../Header";

type TMainLayoutProps = {
  children: ReactNode;
};

/**
 *
 * @returns {ReactElement}
 */

const MainLayout: FC<TMainLayoutProps> = ({
  children,
}: TMainLayoutProps): ReactElement => {
  const [counter, setCounter] = useState(0);

  const addCount = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <Header counter={counter} />
      <button onClick={addCount}>add count</button>
      {children}
      <footer style={{ marginTop: "auto" }}>Counter: {counter}</footer>
    </>
  );
};

export default MainLayout;
