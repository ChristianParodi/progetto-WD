import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/AuthProvider";

import base from "../../db/useAirtable";

import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Jobs = ({ openModal, handleOpen }) => {
  const [workExp, setWorkExp] = useState([]);

  const { user } = useContext(UserContext);

  // Prendi i dati inerenti alle esperienze lavorative
  const fetchWorkExp = () => {
    base("esperienza_lavorativa")
      .select({
        filterByFormula: `IF({utente} = '${user.recordId}', 'Match', 'No Match')`,
        maxRecords: 2,
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

  useEffect(() => {
    fetchWorkExp();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      {workExp.map((workExp) => (
        <div key={workExp.recordId}>
          <Card
            className="h-min cursor-pointer hover:bg-blue-gray-100 transition-colors duration-200"
            shadow={false}
            onClick={() => handleOpen(workExp.recordId)}
          >
            <CardBody>
              <div className="flex flex-col gap-2 justify-start">
                <Typography variant="h6">{workExp.nome}</Typography>
                {/* <div className="flex gap-2">
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
                </div> */}
                <p className="mt-3 text-xs line-clamp-3">
                  {workExp.descrizione}
                </p>
                <Typography
                  variant="lead"
                  className="text-xs text-primaryUnclicked border-b-2 border-primaryUnclicked w-16"
                >
                  Leggi di più
                </Typography>
              </div>
            </CardBody>
          </Card>
          <Dialog
            open={openModal === workExp.recordId}
            handler={handleOpen}
            className="min-w-[90vw] lg:min-w-min min-h-min max-h-[90vh] border-none outline-none overflow-auto"
          >
            <DialogHeader className="flex-col p-10 gap-4">
              <h2 className="text-5xl">{workExp.nome}</h2>
            </DialogHeader>
            <DialogBody className="p-6">
              <Chip
                value={workExp.azienda}
                className="w-min bg-primaryUnclicked normal-case mb-6"
              />
              <Typography
                variant="lead"
                className="font-normal whitespace-pre-line"
              >
                {workExp.descrizione}
              </Typography>
            </DialogBody>
          </Dialog>
          {/* end Dialog */}
        </div>
      ))}
    </div>
  );
};

export default Jobs;
