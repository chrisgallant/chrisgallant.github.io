import { Badge, Box, Image } from "@chakra-ui/react";
export const Thumbnail = ({ src, alt, title, year, media, size, isSold }) => {
  return (
    <Box as="a" href={`/${title}`} maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden">
      <Image src={src} alt={alt} height='200px' objectFit='cover' width='100%'style={{transform: 'translate3d(0, 0, 1px)'}}/>

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
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
      </Box>
    </Box>
  );
};
