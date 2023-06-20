import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";
import Search from "./Search";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import base from "../../db/useAirtable";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/AuthProvider";
import { useEffect } from "react";

const Project = ({ project }) => {
  return (
    <Card
      shadow={false}
      className="relative grid h-96 w-80 items-end justify-center overflow-hidden text-center cursor-pointer"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={{
          backgroundImage: `url(${project.copertina})`,
        }}
        className={
          "absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        }
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {project.nome}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          @{project.utente.nickname}
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="candice wu"
          className="border-2 border-white"
          src={project.utente.avatar}
        />
      </CardBody>
    </Card>
  );
};

function Homepage() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchProjects = async () => {
    setIsLoading(true);
    const formula = search
      ? `FIND(TRIM(LOWER('${search}')), LOWER({nome})) > 0`
      : "";

    const records = await base("progetto")
      .select({
        filterByFormula: formula,
      })
      .all();

    records.map(async (record) => {
      const userRecord = await base("utente").find(record.get("utente")[0]);
      const projectTemplate = await base("template").find(
        record.get("template")[0]
      );

      const fetchedProject = {
        recordId: record.id,
        ID: record.get("ID"),
        nome: record.get("nome"),
        descrizione: record.get("descrizione"),
        data: record.get("data"),
        copertina: record.get("copertina")[0].url,
        template: { ...projectTemplate },
        medias: record.get("medias"),
        disposizioneBlocchi: record.get("disposizione_blocchi"),
        utente: {
          nickname: userRecord.get("nickname"),
          avatar: userRecord.get("avatar")[0].url,
        },
      };
      setProjects((prevProjects) => [...prevProjects, fetchedProject]);
    });
  };

  useEffect(() => {
    setProjects([]);
    fetchProjects().then(() => setIsLoading(false));
  }, [search]);

  return (
    <>
      <Navbar />
      <Banner />
      <Search setSearch={setSearch} />
      <div className="flex justify-center items-center mt-20 mx-10">
        <Typography variant="h6">
          Cerca le cose belle che ci sono in questo sito come i portfoli di
          tutti i tuoi amici
        </Typography>
      </div>
      <div className="flex p-10">
        <div className="w-1/4 border-2">side</div>
        <div className="w-3/4 flex flex-wrap gap-4 justify-center pt-10">
          {!isLoading
            ? projects.map((project) => (
                <div key={project.recordId}>
                  <Project project={project} />
                </div>
              ))
            : Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse bg-gray-300 h-10 w-[60vw] rounded-full"
                ></div>
              ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;
