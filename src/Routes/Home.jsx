import { Box, Container, Flex, Image, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/Sidebar";
import data from "./hom.json";
import pfp from "./pfp.json"


function Home() {
  console.log("Home data ", data);
  const items = data.items;
  const icon = pfp.images

  return (
    <Box m={0} p={0}  overflowX={"hidden"}>
        <Navbar />
        <SideBar/>
      <Box ml={3} mt={"5px"} overflowX={"hidden"}>
      <SimpleGrid columns={[1,2,3,4]} gap={4} ml={{base:"10px",sm:"40px",md:"60px",lg:"70px"}} mr={2} >
        {items.map((user, i) => {
          return (
            <Link to={`/video/${user.id.videoId}`}>
            <Box overflow={"hidden"}>
              <Box>
              <Image
                borderRadius={10}
                objectFit={"cover"}
                src={user.snippet.thumbnails.high.url}
                h={157}
                w={300}
              />
              </Box>
              <Box width={600} ml={3}>
            <Text m={1} fontSize={{base:"13px",sm:"13px",md:"14px",lg:"15px"}} ml={1} color={"white"} alignItems={"left"} textAlign={"left"} >
              {user.snippet.title}
            </Text>
            <Flex >
            <Image
            src={icon[i].img}
            borderRadius={700}
            height={10}
            boxSize={{base:"28px",sm:"20px",md:"30px",lg:"40px"}}
            // width={10}
          />   
            <Text p={2} fontSize={{base:"10px",sm:"11px",md:"12px",lg:"13px"}} color={"white"} alignItems={"left"} textAlign={"left"} >
              {user.snippet.channelTitle}
            </Text>
            </Flex>
            </Box>
            </Box>
          </Link>
          );
        })}
      </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Home;
