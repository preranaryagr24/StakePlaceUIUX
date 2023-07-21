import React from "react";
import Navbar from "../components/Navbar";
import IdeaCard from "../components/IdeaCard";

import useFetch from "../Hooks/useFetch";

const Home = () => {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_BASE_URL}/idea/getIdeas`
  );

  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Navbar ideaBtn={true} />
      <section className={"bg-[url('/bg.svg')]  w-full  min-h-screen"}>
        <div className="w-[80%] mx-auto p-6 pt-10 grid md:grid-cols-3 sm:grid-cols-2 place-items-center grid-cols-1 gap-6">
          {data?.map((idea) => (
            <IdeaCard
              title={idea.title}
              description={idea.description}
              phone={idea.phone}
              email={idea.email}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
