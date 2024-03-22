'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import { FiAward, FiChevronDown, FiChevronUp } from "react-icons/fi";

const ShuffleSortTable = () => {
  return (
    <section id = "metrics">
    <div className="p-0 w-full bg-gradient-to-br from-black-600 to-indigo-600">
      <Table />
    </div>
    </section>
  );
};

const Table = () => {
  const [users, setUsers] = useState(userData);

  const shift = (id: number, direction: "up" | "down") => {
    const index = users.findIndex((u) => u.id === id);
    let usersCopy = [...users];

    if (direction === "up") {
      if (index > 0) {
        [usersCopy[index], usersCopy[index - 1]] = [
          usersCopy[index - 1],
          usersCopy[index],
        ];
      }
    } else {
      if (index < usersCopy.length - 1) {
        [usersCopy[index], usersCopy[index + 1]] = [
          usersCopy[index + 1],
          usersCopy[index],
        ];
      }
    }

    setUsers(usersCopy);
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-x-scroll max-w-4xl mx-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-[1px] border-slate-200 text-slate-400 text-sm uppercase">
            <th className="pl-4 w-8"></th>
            <th className="text-start p-4 font-medium">Team Member</th>
            <th className="text-start p-4 font-medium">Evaluation</th>
            <th className="text-start p-4 font-medium">AI Evaluation</th>
            <th className="text-start p-4 font-medium">Status</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            return (
              <TableRows
                key={user.id}
                user={user}
                index={index}
                shift={shift}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

interface TableRowsProps {
  user: User;
  index: number;
  shift: Function;
}

const TableRows = ({ user, index, shift }: TableRowsProps) => {
  const rankOrdinal = numberToOrdinal(index + 1);
  const maxRankOrdinal = numberToOrdinal(user.maxRank);

  return (
    <motion.tr
      layoutId={`row-${user.id}`}
      className={`text-sm ${user.id % 2 ? "bg-slate-100" : "bg-white"}`}
    >
      <td className="pl-4 w-8 text-lg">
        <button
          className="hover:text-violet-600"
          onClick={() => shift(user.id, "up")}
        >
          <FiChevronUp />
        </button>
        <button
          className="hover:text-violet-600"
          onClick={() => shift(user.id, "down")}
        >
          <FiChevronDown />
        </button>
      </td>

      <td className="p-4 flex items-center gap-3 overflow-hidden">
        <img
          src={user.photoURL}
          alt="Example user photo"
          className="w-10 h-10 rounded-full bg-slate-300 object-cover object-top shrink-0"
        />
        <div>
          <span className="block mb-1 font-medium">{user.name}</span>
          <span className="block text-xs text-slate-500">{user.contact}</span>
        </div>
      </td>

      <td className="p-4">
        <div
          className={`flex items-center gap-2 font-medium ${
            rankOrdinal === "1st" && "text-violet-500"
          }`}
        >
          <span>{rankOrdinal}</span>
          {rankOrdinal === "1st" && <FiAward className="text-xl" />}{" "}
        </div>
      </td>

      <td className="p-4 font-medium">{maxRankOrdinal}</td>

      <td className="p-4">
        <span
          className={`px-2 py-1 text-xs font-medium rounded ${
            user.status === "online"
              ? "bg-green-200 text-green-800"
              : user.status === "offline"
              ? "bg-yellow-200 text-yellow-800"
              : "bg-slate-200 text-slate-800"
          }`}
        >
          {user.status}
        </span>
      </td>
    </motion.tr>
  );
};

export default ShuffleSortTable;

const numberToOrdinal = (n: number) => {
  let ord = "th";

  if (n % 10 == 1 && n % 100 != 11) {
    ord = "st";
  } else if (n % 10 == 2 && n % 100 != 12) {
    ord = "nd";
  } else if (n % 10 == 3 && n % 100 != 13) {
    ord = "rd";
  }

  return n + ord;
};

interface User {
  id: number;
  name: string;
  contact: string;
  photoURL: string;
  maxRank: number;
  status: string;
}

const userData: User[] = [
  {
    id: 1,
    name: "Jake",
    contact: "jake@statefarm.com",
    photoURL: "https://content.presspage.com/uploads/1441/1920_commercial-headshot.png?10000",
    maxRank: 1,
    status: "online",
  },
  {
    id: 2,
    name: "Luka Doncic",
    contact: "luka@statefarm.com",
    photoURL: "https://cdn.vox-cdn.com/thumbor/OKMRtFIVmSbB0n2OFiCJJ1Orsv0=/0x0:5616x3744/1200x800/filters:focal(2128x894:3026x1792)/cdn.vox-cdn.com/uploads/chorus_image/image/72837738/usa_today_21811559.0.jpg",
    maxRank: 2,
    status: "online",
  },
  {
    id: 3,
    name: "LeBron James",
    contact: "lebron@statefarm.com",
    photoURL: "https://www.varietyinsight.com/images/honoree/LeBron_James_v4.png",
    maxRank: 3,
    status: "offline",
  },

  {
    id: 4,
    name: "Caitlyn Clark",
    contact: "caitlynclark@statefarm.com",
    photoURL: "https://www.desmoinesregister.com/gcdn/-mm-/80e2c3bf8eb8e0f90fa7bbc6f1d71cca856e8869/c=0-854-2840-2458/local/-/media/2017/02/19/IAGroup/DesMoines/636231189991484795-All-CIML-CaitlinClark-KK-02.JPG?width=2840&height=1604&fit=crop&format=pjpg&auto=webp",
    maxRank: 4,
    status: "online",
  },
  {
    id: 5,
    name: "Jimmy Butler",
    contact: "jimmybutler@statefarm.com",
    photoURL: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/75424555_10157998868257847_5402872260534992896_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BFIddp9bIUQAX_7oTOd&_nc_ht=scontent-dfw5-2.xx&oh=00_AfAp-CyG09qV3iYTBZd0Vwt_OgRL6kBqxYBkCH3BF_hnig&oe=6619D39E",
    maxRank: 5,
    status: "offline",
  },
];