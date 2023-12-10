import { ReactNode, createContext, useContext, useState } from "react";



const ModalContext = createContext({
  isSignin: false,
  setIsSignin: (value:boolean) => {value},  
});

export const useModal = () => {
  const modalCtx = useContext(ModalContext);
  return modalCtx;
};

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSignin, setIsSignin] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isSignin, setIsSignin }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
