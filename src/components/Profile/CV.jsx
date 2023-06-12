import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";

import Studies from "./Studies";

import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import Jobs from "./Jobs";

export default function CV() {
  const [openModal, setOpenModal] = useState("");
  const handleOpen = (recordId) => setOpenModal(() => recordId);

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <Typography variant="h5" color="blue-gray">
            Studi
          </Typography>
          <Link to={`studies`}>
            <Typography
              variant="lead"
              className="flex items-center gap-2 cursor-pointer text-sm text-primaryUnclicked border-b-2 border-primaryUnclicked w-26 p-0"
            >
              Vedi tutti <ChevronDoubleRightIcon className="w-4" />
            </Typography>
          </Link>
        </div>
        {/* Studies */}
        <Studies openModal={openModal} handleOpen={handleOpen} />
      </div>
      <div>
        <div className="flex items-center gap-4 mb-6">
          <Typography variant="h5" color="blue-gray">
            Esperienza lavorativa
          </Typography>
          <Link to={`works`}>
            <Typography
              variant="lead"
              className="flex items-center gap-2 cursor-pointer text-sm text-primaryUnclicked border-b-2 border-primaryUnclicked w-26 p-0"
            >
              Vedi tutti <ChevronDoubleRightIcon className="w-4" />
            </Typography>
          </Link>
        </div>
        {/* Works */}
        <Jobs openModal={openModal} handleOpen={handleOpen} />
      </div>
    </div>
  );
}
