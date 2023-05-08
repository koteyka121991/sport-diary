import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { FaPenAlt } from "react-icons/fa";

const AddMytrainingButton = () => {
  const router = useRouter();
  const loginModal =useLoginModal();
  const onClick = useCallback (()=>{
loginModal.onOpen();
  },[loginModal])
  return (
  
    <div onClick={onClick}>

  <div
    className=" 
   flex 
    px-4
    py-2
    rounded-full
    bg-sky-500
    hover:bg-opacity-90 
    cursor-pointer
    w-fit
    mx-auto
  "
  >    
    <FaPenAlt size={24} color="white" />
    <p
      className="
        hidden 
        lg:block 
        text-center
        font-semibold
        text-white 
        text-[20px]
    "
    >
      Добавить тренировку
    </p>
  </div>

  </div>
  );
};

export default AddMytrainingButton;
