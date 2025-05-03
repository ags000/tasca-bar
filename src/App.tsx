import tasca from './assets/tasca-restaruant.csv'
import { Box, Divider, Typography } from '@mui/material';
import WineBarIcon from '@mui/icons-material/WineBar';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';

type TascaItem = {
  id: string;
  nombre: string;
  tapa: string;
  racion: string;
  bebida: string;
  cafePostres: string;
  precio: string;
}
function App() {
  
  const tascaP = tasca as TascaItem[];
  console.log(tascaP);
  const bebidas = tascaP.filter((x) => x.bebida === "1");
  const tapas = tascaP.filter((x) => x.tapa === "1");
  const raciones = tascaP.filter((x) => x.racion === "1");
  const cPostres = tascaP.filter((x) => x.cafePostres === "1");

  return (
    <>
    <header>
      <Box sx={{display: "flex", alignItems: "center", backgroundColor: "#386641", height: "50px"}}>
        <Typography sx={{pl: "5px", fontSize: "18px", color: "white"}}>Tasca</Typography>
      </Box>
    
    </header>

<Box sx={{pt: "7px", pb: "7px", display: "flex", alignItems: "center", justifyContent: "center"}}>
    <Typography sx={{pl: "5px", fontWeight: "700", fontSize: "18px", color: "#a7754d"}}>Nuestra Carta</Typography>
    </Box>
    <Divider  sx={{mb: "1em"}}/>

<Box sx={{marginLeft: "10px"}}>
<div className="px-4 py-6 max-w-2xl mx-auto">
  <Box sx={{display: "flex", alignItems: "center"}}>
  <WineBarIcon />
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Bebidas</h2>
  </Box>
  <div className="">
    {bebidas.map((tascaItem, index) => (
      <div
        key={index}
      >
        <Box component="span" sx={{marginRight: "7px"}}>{tascaItem?.nombre ?? ""}</Box>
        <Box component="span">{tascaItem?.precio ? `${tascaItem?.precio}€` : ""}</Box>
      </div>
    ))}
  </div>
</div>

<div style={{marginTop: "1em"}} className="px-4 py-6 max-w-2xl mx-auto">
  <Box sx={{display: "flex", alignItems: "center"}}>
  <RestaurantMenuIcon />
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tapas</h2>
  </Box>
  <div className="">
    {tapas.map((tascaItem, index) => (
            <div
            key={index}
          >
            <Box component="span" sx={{marginRight: "7px"}}>{tascaItem?.nombre ?? ""}</Box>
            <Box component="span">{tascaItem?.precio ? `${tascaItem?.precio}€` : ""}</Box>
          </div>
    ))}
  </div>
</div>

<div style={{marginTop: "1em"}} className="px-4 py-6 max-w-2xl mx-auto">
  <Box sx={{display: "flex", alignItems: "center"}}>
  <RestaurantMenuIcon />
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Raciones</h2>
  </Box>
  <div className="">
    {raciones.map((tascaItem, index) => (
            <div
            key={index}
          >
            <Box component="span" sx={{marginRight: "7px"}}>{tascaItem?.nombre ?? ""}</Box>
            <Box component="span">{tascaItem?.precio ? `${tascaItem?.precio}€` : ""}</Box>
          </div>
    ))}
  </div>
</div>

<div style={{marginTop: "1em"}} className="px-4 py-6 max-w-2xl mx-auto">
  <Box sx={{display: "flex", alignItems: "center"}}>
  <FreeBreakfastIcon />
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Café y Postres</h2>
  </Box>
  <div className="">
    {cPostres.map((tascaItem, index) => (
            <div
            key={index}
          >
            <Box component="span" sx={{marginRight: "7px"}}>{tascaItem?.nombre ?? ""}</Box>
            <Box component="span">{tascaItem?.precio ? `${tascaItem?.precio}€` : ""}</Box>
          </div>
    ))}
  </div>
</div>
</Box>
    </>
  )
}

export default App
