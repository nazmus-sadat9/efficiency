export interface LocationCoords {
  lat: number;
  lon: number;
}

export function getLocation(): Promise<LocationCoords> {

    return new Promise((resolve, reject) => {
    // Check if geolocation is supported by the browser
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // get the position
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        resolve({lat, lon});

      },
      (error) => {
        let message = "An unknown error occurred.";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message = "Permission denied.";
            break;
          case error.POSITION_UNAVAILABLE:
            message = "Make sure GPS is turned on.";
            break;
          case error.TIMEOUT:
            message = "Timeout.";
            break;
        }
        console.warn(message);
        reject(message);
      },

      {
        maximumAge: 0,
        timeout: 5000,
      }
    );
  });
}
