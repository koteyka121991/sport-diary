import useLoginModal from "@/hooks/useLoginModal";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModal.onOpen();
    loginModal.onClose();
  }, [isLoading, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
        setIsLoading(true);
        await signIn('credentials', {
          email,
          password
        });
        loginModal.onClose();
    } catch (error) {
      console.log(error);
    }
  }, [loginModal, email, password]);

  const bodyContent =(
    <div className="flex flex-col gap-4">
        <Input 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}  
        />
             <Input 
        placeholder="Пароль"
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}  
        />
    </div>
  )
  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p> В первый раз используете данное приложение?</p>
      <span
        onClick={onToggle}
        className="
        text-white 
        cursor-pointer 
        hover:underline
      "
      >
        Создать учетную запись
      </span>
    </div>
  );
  return (
<Modal 
disabled={isLoading}
isOpen={loginModal.isOpen} 
title="Логин"
actionLabel="Войти"
onClose={loginModal.onClose}
onSubmit={onSubmit}
body={bodyContent}
footer={footerContent}/>

  );
};

export default LoginModal;
