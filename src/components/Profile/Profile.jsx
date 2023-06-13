import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/AuthProvider";
import {
  Avatar,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import CV from "./CV";
import base from "../../db/useAirtable";
import Loader from "../../utils/Loader";
import Projects from "./Projects";

import { HeartIcon } from "@heroicons/react/24/solid";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  // TODO: solo per testing!
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
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 h-[100vh] w-full">
          {/* Avatar */}
          <div className="w-full flex flex-col items-center mt-10 mb-6">
            <Avatar
              variant="circular"
              alt="candice wu"
              className="md:w-64 md:h-64 w-50 h-50 mb-4"
              src={user.avatar}
            />
            <Typography variant="lead" className="text-3xl">
              {user.nome} {user.cognome}
            </Typography>
            <Typography className="text-gray-500">@{user.nickname}</Typography>
            <Typography variant="lead" className="p-12">
              {user.bio}
            </Typography>
            <div className={`flex items-center gap-4`}>
              <Button>Contatta</Button>
            </div>
          </div>
          {/* Curriculum */}
          <div className="w-full lg:col-start-2 lg:col-span-3 lg:row-span-1 border-2 flex  p-6">
            <CV />
          </div>
          {/* Projects */}
          <div className="w-full lg:col-start-2 lg:col-span-3 lg:row-start-2 lg:row-span-2 border-2 flex justify-center items-center lg:justify-start lg:items-start p-6 gap-4">
            <Projects />
          </div>
        </div>
      </>
    )
  );
}

export default Profile;
