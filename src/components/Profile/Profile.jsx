import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/AuthProvider";
import { Avatar, Button, Typography } from "@material-tailwind/react";

import CV from "./CV";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  // TODO: solo per testing!
  useEffect(() => {
    if (!user)
      setUser({
        ID: 1,
        nome: "Christian",
        cognome: "Parodi",
        email: "christian@christian.com",
        nickname: "christio",
        avatar:
          "https://v5.airtableusercontent.com/v1/17/17/1686261600000/hZyYPfrPVWVSIERR5reB5w/KD7S7VDoK8GqsO4kgu3XcKTSW7kSLY8nQESNvBEVXSQ9cAlmPao90gjuPGC6eEAyE2jYc40481UcbJK27Z4gE2teHh7MASKUwv9nHtvLYlk/_WjMuN-dL1w7CJouvUVVYkNudvVHZbJixFqBqrsVsX0",
        bio: "Sono abbastanza bravo penso cioe' non so perche' alla fine me lo dico da solo",
      });
  }, []);

  return (
    user && (
      <div className="grid grid-cols-3 h-[100vh] w-full">
        {/* Avatar */}
        <div className="flex flex-col items-center mt-10">
          <Avatar
            variant="circular"
            alt="candice wu"
            className="w-64 h-64 mb-4"
            src={user.avatar}
          />
          <Typography variant="lead" className="text-3xl">
            {user.nome} {user.cognome}
          </Typography>
          <Typography className="text-gray-500">@{user.nickname}</Typography>
          <Typography variant="lead" className="p-12">
            {user.bio}
          </Typography>
          <Button>Contatta</Button>
        </div>
        {/* Curriculum */}
        <div className="grid-start-2 col-span-2 border-2">
          <CV />
          <div className="col-span-2 grid-start-2 border-2">Terza colonna</div>
        </div>
      </div>
    )
  );
}

export default Profile;
