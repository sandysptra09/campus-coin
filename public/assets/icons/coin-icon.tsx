import React from "react";
import { Image } from "@heroui/react";

export default function NavbarCoin() {
    return (
        <Image
            src={'/images/coin_small.png'}
            alt={'coin_small'}
            width={'100%'}
            height={20}
            className="w-5 h-5"
        />
    );
}
