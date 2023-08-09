'use client'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import {
  Button,
  IconButton,
  Input,
  Navbar,
  Typography
} from '@material-tailwind/react'

const NavItem = () => {
  return (
    <Navbar className="mx-auto  px-4 py-3 mt-5">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="gray">
            <Cog6ToothIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: 'min-w-[288px]',
            }}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>
      </div>
    </Navbar>
  )
}
export default NavItem
