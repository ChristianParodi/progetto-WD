import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/AuthProvider";

import base from "../../db/useAirtable";

import {
  Card,
  CardBody,
  Chip,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Studies = ({ openModal, handleOpen }) => {
  const [studies, setStudies] = useState([]);

  const { user } = useContext(UserContext);

  // Prendi i dati inerenti agli studi
  const fetchStudies = () => {
    base("formazione")
      .select({
        filterByFormula: `IF({utente} = '${user.recordId}', 'Match', 'No Match')`,
        view: "Grid view",
        maxRecords: 2,
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
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      {studies.map((study) => (
        <div key={study.recordId}>
          <Card
            onClick={() => handleOpen(study.recordId)}
            className="h-min cursor-pointer hover:bg-blue-gray-100 transition-colors duration-200"
            shadow={false}
          >
            <CardBody>
              <div className="flex flex-col gap-2">
                <Typography variant="h6" className="text-md">
                  {study.nome}
                </Typography>
                {/* <div className="flex gap-2">
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
                </div> */}
                <p className="mt-3 text-xs line-clamp-3">{study.descrizione}</p>
                <Typography
                  variant="lead"
                  className="text-xs text-primaryUnclicked border-b-2 border-primaryUnclicked w-16"
                >
                  Leggi di più
                </Typography>
              </div>
            </CardBody>
          </Card>
          {/* Dialog */}
          <Dialog
            size="md"
            open={openModal === study.recordId}
            handler={handleOpen}
            className="min-w-[90vw] lg:min-w-min min-h-min max-h-[90vh] border-none outline-none overflow-auto"
          >
            <DialogHeader className="flex-col p-10 gap-4">
              <h2 className="text-5xl">{study.nome}</h2>
            </DialogHeader>
            <DialogBody className="p-6">
              <Chip
                value={study.istituto}
                className="w-min bg-primaryUnclicked normal-case mb-6"
              />
              <Typography
                variant="lead"
                className="font-normal whitespace-pre-line"
              >
                {study.descrizione}
              </Typography>
            </DialogBody>
          </Dialog>
          {/* end Dialog */}
        </div>
      ))}
    </div>
  );
};

export default Studies;
