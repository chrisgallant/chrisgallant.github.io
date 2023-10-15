import {Badge, Box, Image} from "@chakra-ui/react";

export const ArtPage = ({ alt, title, year, media, size, isSold }) => {
  return (
    <>
      <Image src={`/art/${title}.jpg`} alt={alt} />
        <Box display="flex" alignItems="baseline">
            <Box
                mt="1"
                fontWeight="semibold"
                as="h1"
                lineHeight="tight"
                noOfLines={1}
                fontSize='lg'
            >
                {title.replaceAll('-', ' ')}
            </Box>
            {isSold && (
                <Badge borderRadius="full" px="2" colorScheme="red" ml="2">
                    Sold
                </Badge>
            )}
        </Box>
        <Box color="gray.600" fontSize="sm">
            {year}
        </Box>
        <Box color="gray.600" fontSize="sm">
            {size}
        </Box>
        <Box color="gray.600" fontSize="sm">
            {media}
        </Box>
    </>
  );
};
