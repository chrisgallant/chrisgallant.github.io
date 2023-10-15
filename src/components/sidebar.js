import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsRobot } from "react-icons/bs";

const LinkItems = [{ name: "Artwork", path: '/' }, { name: "Contact", path: '/#/contact' }];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <HStack>
          <Text fontSize="2xl" fontWeight="bold">
            chrisgallant
          </Text>
          <Text fontSize="2xl" fontWeight="200">
            .com
          </Text>
        </HStack>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
          <NavItem key={link.name} path={link.path}>{link.name}</NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, path, children, ...rest }) => {
  return (
    <Box
      as="a"
      href={path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#22812a",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      width={"100vw"}
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between" }}
      display={{ base: "flex", md: "none" }}
      {...rest}
    >
      <HStack>
        <Text fontSize="2xl" fontWeight="bold">
          chrisgallant
        </Text>
        <Text fontSize="2xl" fontWeight="200">
          .com
        </Text>
      </HStack>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="primary"
        aria-label="open menu"
        icon={<BsRobot style={{ height: "60px", width: "60px" }} />}
        height={"100%"}
        width={"24px"}
      />
    </Flex>
  );
};

const SidebarWithHeader = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
