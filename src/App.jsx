import { useEffect, useState } from "react";
import { Container, Box, Fab } from "@mui/material";
import { motion } from "framer-motion";
import CasinoIcon from "@mui/icons-material/Casino";
import AdviceCard from "./AdviceCard";

let API = "https://api.adviceslip.com/advice";

function App() {
  let [advice, setAdvice] = useState({
    id: 0,
    advice: "cargando",
  });
  const getAdvice = async (api_url) => {
    try {
      let response = await fetch(
        "https://api.adviceslip.com/advice?t=" + Math.random()
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setAdvice(data.slip);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <Container
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <AdviceCard advice={advice} />
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              position: "relative",
              top: -30,
            }}
          >
            <Fab
              sx={{ backgroundColor: "#52ffa8" }}
              onClick={() => getAdvice(API)}
              component={motion.div}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 5px #ffffff",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <CasinoIcon />
            </Fab>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
