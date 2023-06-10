import React, { useContext, useEffect, useState } from "react";
import { Chip, Typography } from "@material-tailwind/react";
import { Card, CardBody } from "@material-tailwind/react";
import { UserContext } from "../../context/AuthProvider";

import base from "../../db/useAirtable";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CV() {
  const [studies, setStudies] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const { user } = useContext(UserContext);

  // Prendi i dati inerenti alle esperienze lavorative
  const fetchWorkExp = () => {
    base("esperienza_lavorativa")
      .select({
        filterByFormula: `IF({utente} = '${user.recordId}', 'Match', 'No Match')`,
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

  // Prendi i dati inerenti agli studi
  const fetchStudies = () => {
    base("formazione")
      .select({
        filterByFormula: `IF({utente} = '${user.recordId}', 'Match', 'No Match')`,
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
    <>
      <div className="flex flex-col">
        <Typography variant="h5" color="blue-gray">
          Studi
        </Typography>
        <div className="flex flex-col xl:flex-row gap-2">
          {studies.map((study) => (
            <Card key={study.recordId} className=" h-min" shadow={false}>
              <CardBody>
                <div className="flex flex-col gap-2">
                  <Typography variant="h5">{study.nome}</Typography>
                  <div className="flex gap-2">
                    <Chip
                      variant="ghost"
                      value={new Date(study.data_inizio).toLocaleDateString(
                        "en-GB"
                      )}
                      className="bg-primaryUnclicked bg-opacity-50 text-black text-center w-min"
                    />
                    <ArrowRightIcon className="w-4" />
                    <Chip
                      variant="ghost"
                      value={new Date(study.data_fine).toLocaleDateString(
                        "en-GB"
                      )}
                      className="bg-primaryUnclicked bg-opacity-50 text-black text-center w-min"
                    />
                  </div>
                  <p className="line-clamp-3">{study.descrizione}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        <Typography variant="h5" className="h-min">
          Esperienza lavorativa
        </Typography>
        <div className="flex flex-col xl:flex-row gap-2">
          {workExp.map((workExp) => (
            <Card key={workExp.recordId} className="h-min" shadow={false}>
              <CardBody>
                <div className="flex flex-col gap-2 justify-start">
                  <Typography variant="h5">{workExp.nome}</Typography>
                  <div className="flex gap-2">
                    <Chip
                      variant="ghost"
                      value={new Date(workExp.data_inizio).toLocaleDateString(
                        "en-GB"
                      )}
                      className="bg-primaryUnclicked bg-opacity-50 text-black text-center w-min"
                    />
                    <ArrowRightIcon className="w-4" />
                    <Chip
                      variant="ghost"
                      value={new Date(workExp.data_fine).toLocaleDateString(
                        "en-GB"
                      )}
                      className="bg-primaryUnclicked bg-opacity-50 text-black text-center w-min"
                    />
                  </div>
                  <p className="prose line-clamp-3">{workExp.descrizione}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
