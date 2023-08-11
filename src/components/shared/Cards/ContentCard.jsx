'use client'
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography
} from '@material-tailwind/react'
import Image from 'next/image'
const ContentCard = ({ contentData }) => {
  const { adult, original_title, vote_average, vote_count, poster_path } =
    contentData
  return (
    <Card className="w-full h-[560px]">
      <CardBody>
        <Image
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
          alt="card-image"
          width="500"
          height="800"
          className="object-cover h-[300px] rounded-lg"
        />
        <Typography
          variant="h5"
          className="mb-2 mt-5 border-t-2 pt-3 font-semibold"
        >
          {original_title.length > 80
            ? original_title.substring(0, 80) + '...'
            : original_title}
        </Typography>
        <Typography>TMDB Rating: {vote_average}</Typography>
        <Typography>Vote Count: {vote_count}</Typography>
      </CardBody>
      <CardFooter className="pt-0 justify-end flex mt-auto">
        {adult ? (
          <Badge content="18+">
            <Button>Read More</Button>
          </Badge>
        ) : (
          <Button>Read More</Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default ContentCard
