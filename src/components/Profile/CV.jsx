import React, { useContext, useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { UserContext } from "../../context/AuthProvider";

import base from "../../db/useAirtable";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CV() {
  const [studies, setStudies] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const { user } = useContext(UserContext);

  const fetchWorkExp = () => {
    base("esperienza_lavorativa")
      .select({
        filterByFormula: `IF({studente} = '${user.recordId}', 'Match', 'No Match')`,
      })
      .eachPage((records, fetchNextPage) => {
        records.forEach((record) => {
          const fetchedWorkExp = {
            recordId: record.id,
            ID: record.get("ID"),
            nome: record.get("nome"),
            indirizzo_azienda: record.get("indirizzo_azienda"),
            azienda: record.get("azienda"),
            voto: record.get("voto"),
            descrizione: record.get("descrizione"),
            data_inizio: record.get("data_inizio"),
            data_fine: record.get("data_fine"),
          };
          setWorkExp((prevWorkExp) => [...prevWorkExp, fetchedWorkExp]);
        });
        fetchNextPage();
      });
  };

  const fetchStudies = () => {
    base("formazione")
      .select({
        filterByFormula: `IF({studente} = '${user.recordId}', 'Match', 'No Match')`,
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            const fetchedStudies = {
              recordId: record.id,
              ID: record.get("ID"),
              nome: record.get("nome"),
              istituto: record.get("istituto"),
              indirizzo_istituto: record.get("indirizzo_istituto"),
              titolo_studio: record.get("titolo_studio"),
              voto: record.get("voto"),
              descrizione: record.get("descrizione"),
              data_inizio: record.get("data_inizio"),
              data_fine: record.get("data_fine"),
            };
            setStudies((prevStudies) => [...prevStudies, fetchedStudies]);
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) console.log(err);
        }
      );
  };

  useEffect(() => {
    fetchStudies();
    fetchWorkExp();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col xl:flex-row gap-2">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Studi
        </Typography>
        {studies.map((study) => (
          <Card key={study.recordId} className="mt-6 w-96 h-min" shadow={false}>
            <CardBody>
              <div>
                <div className="flex flex-col">
                  <Typography variant="h6">{study.nome}</Typography>
                  <Typography className="flex gap-2">
                    {new Date(study.data_inizio).toLocaleDateString()}
                    <ArrowRightIcon className="w-4" />{" "}
                    {new Date(study.data_fine).toLocaleDateString()}
                  </Typography>
                  <p className="line-clamp-2">{study.descrizione}</p>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex flex-col xl:flex-row gap-2">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Esperienza lavorativa
        </Typography>
        {workExp.map((workExp) => (
          <Card
            key={workExp.recordId}
            className="mt-6 w-96 h-min"
            shadow={false}
          >
            <CardBody>
              <div>
                <div className="flex flex-col">
                  <Typography variant="h6">{workExp.nome}</Typography>
                  <Typography className="flex gap-2">
                    {new Date(workExp.data_inizio).toLocaleDateString()}
                    <ArrowRightIcon className="w-4" />{" "}
                    {new Date(workExp.data_fine).toLocaleDateString()}
                  </Typography>
                  <p className="line-clamp-2">{workExp.descrizione}</p>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
