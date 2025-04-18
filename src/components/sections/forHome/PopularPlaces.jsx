import React from "react";
import CardPlace from "../forPlaces/CardPlace";
import Loader from "../../shared/Loader";
import useFetchAllCoworkings from "../../../hooks/useFetchAllCoworkings";

export default function PopularPlaces() {
  const { coworkingSpaces, loading } = useFetchAllCoworkings();

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className=" bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Популярные коворкинги</h1>
            {loading ? (
              <Loader />
            ) : 
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coworkingSpaces &&
                  coworkingSpaces.length > 0 &&
                  coworkingSpaces
                    .slice(3, 6)
                    .map((space) => <CardPlace key={space.id} space={space} />)}
              </div>
            }
            
          </div>
        </div>
      </div>
    </section>
  );
}
