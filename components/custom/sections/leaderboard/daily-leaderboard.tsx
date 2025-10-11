import React from "react";
import { Podium } from "./podium";
import { LeaderboardTable } from "./leaderboard-table";

const podium = [
  {
    rank: 2,
    name: "Darren Santoso",
    email: "darren.santoso@ace.id",
    major: "Informatics Engineering",
    coins: 1765,
  },
  {
    rank: 1,
    name: "Raisa Nurhaliza",
    email: "raisa.nurhaliza@ace.id",
    major: "Computer Science",
    coins: 1890,
  },
  {
    rank: 3,
    name: "Michelle Tan",
    email: "michelle.tan@ace.id",
    major: "Mathematics",
    coins: 1682,
  },
];

const data = [
  {
    rank: 4,
    name: "Alya Putri",
    email: "alya.putri@ace.id",
    major: "Information Systems",
    coins: 1425,
  },
  {
    rank: 5,
    name: "Rizky Pratama",
    email: "rizky.pratama@ace.id",
    major: "Computer Engineering",
    coins: 1380,
  },
  {
    rank: 6,
    name: "Naufal Hidayat",
    email: "naufal.hidayat@ace.id",
    major: "Informatics Engineering",
    coins: 1356,
  },
  {
    rank: 7,
    name: "Cindy Anggraini",
    email: "cindy.anggraini@ace.id",
    major: "Software Engineering",
    coins: 1328,
  },
  {
    rank: 8,
    name: "Bagas Saputra",
    email: "bagas.saputra@ace.id",
    major: "Information Technology",
    coins: 1294,
  },
  {
    rank: 9,
    name: "Dewi Lestari",
    email: "dewi.lestari@ace.id",
    major: "Data Science",
    coins: 1276,
  },
  {
    rank: 10,
    name: "Fajar Nugroho",
    email: "fajar.nugroho@ace.id",
    major: "Cyber Security",
    coins: 1248,
  },
];

export default function DailyLeaderboard() {
  return (
    <>
      <Podium items={podium} />
      <LeaderboardTable items={data} />
    </>
  );
}
