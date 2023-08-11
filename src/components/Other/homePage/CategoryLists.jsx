'use client'
import { Button } from '@material-tailwind/react'
import Link from 'next/link'

const CategoryLists = ({ categoryList }) => {
  return (
    <section id="moviesCategory" className="">
      <h2 className="text-xl text-center md:text-2xl lg:text-3xl border-b-2 pb-2 mb-3">
        Movie Categories
      </h2>
      <div className="flex gap-3 justify-center flex-wrap">
        {categoryList?.map((item) => (
          <Link href={`/genre/${item?.id}`} key={item?.id}>
            <Button>{item?.name}</Button>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryLists
