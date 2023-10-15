import {SimpleGrid} from "@chakra-ui/react";
import {Thumbnail} from "./thumbnail";

export const Thumbnails = ({art}) => {
    return (
        <SimpleGrid columns={{base: 2, sm: 2, md: 2, lg: 3, xl: 4}} spacing={6}>
            {art.map((artwork) => (
                <Thumbnail
                    src={`/art/${artwork.title}.jpg`}
                    key={artwork.title}
                    {...artwork}
                />
            ))}
        </SimpleGrid>
    );
};