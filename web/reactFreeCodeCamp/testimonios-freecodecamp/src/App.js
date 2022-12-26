
import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio
          nombre='Emma Bostian'
          pais='Sweden'
          cargo='Software Enginner'
          empresa='Spotify'
          testimonio='I have always struggled with learning JavaScript. I have taken many courses but freeCodeCamp is course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify'
          imagen='emma' />
        

        <Testimonio
          nombre='Stimpy'
          pais='Cartoon Land'
          cargo='Software Enginner'
          empresa='Rappi'
          testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
          imagen='stimpy' />
        

        <Testimonio
          nombre='Ren'
          pais='Cartoon Land'
          cargo='Software Enginner'
          empresa='Uber'
          testimonio='It is scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
          imagen='ren' />
        


      </div>
      
    </div>
  );
}

export default App;
