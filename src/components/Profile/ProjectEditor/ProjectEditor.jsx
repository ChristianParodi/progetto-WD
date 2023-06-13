import React, { useEffect, useState } from "react";

import base from "../../../db/useAirtable";
import { Typography } from "@material-tailwind/react";
import DeveloperTemplate from "../../templates/DeveloperTemplate";
import DesignerTemplate from "../../templates/DesignerTemplate";

function ProjectEditor() {
  const [project, setProject] = useState(null);
  const [templates, setTemplates] = useState([]);

  const templateComponents = (projectName) => {
    switch (projectName) {
      case "Sviluppatore":
        return <DeveloperTemplate project={project} />;
      case "Designer":
        return <DesignerTemplate project={project} />;
      default:
        return <div>Template non trovato</div>;
    }
  };

  const fetchTemplates = () => {
    base("template")
      .select()
      .eachPage((records, fetchNextPage) => {
        records.forEach((record) => {
          const current = {
            recordId: record.id,
            ID: record.get("ID"),
            nome: record.get("nome"),
          };
          setTemplates((prevTemplates) => [...prevTemplates, current]);
        });
        fetchNextPage();
      });
  };

  useEffect(fetchTemplates, []);

  return !project ? (
    <div className="p-6">
      <Typography variant="h2" size="lg" className="mb-6">
        Scegli un template
      </Typography>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {templates.map((template) => (
          <div
            onClick={() => setProject({ template: template })}
            key={template.recordId}
            className="bg-gray-400 hover:bg-primaryUnclicked hover:bg-opacity-60 h-[400px] w-96 rounded-xl flex flex-col justify-center items-center hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100 duration-100 cursor-pointer"
          >
            <Typography size="lg">{template.nome}</Typography>
          </div>
        ))}
      </div>
    </div>
  ) : (
    templateComponents(project.template.nome)
  );
}

export default ProjectEditor;
