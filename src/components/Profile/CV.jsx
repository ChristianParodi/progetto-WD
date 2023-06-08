import React, { useContext, useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { UserContext } from "../../context/AuthProvider";

import base from "../../db/useAirtable";

export default function CV() {
  const [studies, setStudies] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    base("formazione")
      .select({
        filterByFormula: `FIND('${user.recordId}', {studente})`,
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach((record) => {
            console.log(record);
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
            console.log(fetchedStudies);
            setStudies([...studies, fetchedStudies]);

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
            setWorkExp([...workExp, fetchedWorkExp]);
          });
          fetchNextPage();
        },
        (err) => {
          if (err) console.log(err);
        }
      );
  }, []);

  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Studi
        </Typography>
        {studies.map((study) => (
          <Typography>{study.nome}</Typography>
        ))}
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
