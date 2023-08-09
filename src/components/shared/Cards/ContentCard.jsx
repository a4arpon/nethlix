'use client'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography
} from '@material-tailwind/react'
import Image from 'next/image'
const ContentCard = ({ contentData }) => {
  const {
    adult,
    original_title,

    vote_average,
    vote_count,
    poster_path,
  } = contentData
  return (
    <Card className="w-96 h-[540px]">
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
          {original_title}
        </Typography>
        <Typography>...</Typography>
      </CardBody>
      <CardFooter className="pt-0 justify-end flex mt-auto">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  )
}

export default ContentCard
