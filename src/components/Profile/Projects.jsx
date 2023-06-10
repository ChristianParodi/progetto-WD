import React, { useContext, useEffect, useState } from "react";

import base from "../../db/useAirtable";
import { UserContext } from "../../context/AuthProvider";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Typography,
} from "@material-tailwind/react";
function Projects() {
  const [projects, setProjects] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    base("progetto")
      .select({
        filterByFormula: `IF({utente} = '${user.recordId}', 'Match', 'No Match')`,
      })
      .eachPage((records, fetchNextPage) => {
        records.forEach((record) => {
          const fetchedProject = {
            recordId: record.id,
            ID: record.get("ID"),
            nome: record.get("nome"),
            descrizione: record.get("descrizione"),
            data: record.get("data"),
            copertina: record.get("copertina")[0].url,
          };
          setProjects((prevProjects) => [...prevProjects, fetchedProject]);
        });
        fetchNextPage();
      });
  }, []);

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.recordId}
          className="flex flex-col items-center mt-10"
        >
          <Card className="mt-6 w-96 h-[400px]">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={project.copertina} alt="" layout="fill" />
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <div className="flex justify-between">
                <article className="prose">
                  <h3 className="prose text-3xl">{project.nome}</h3>
                </article>

                <Chip
                  variant="ghost"
                  value={new Date(project.data).toLocaleDateString("en-GB")}
                  className="roundend-full bg-primaryUnclicked bg-opacity-50 text-black text-center w-min self-center"
                />
              </div>
              <p className="prose line-clamp-2 text-gray-400">
                {project.descrizione}
              </p>
            </CardBody>
            <CardFooter className="pt-0 mt-auto">
              <Button className="bg-primaryUnclicked bg-opacity-70 text-black">
                Read More
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
  );
}

export default Projects;
