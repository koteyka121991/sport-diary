import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  label: string;

}

const Header: React.FC<HeaderProps> = ({ label }) => {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
   
       
        <h1 className="text-white text-xl font-semibold">{label}</h1>
      
  );
};

export default Header;
