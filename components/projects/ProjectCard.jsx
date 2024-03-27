"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Github, Link } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectCard = ({
  title,
  description,
  images,
  technologies,
  github,
  live,
}) => {
  return (
    <Card className="w-[400px] md:w-[350px] lg-[350px]  flex flex-col justify-between">
      <CardHeader>
        <CardDescription>
          <CardTitle className="text-black dark:text-white cursor-pointer">
            {title}
          </CardTitle>

          <CardDescription className="mt-2">{description}</CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="h-[200px]">
                  <img src={image.url} alt={title} className="h-full w-full" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        }
      </CardContent>
      <CardFooter className="flex justify-between">
        <button onClick={() => window.open(live)}>
          <Link />
        </button>
        <button onClick={() => window.open(github)}>
          <Github />
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
