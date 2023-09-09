import { ReactNode, createContext, useContext, useState } from "react";

const ModalContext = createContext({
  isSignin: true,
  setIsSignin: (value: boolean) => {},
});

export const useModal = () => {
  const modalCtx = useContext(ModalContext);
  return modalCtx;
};

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSignin, setIsSignin] = useState<boolean>(true);

  return (
    <ModalContext.Provider value={{ isSignin, setIsSignin }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
