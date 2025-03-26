import Flex from "./Flex";
import { Typography } from "@mui/material";
import ReactPlayer from "react-player/youtube";

const Hero = () => {
  return (
    <Flex bg="#092844">
      <Flex direction="column" align="start" padding="50px" bg="#092844">
        <Typography variant="h1">Our Amazing Software</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          error sequi quisquam, quaerat quos delectus fugit nisi mollitia quo
          sed omnis ratione! Molestias dignissimos quidem provident fuga culpa,
          animi minima.
        </Typography>
      </Flex>
      <Flex bg="#092844" padding="50px">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=FoSgDtqb0Zc"
          width="530px"
          height="235px"
        />
      </Flex>
    </Flex>
  );
};

export default Hero;
