import './App.css';
import Wrapper from './component/Wrapper';
import Display from './component/Display';
import Buttonbox from './component/Buttonbox';
import Buttone from './component/Buttone';
import styled from 'styled-components';
import bg from './cartoon-style-high-quality-3d-render-low-poly-anime-city-front-view-4k-wallpaper_315725-401.webp'
import bg1 from './anh-nen-anime-dep-yen-tinh_101044752.jpg'
const Section = styled.div`
border: 5px solid white;
margin-left: 33%;
margin-right: 33%;
margin-top: 30px;
margin-bottom: 70px;
border-radius: 30px;
background-color: lightblue;
min-height: 95vh;
overflow: hidden;
background-size: cover;
`

function App() {
  return (
    <div className='Section' style={{backgroundImage:`url(${bg})`}}><br/>
      <Section className = 'wrapper' style={{backgroundImage:`url(${bg1})`}} >
        
        <Buttonbox><Buttone/></Buttonbox>
      </Section>
      <br/><br/>
    </div>
    
  );
}

export default App;
