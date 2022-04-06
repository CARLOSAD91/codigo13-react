import { Container, Grid } from "@mui/material";
import Chart from "react-apexcharts";

const Home = () => {
  const chartData = {
    series: [
      {
        name: "Tech Development",
        data: [10, 30, 20, 14, 66, 32, 16],
      },
    ],
    options: {
      xaxis: {
        categories: ["JS", "CSS", "HTML", "Firebase", "NodeJS", "React", "Vue"],
      },
      fill: {
        colors: ["#fffaaa"],
      },
      grid: {
        row: {
          colors: ["#F44336", "#E91E63", "#9C27B0"],
        },
        column: {
          colors: ["#F44336", "#E91E63", "#9C27B0"],
        },
      },
      chart: {
        zoom: {
          enabled: true,
          type: "x",
          autoScaleYaxis: false,
          zoomedArea: {
            fill: {
              color: "#90CAF9",
              opacity: 0.4,
            },
            stroke: {
              color: "#0D47A1",
              opacity: 0.4,
              width: 1,
            },
          },
        },
      },
    },
  };

  return (
    <Container>
      <Grid>
        <h1>Home</h1>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={500}
        />
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={500}
        />
        <Chart
          options={{
            labels: ["A", "B", "C", "D", "E"],
            fill: {
              colors: ["#addccc", "#f01", "#F44336", "#E91E63", "#ccaadd"],
            },
            dataLabels: {
              style: {
                colors: ["#addccc", "#f01", "#F44336", "#E91E63", "#ccaadd"],
              },
            },
          }}
          series={[44, 55, 41, 17, 15]}
          type="donut"
          width={500}
        />
      </Grid>
    </Container>
  );
};

export default Home;
