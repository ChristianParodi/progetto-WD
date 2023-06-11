import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Button,
  CardFooter,
  Chip,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Card, CardBody } from "@material-tailwind/react";
import { UserContext } from "../../context/AuthProvider";

import base from "../../db/useAirtable";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CV() {
  const [studies, setStudies] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const [openModal, setOpenModal] = useState("");
  const handleOpen = (recordId) => setOpenModal(() => recordId);

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

    const handleResize = () => {
      const ismobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(ismobile);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 overflow-auto">
      <Typography variant="h5" color="blue-gray">
        Studi
      </Typography>
      <div className="flex flex-col xl:flex-row gap-2">
        {studies.map((study) => (
          <div key={study.recordId}>
            <Card
              onClick={() => handleOpen(study.recordId)}
              className="h-min cursor-pointer hover:bg-blue-gray-100 transition-colors duration-200"
              shadow={false}
            >
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
              <CardFooter className="min-w-fit">
                {isMobile && (
                  <Typography
                    variant="lead"
                    className="text-lg text-primaryUnclicked border-b-2 border-primaryUnclicked w-24"
                  >
                    Leggi di più
                  </Typography>
                )}
              </CardFooter>
            </Card>
            {/* Dialog */}
            <Dialog
              size="md"
              open={openModal === study.recordId}
              handler={handleOpen}
              className="min-w-[90vw] md:min-w-min min-h-min max-h-[90vh] border-none outline-none overflow-auto"
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
      <Typography variant="h5">Esperienza lavorativa</Typography>
      <div className="flex flex-col xl:flex-row gap-2">
        {workExp.map((workExp) => (
          <div key={workExp.recordId}>
            <Card
              className="h-min cursor-pointer hover:bg-blue-gray-100 transition-colors duration-200"
              shadow={false}
              onClick={() => handleOpen(workExp.recordId)}
            >
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
              <CardFooter className="min-w-fit">
                {isMobile && (
                  <Typography
                    variant="lead"
                    className="text-lg text-primaryUnclicked border-b-2 border-primaryUnclicked w-24"
                  >
                    Leggi di più
                  </Typography>
                )}
              </CardFooter>
            </Card>
            <Dialog
              open={openModal === workExp.recordId}
              handler={handleOpen}
              className="min-w-[90vw] md:min-w-min min-h-min max-h-[90vh] border-none outline-none overflow-auto"
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
    </div>
  );
}
