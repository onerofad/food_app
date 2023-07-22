import './App.css';
import { createMedia } from "@artsy/fresnel"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  DesktopContainer from './Components/DesktopContainer'
import MobileContainer from './Components/MobileContainer'


const { MediaContextProvider, Media } = createMedia({
   breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
   }
})

const App = () => {

  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<MobileContainer />} />
          </Routes>
        </BrowserRouter>

      </Media>
      <Media greaterThan='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<DesktopContainer />} />
          </Routes>
        </BrowserRouter>

      </Media>
    </MediaContextProvider>

  )
}

export default App;
