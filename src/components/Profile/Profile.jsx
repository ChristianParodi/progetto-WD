import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/AuthProvider";
import { Avatar, Button, Typography } from "@material-tailwind/react";

import CV from "./CV";
import base from "../../db/useAirtable";
import Navbar from "../Navbar/Navbar";
import Loader from "../../utils/Loader";
import Projects from "./Projects";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    base("utente")
      .select({
        filterByFormula: `ID = 1`,
        maxRecords: 1,
        view: "Grid view",
      })
      .firstPage((err, records) => {
        if (err) console.log(err);
        const record = records[0];
        const fetchedUser = {
          recordId: record.id,
          ID: record.get("ID"),
          nome: record.get("nome"),
          cognome: record.get("cognome"),
          email: record.get("email"),
          nickname: record.get("nickname"),
          avatar: record.get("avatar")[0].url,
          bio: record.get("bio"),
        };
        setUser(fetchedUser);
      });
  }, []);

  return (
    user && (
      <>
        <Loader />
        {/* <Navbar /> */}
        <div className="grid grid-cols-3 grid-rows-4 h-[100vh] w-full">
          {/* Avatar */}
          <div className="flex flex-col items-center mt-10">
            <Avatar
              variant="circular"
              alt="candice wu"
              className="w-64 h-64 mb-4"
              src={user.avatar}
            />
            <Typography variant="lead" className="text-3xl">
              {user.nome} {user.cognome}
            </Typography>
            <Typography className="text-gray-500">@{user.nickname}</Typography>
            <Typography variant="lead" className="p-12">
              {user.bio}
            </Typography>
            <Button>Contatta</Button>
          </div>
          {/* Curriculum */}
          <div className="col-start-2 col-span-2 row-span-2 border-2 flex justify-start items-start p-6">
            <CV />
          </div>
          <div className="col-start-2 col-span-2 row-span-2 border-2 flex justify-start items-start p-6 gap-2">
            <Projects />
          </div>
        </div>
      </>
    )
  );
}

export default Profile;
