import { Typography, Paper, Box } from "@mui/material";
import {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
} from "../assets";

const servicesArr = [
  {
    id: 1,
    title: "Service 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi error sequi quisquam, quaerat quos delectus fugit nisi mollitia quosed omnis ratione!",
    icon: service1,
  },
  {
    id: 2,
    title: "Service 2",
    description:
      "Eligendi error sequi quisquam, quaerat quos delectus fugit nisi mollitia quosed omnis ratione! Molestias dignissimos quidem provident fuga culpa, animi minima.",
    icon: service2,
  },
  {
    id: 3,
    title: "Service 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi error sequi quisquam, quaerat quos delectus fugit nisi mollitia quosed omnis ratione!",
    icon: service3,
  },
  {
    id: 4,
    title: "Service 4",
    description:
      "Eligendi error sequi quisquam, quaerat quos delectus fugit nisi mollitia quosed omnis ratione! Molestias dignissimos quidem provident fuga culpa, animi minima.",
    icon: service4,
  },
  {
    id: 5,
    title: "Service 5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi error sequi quisquam, quaerat quos delectus fugit nisi mollitia quosed omnis ratione!",
    icon: service5,
  },
  {
    id: 6,
    title: "Service 6",
    description:
      "Eligendi error sequi quisquam, quaerat quos delectus fugit nisi mollitia quosed omnis ratione! Molestias dignissimos quidem provident fuga culpa, animi minima.",
    icon: service6,
  },
];

export const Services = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "20px 15px", md: "60px 50px" },
        backgroundColor: "#242424",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Our Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "1100px",
        }}
      >
        {servicesArr.map((card) => (
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "280px",
              maxWidth: "340px",
              padding: "20px",
              color: "rgba(255, 255, 255, 0.87)",
              background:
                "linear-gradient(45deg, rgba(0,3,19,1) 0%, rgba(1,24,48,1) 32%, rgba(0,53,70,1) 64%, rgba(1,99,100,1) 100%)",
            }}
          >
            <img src={card.icon} width="80px" height="80px" alt="icon" />
            <Typography variant="h4" gutterBottom>
              {card.title}
            </Typography>
            <Typography variant="body2">{card.description}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};
