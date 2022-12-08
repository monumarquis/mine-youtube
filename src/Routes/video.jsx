import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/Sidebar";
import { cartContext } from "../Context/AuthContext";
import pfp from "./pfp.json";
import { AspectRatio } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Trending = async () => {
  let res = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=in&maxResults=24&key=AIzaSyBqRSgqiC4exIS1hzBXVkRuZx-TjV8xOpU"
  );

  let data = await res.json();
  return data;
};

const getVideoDetails = async (id) => {
  let res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyBU1ZJIAIET6nyy9x_5HSe5qWLo5wd7gks`
  );
  let data = await res.json();
  return data;
};
function Video() {
  const param = useParams();
  const id = param.id;
  console.log(id);
  const icon = pfp.images;
  const { cart, setCart } = useContext(cartContext);
  console.log("cart", cart);
  const [videoDetails, setVideoDetails] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    handleTheTrending();
    handleTheDetails();
  }, []);

  const handleTheDetails = async () => {
    let append = await getVideoDetails(id);
    setVideoDetails(append.items);
  };
  console.log(videoDetails);
  // console.log("videoDetails", videoDetails[0].snippet.title);
  // console.log("videoDetails name", videoDetails[0].snippet.channelTitle);
  const handleTheTrending = async () => {
    let append = await Trending();
    setData(append.items);
  };

  // useEffect(() => {
  //   handleTheData(id)
  // }, []);
  // const handleTheData = async(id)=>{
  //   const append = await getImage(id)
  //   setData(append)
  // }
  return (
    <Box>
      <Navbar />
      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box
          ml={{ base: "0px", sm: "15px", md: "15px", lg: "60px" }}
          mr={1}
          mt={{ base: "55px", sm: "15px", md: "15px", lg: "20px" }}
        >
          {/* <Image src={data.Poster} /> */}
          <AspectRatio
            maxW="960px"
            ratio={16 / 9}
            // width={{ base: "339px", sm: "450px", md: "550px", lg: "760px" }}
            // height={{ base: "190px", sm: "254px", md: "308px", lg: "430px" }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              allowFullScreen={true}
            ></iframe>
          </AspectRatio>
          {/* Details  */}
          <Box>
            <Text
              color={"white"}
              ml={{ base: 0, sm: 0, md: 0, lg: 2 }}
              mt={2}
              textAlign={"left"}
              fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}
              fontWeight={{ base: 600, sm: 600, md: 600, lg: 600 }}
            >
              {videoDetails && videoDetails[0].snippet.title}
            </Text>
          </Box>
          <Flex
            minWidth="max-content"
            position={"relative"}
            width={"auto"}
            overflow={"hidden"}
            mt={3}
            justifyContent={"space-between"}
          >
            {/* Box 1 */}
            <Flex mr={2}>
              <Box>
                {/* Channel logo  */}
                <Image
                  mt={{ base: "", sm: "", md: "5px", lg: "" }}
                  ml={2}
                  borderRadius="full"
                  boxSize={{
                    base: "30px",
                    sm: "45px",
                    md: "40px",
                    lg: "45px",
                  }}
                  src={icon[Math.floor(Math.random() * 10)].img}
                />
              </Box>
              {/* Channel name  */}
              <Flex>
                <Text
                  mt={{
                    base: "5px",
                    sm: "10px",
                    md: "14px",
                    lg: "0px",
                  }}
                  ml={2}
                  color={"white"}
                  fontSize={{
                    base: "11px",
                    sm: "15px",
                    md: "14px",
                    lg: "16px",
                  }}
                  fontWeight={{ base: 500, sm: 500, md: 500, lg: 500 }}
                >
                  {videoDetails && videoDetails[0].snippet.channelTitle}{" "}
                </Text>
                <Icon
                  ml={1}
                  mt={{
                    base: "7px",
                    sm: "13px",
                    md: "14px",
                    lg: "0px",
                  }}
                  as={CheckCircleIcon}
                  color={"white"}
                  h={{ base: 3, sm: 4, md: 3, lg: 4 }}
                  w={{ base: 3, sm: 4, md: 3, lg: 4 }}
                />
              </Flex>
            </Flex>
            {/* Box 2 */}
            {/* subscribe button  */}
            <Box
              mt={{ base: 0, sm: 1, md: 2, lg: 1 }}
              mr={{ base: "7px", sm: 0, md: "25px", lg: "30px" }}
            >
              <Button size={"xs"} borderRadius={"full"}>
                <Text
                  bg={"none"}
                  fontSize={{
                    base: "9px",
                    sm: "13px",
                    md: "13px",
                    lg: "13px",
                  }}
                  fontWeight={{ base: 500, sm: 500, md: 500, lg: 500 }}
                >
                  Subscribe
                </Text>
              </Button>
            </Box>
            {/* Like button  */}
            {/* Box 3  */}
            <Box
              mt={{ base: 0, sm: 1, md: 2, lg: 1 }}
              mr={{ base: "0", sm: 0, md: "25px", lg: "30px" }}
            >
              <Button
                _hover={{ bgColor: "rgb(59,59,59)" }}
                size={"xs"}
                borderLeftRadius={"full"}
                bgColor={"rgb(59,59,59)"}
              >
                <Text
                  bg={"none"}
                  color={"white"}
                  fontSize={{ base: "", sm: "", md: "", lg: "16px" }}
                  fontWeight={{ base: "", sm: "", md: "", lg: 500 }}
                >
                  <Flex
                    justifyContent={"space-around"}
                    gap={{ base: 0, sm: 0, md: 0, lg: 2 }}
                    bg={"none"}
                    bgColor={"rgb(59,59,59)"}
                  >
                    <Icon
                      as={ThumbUpOffAltIcon}
                      h={{ base: 5, sm: "", md: "", lg: "" }}
                      w={{ base: 5, sm: "", md: "", lg: "" }}
                      bg={"rgb(59,59,59)"}
                    />
                    <Text
                      bgColor={"rgb(59,59,59)"}
                      fontSize={{ base: "", sm: "", md: "", lg: "13px" }}
                      color={"white"}
                      m={1}
                    >
                      {Math.floor(Math.random() * 100)}K
                    </Text>
                  </Flex>
                </Text>
              </Button>
              <Button
                _hover={{ bgColor: "rgb(59,59,59)" }}
                size={"xs"}
                bg={"none"}
                borderRightRadius={"full"}
                bgColor={"rgb(59,59,59)"}
              >
                <Text
                  bg={"none"}
                  color={"white"}
                  fontSize={{ base: "", sm: "", md: "", lg: "16px" }}
                  fontWeight={{ base: "", sm: "", md: "", lg: 500 }}
                >
                  <Icon
                    mt={{base: "2px", sm: "", md: "", lg: ""}}
                    h={{ base: 5, sm: "", md: "", lg: "" }}
                    w={{ base: 5, sm: "", md: "", lg: "" }}
                    as={ThumbDownOffAltIcon}
                    bg={"none"}
                  />
                </Text>
              </Button>

              <Button
                _hover={{ bgColor: "rgb(59,59,59)" }}
                size={"sm"}
                bg={"none"}
                ml={2}
                borderRadius={"full"}
                bgColor={"rgb(59,59,59)"}
              >
                <Text
                  bg={"none"}
                  color={"white"}
                  fontSize={{ base: "", sm: "", md: "", lg: "16px" }}
                  fontWeight={{ base: "", sm: "", md: "", lg: 500 }}
                >
                  <Flex bg={"rgb(59,59,59)"}>
                    <Icon
                      h={{ base: 3, sm: "", md: "", lg: "" }}
                      w={{ base: 3, sm: "", md: "", lg: "" }}
                      as={ShareIcon}
                      bg={"rgb(59,59,59)"}
                    />{" "}
                    <Text
                      m={{ base: 0, sm: 0, md: 0, lg: 1 }}
                      mt={{ base: 0, sm: 0, md: 0, lg: "" }}
                      fontSize={{ base: "9px", sm: "", md: "", lg: "13px" }}
                      bgColor={"rgb(59,59,59)"}
                    >
                      {"Share"}
                    </Text>
                  </Flex>
                </Text>
              </Button>
              <Button
                _hover={{ bgColor: "rgb(59,59,59)" }}
                size={"xs"}
                bg={"none"}
                ml={2}
                borderRadius={"full"}
                bgColor={"rgb(59,59,59)"}
              >
                <Text
                  bg={"none"}
                  color={"white"}
                  fontSize={{ base: "", sm: "", md: "", lg: "16px" }}
                  fontWeight={{ base: "", sm: "", md: "", lg: 500 }}
                >
                  <Flex bg={"rgb(59,59,59)"}>
                    <Icon as={MoreHorizIcon} bg={"rgb(59,59,59)"} />{" "}
                  </Flex>
                </Text>
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box mt={{ base: "55px", sm: "55px", md: "15px", lg: "30px" }}>
          {cart.map((user, i) => {
            return (
              // search related
              <Link to={`/video/${user.id.videoId}`}>
                <Flex key={i}>
                  <Box mr={2} mb={4} ml={4}>
                    <Image
                      borderRadius={10}
                      objectFit={"cover"}
                      src={user.snippet.thumbnails.high.url}
                      h={{ base: "20px", sm: "40px", md: "60px", lg: "80px" }}
                      w={{ base: "20px", sm: "40px", md: "60px", lg: "80px" }}
                    />
                  </Box>
                  <Box width={300}>
                    <Text
                      fontSize={"13px"}
                      p={1}
                      color={"white"}
                      alignItems={"left"}
                      textAlign={"left"}
                    >
                      {user.snippet.title}
                    </Text>
                    <Flex ml={5}>
                      <Image
                        mt={2}
                        src={icon[i].img}
                        borderRadius={700}
                        height={10}
                        width={10}
                      />
                      <Text
                        p={3}
                        color={"white"}
                        alignItems={"left"}
                        textAlign={"left"}
                      >
                        {user.snippet.channelTitle}
                      </Text>
                    </Flex>
                  </Box>
                  {/* <Text color={"white"} textAlign="left">{user.id}</Text> */}
                </Flex>
              </Link>
            );
          })}
        </Box>

        {cart.length === 0 && (
          <Box mt={{ base: "-40px", sm: "-20px", md: "15px", lg: "30px" }}>
            {data.map((user, i) => {
              return (
                <Link to={`/video/${user.id}`}>
                  <Flex
                    key={i}
                    flexDirection={{
                      base: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                    }}
                  >
                    <Box
                      mr={2}
                      mt={2}
                      mb={4}
                      ml={{ base: 2, sm: 2, md: 2, lg: 3 }}
                    >
                      <Image
                        borderRadius={10}
                        objectFit={"cover"}
                        src={user.snippet.thumbnails.high.url}
                        h={{
                          base: "180px",
                          sm: "160px",
                          md: "100px",
                          lg: "120px",
                        }}
                        w={{
                          base: "340px",
                          sm: "330px",
                          md: "235px",
                          lg: "280px",
                        }}
                      />
                    </Box>
                    <Box
                      mt={{ base: -3, sm: 4, md: 0, lg: 0 }}
                      ml={{ base: 5, sm: 2, md: 2, lg: 3 }}
                      width={{ base: 340, sm: 400, md: 300, lg: 300 }}
                    >
                      <Box
                        h={{ base: "", sm: "52px", md: "44px", lg: "48px" }}
                        overflow="hidden"
                      >
                        <Text
                          fontSize={{
                            base: "12px",
                            sm: "16px",
                            md: "12px",
                            lg: "13px",
                          }}
                          p={1}
                          color={"white"}
                          alignItems={"left"}
                          textAlign={"left"}
                        >
                          {user.snippet.title}
                        </Text>
                      </Box>
                      <Flex ml={2} mt={{ base: -1, sm: 0, md: 0, lg: 0 }}>
                        <Image
                          mt={{ base: 2, sm: 5, md: 0, lg: 0 }}
                          src={icon[i].img}
                          borderRadius={700}
                          boxSize={{
                            base: "25px",
                            sm: "40px",
                            md: "30px",
                            lg: "40px",
                          }}
                        />
                        <Text
                          p={3}
                          color={"white"}
                          alignItems={"left"}
                          textAlign={"left"}
                          mt={{ base: 0, sm: 4, md: 1, lg: 1 }}
                          fontSize={{
                            base: "11px",
                            sm: "15px",
                            md: "13px",
                            lg: "14px",
                          }}
                          fontWeight={500}
                        >
                          {user.snippet.channelTitle}
                        </Text>
                      </Flex>
                    </Box>
                    {/* <Text color={"white"} textAlign="left">{user.id}</Text> */}
                  </Flex>
                </Link>
              );
            })}
          </Box>
        )}
      </Flex>
    </Box>
  );
}

export default Video;
