# Interactive Map Project

This project is a React application that displays an interactive map using Leaflet and React-Leaflet. Users can click on different areas on the map to view relevant images and descriptions.

## Features

- Interactive map with clickable markers
- Display images and descriptions upon clicking markers
- Customizable markers
- Fetch location data from an API

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/ChanceMark/interactive-map.git
   cd interactive-map
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm start
   # or
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```
your-react-app/
├── public/
│   ├── images/
│   │   ├── image1.jpg
│   │   └── image2.jpg
├── src/
│   ├── components/
│   │   └── InteractiveMap.js
│   ├── App.js
│   ├── App.css
└── package.json
```

### Customization

1. **Custom Markers**:
   - Place your custom marker icons in the `public` folder and update the path in `InteractiveMap.js`.

2. **Fetching Locations from an API**:
   - Update the API endpoint in `InteractiveMap.js` to fetch your location data.

3. **Styling the Popup**:
   - Customize the popup styles in `App.css`.

### Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Leaflet Documentation](https://leafletjs.com/reference-1.7.1.html)
- [React-Leaflet Documentation](https://react-leaflet.js.org/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

This `README.md` file provides a comprehensive guide on how to set up, run, and customize the interactive map project. Feel free to adjust the paths, descriptions, and other details to fit your specific project setup.
