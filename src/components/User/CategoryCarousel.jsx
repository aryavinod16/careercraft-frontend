import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Button } from '../ui/button'


const category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Scientist",
  "Data Analyst",
  "DevOps Engineer",
  "Cyber Security Specialist",
  "Cloud Engineer"

]
const CategoryCarousel = () => {
  return (
    <>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent >
        {
            category.map((cat, index) => (
              <CarouselItem className="md:basis-1/2 lg-basis-1/3">
       <Button variant="outline" className="rounded-full" >{cat}</Button>
              </CarouselItem>
            ))

          }
        </CarouselContent>
       <CarouselPrevious/>
       <CarouselNext/>
      </Carousel>
    </>
  )
}

export default CategoryCarousel
