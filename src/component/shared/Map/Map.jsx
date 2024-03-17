import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyA1qSdjKywLs-SufqxUplqzacIruev01_4",
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      //init a marker
      const { Marker } = await loader.importLibrary("marker");
      const position = {
        lat: 23.81870295567877,
        lng: 90.42672267778599,
      };

      //map options
      const mapOptions = {
        center: position,
        zoom: 18,
        mapId: "MY_PORTFOLIO_MAPID",
      };

      //setup the map
      const map = new Map(mapRef.current, mapOptions);

      //put up a marker
      const marker = new Marker({
        map: map,
        position: position,
      });

      marker.addListener("click", () => {
        // Code to execute when the marker is clicked
        console.log("Marker clicked!");
      });
    };

    initMap();
  }, []);
  return <div className="h-[200px] rounded-b-lg" ref={mapRef} />;
}
