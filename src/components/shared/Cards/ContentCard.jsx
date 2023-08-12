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
import Link from 'next/link'
const ContentCard = ({ contentData }) => {
  const { adult, original_title, vote_average, vote_count, poster_path, id } =
    contentData
  return (
    <Card className="w-full h-[560px] shadow-lg shadow-gray-400">
      <CardBody>
        <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
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
          <Link href={'/media/' + id}>
            <Badge content="18+">
              <Button>Read More</Button>
            </Badge>
          </Link>
        ) : (
          <Link href={'/media/' + id}>
            <Button>Read More</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}

export default ContentCard
