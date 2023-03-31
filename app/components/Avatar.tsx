"use client"

import Image from "next/image";
import { FC } from "react";

interface AvatarProps {}

const Avatar: FC<AvatarProps> = ({}) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="Avatar"
      src="/images/placeholder.jpg"
    />
  );
};

export default Avatar;
