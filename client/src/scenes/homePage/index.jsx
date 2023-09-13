import Navbar from "scenes/navbar"; 
import { Box} from "@mui/material";
import { useEffect } from "react";

const HomePage = () => {
    // Inside HomePage component
    useEffect(() => {
        console.log("Inside Home Page");
    }, []);

    return <Box>
        <Navbar />

    </Box>
};

export default HomePage;