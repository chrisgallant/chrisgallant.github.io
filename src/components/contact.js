import {Box} from "@chakra-ui/react";

export const Contact = () => {
    return <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={1}
    >
       email: <a href='mailto:christopherjgallant@gmail.com'>christopherjgallant@gmail.com</a>
    </Box>
}