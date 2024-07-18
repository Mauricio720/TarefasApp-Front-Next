'use client';
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import { useState } from "react";
// AIzaSyABmDA29yx73HL07eI1fJTdlCju_0Feo88
export default function MapPage() {
  const position = { lat: 53.54, lng: 10 };
  const [open, setOpen] = useState(false);
  return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '500px' }}>
       <APIProvider apiKey="AIzaSyABmDA29yx73HL07eI1fJTdlCju_0Feo88">
        <Map
            defaultZoom={13}
            defaultCenter={ { lat: -23.562373620539198, lng: -46.39258591258139 } }
          >
            
      </Map>
    </APIProvider>
      </div>
  );
}