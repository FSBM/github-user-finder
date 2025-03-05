import React, { useState } from "react";
import useGitHubUser from "../hooks/useGitHubUser";
import UserCard from "../components/UserCard";
import SearchBar from "@/components/SearcBar";
import Loader from "@/components/Loader";
import ErrorMessage from "@/components/ErrorMessage";
import Squares from "../components/ui/Background";
import TrueFocus from '../components/Focus';


<Squares
  speed={0.5}
  squareSize={40}
  direction='diagonal' // up, down, left, right, diagonal
  borderColor='#fff'
  hoverFillColor='#222'
/>

const GitHubUserList: React.FC = () => {
  const [query, setQuery] = useState("");
  const { users, loading, error, fetchUsers } = useGitHubUser();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchUsers(query);
  };

  return (

    <><div className={`min-h-screen text-white`}>
      <div className="w-screen h-screen overflow-hidden z-1 absolute">
        <Squares />
      </div>

      <h2 className="fixed top-0 square text-4xl  mb-6 text-center backdrop-blur-md font-inter py-4 rounded-b-full border-b border-gray-600 z-100  w-full">
        GITHUB USERS
      </h2>
      <div className="container mx-auto">

        {/* Search Section */}
        <div className="absolute z-10 mb-8 top-50  w-full md:w-[82%] ">
          <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
        </div>



        {/* Loading and Error States */}
        {loading && (
          <div className="absolute z-10 mb-8 top-72 w-full md:w-[82%]">
            <Loader />
          </div>
        )}

        {error && (
          <div className="absolute z-10 mb-8 top-96 w-full md:w-[82%]">
            <ErrorMessage Error={error} />
          </div>
        )}



        {users.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 absolute top-80 z-10 px-2 mx-auto">
            {users.map((user) => (
              <UserCard
                key={user.id}
                userName={user.login}
                userImage={user.avatar_url}
                userUrl={user.html_url} />
            ))}
          </div>
        ) :

          <div className=" absolute top-80 z-10 w-full md:w-[81%]">
            <TrueFocus
            sentence="FIND USERS"
            manualMode={false}
            blurAmount={5}
            borderColor="white"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          </div>
          
          }





      </div>

    </div>
    </>

  );
};

export default GitHubUserList;