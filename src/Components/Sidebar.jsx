import { Box, Flex, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Link } from "react-router-dom";

function SideBar() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 768px)");

  return (
    <Box>
      {isLargerThan1280 ? (
        <Stack
          ml={2}
          mr={2}
          position={"absolute"}
          spacing={8}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <Link to="/">
              <HomeOutlinedIcon style={{ color: "white", fontSize: "35px" }} />
            </Link>
            <Text color={"white"} fontSize={"10px"}>
              Home
            </Text>
          </Box>
          <Box>
            <Link to="/trend">
              <WhatshotIcon style={{ color: "white", fontSize: "35px" }} />
            </Link>
            <Text color={"white"} fontSize={"10px"}>
              Trending
            </Text>
            <Image
              h={"40px"}
              mt={5}
              w={"35px"}
              src="https://cdn.pixabay.com/photo/2021/05/05/12/16/shorts-png-6230962_1280.png"
            />
            <Text color={"white"} fontSize={"10px"}>
              Shorts
            </Text>
          </Box>
          <Box>
            <SubscriptionsOutlinedIcon
              style={{ color: "white", fontSize: "30px" }}
            />
            <Text color={"white"} fontSize={"10px"}>
              Subscriptions
            </Text>
          </Box>
          <Box>
            <VideoLibraryOutlinedIcon
              style={{ color: "white", fontSize: "40px" }}
            />
            <Text color={"white"} fontSize={"11px"}>
              Library
            </Text>
          </Box>
        </Stack>
      ) : (
        //   Mobile
        <Stack
          mt={"50px"}
          direction={"row"}
          spacing={8}
          justifyContent={"center"}
          alignItems={"center"}
          gap={20}
          width={{base:"auto",sm:"700px",md:"700px"}}
        >
          <Flex w={"10%"}>
            <Link to="/">
              <HomeOutlinedIcon style={{ color: "white", fontSize: "20px" }} />
            </Link>
            <Text mt={"3px"} ml={1} color={"white"} fontSize={"11px"}>
              Home
            </Text>
          </Flex>
          <Flex>
            <Link to="/trend">
              <WhatshotIcon style={{ color: "white", fontSize: "20px" }} />
            </Link>
            <Text mt={"3px"} ml={1} color={"white"} fontSize={"10px"}>
              Trending
            </Text>
          </Flex>
        </Stack>
      )}
    </Box>
  );
}

export default SideBar;
