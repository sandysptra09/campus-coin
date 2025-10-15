import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Link,
} from "@heroui/react";
import { HiOutlineHome, HiLogout } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { MdOutlineLeaderboard } from "react-icons/md";
import NavbarCoin from "./coin";
import LogoutButton from "./logout-button";

export default function NavbarAvatar() {
  return (
    <Dropdown>
      <DropdownTrigger className="cursor-pointer">
        <Avatar
          src="https://i.pravatar.cc/150?img=1"
          onClick={() => {}}
          size="sm"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          className="font-semibold"
          key="coins"
          startContent={<NavbarCoin />}
        >
          <Link
            href="/user/profile"
            color="secondary"
            className="text-base w-full"
          >
            0 coins
          </Link>
        </DropdownItem>
        <DropdownItem
          className="font-semibold"
          key="dashboard"
          startContent={<HiOutlineHome size={20} />}
        >
          <Link
            href="/user/profile"
            color="secondary"
            className="text-base w-full"
          >
            Dashboard
          </Link>
        </DropdownItem>
        <DropdownItem
          className="font-semibold"
          key="profile"
          startContent={<FaRegUser size={18} />}
        >
          <Link
            href="/user/detail-profile"
            color="secondary"
            className="text-base w-full"
          >
            My Profile
          </Link>
        </DropdownItem>
        <DropdownItem
          className="font-semibold"
          key="settings"
          startContent={<MdOutlineSettings size={18} />}
        >
          <Link
            href="/user/settings"
            color="secondary"
            className="text-base w-full"
          >
            Settings
          </Link>
        </DropdownItem>
        <DropdownItem
          className="font-semibold"
          key="exchange"
          startContent={<BiTransfer size={18} />}
        >
          <Link href="/exchange" color="secondary" className="text-base w-full">
            Exchange
          </Link>
        </DropdownItem>
        <DropdownItem
          className="font-semibold"
          key="leaderboard"
          startContent={<MdOutlineLeaderboard size={18} />}
        >
          <Link href="/leaderboard" color="secondary" className="text-base w-full">
            Leaderboard
          </Link>
        </DropdownItem>
        <DropdownItem
          className="font-semibold text-danger"
          key="delete"
          color="danger"
          startContent={<HiLogout size={20} />}
        >
          <LogoutButton />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
