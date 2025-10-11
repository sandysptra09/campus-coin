import React from "react";
import { Podium } from "./podium";
import { LeaderboardTable } from "./leaderboard-table";

const podium = [
  {
    rank: 2,
    name: "Michael Ken",
    email: "darren.santoso@ace.id",
    major: "Mechanical Engineering",
    coins: 4921,
  },
  {
    rank: 1,
    name: "Jeremiah Aloysius",
    email: "raisa.nurhaliza@ace.id",
    major: "Computer Science",
    coins: 5820,
  },
  {
    rank: 3,
    name: "Liu Wang",
    email: "michelle.tan@ace.id",
    major: "Accounting",
    coins: 3902,
  },
];

const data = [
  {
    rank: 4,
    name: "Alya Putri",
    email: "alya.putri@ace.id",
    major: "Information Systems",
    coins: 2890,
  },
  {
    rank: 5,
    name: "Rizky Pratama",
    email: "rizky.pratama@ace.id",
    major: "Computer Engineering",
    coins: 2396,
  },
  {
    rank: 6,
    name: "Intan Salsabila",
    email: "intan.salsabila@ace.id",
    major: "Artificial Intelligence",
    coins: 2231,
  },
  {
    rank: 7,
    name: "Kevin Wijaya",
    email: "kevin.wijaya@ace.id",
    major: "Software Engineering",
    coins: 2226,
  },
  {
    rank: 8,
    name: "Maya Rachman",
    email: "maya.rachman@ace.id",
    major: "Data Analytics",
    coins: 2191,
  },
  {
    rank: 9,
    name: "Fauzan Hakim",
    email: "fauzan.hakim@ace.id",
    major: "Information Technology",
    coins: 2091,
  },
  {
    rank: 10,
    name: "Tania Gunawan",
    email: "tania.gunawan@ace.id",
    major: "Network Engineering",
    coins: 2001,
  },
];

export default function MonthlyLeaderboard() {
  return (
    <>
      <Podium items={podium} />
      <LeaderboardTable items={data} />
    </>
  );
}
