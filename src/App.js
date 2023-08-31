import { Forecast } from './components/forecast/Forecast';
import Sidebar from './components/sidebar/Sidebar';
import DetailForToday from './components/detailForToday/DetailForToday';
import './styles/App.css';
import { ThemeProvider, ThemeContext } from './providers/ThemeProvider';
import { useEffect, useContext } from 'react';

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider>
      <main className="main">
        <Sidebar />
        <div className="center-block">
          <Forecast />
          <DetailForToday />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
