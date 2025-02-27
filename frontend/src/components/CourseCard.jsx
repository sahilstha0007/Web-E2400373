import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "./components/ui/card"; // Adjust path if needed
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { formatPrice } from "./lib/utils"; // Adjust path if needed

const CourseCard = ({ course, onGoToCourse }) => {
  return (
    <Card className="course-card group" onClick={() => onGoToCourse(course)}>
      <CardHeader className="course-card__header">
        <img
          src={course.image || "/placeholder.png"}
          alt={course.title}
          width={400}
          height={350}
          className="course-card__image"
        />
      </CardHeader>
      <CardContent className="course-card__content">
        <CardTitle className="course-card__title">
          {course.title}: {course.description}
        </CardTitle>

        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src={course.teacherImage} alt={course.teacherName} />
            <AvatarFallback className="bg-secondary-700 text-black">
              {course.teacherName?.charAt(0) || "?"}
            </AvatarFallback>
          </Avatar>
          <p className="text-sm text-customgreys-dirtyGrey">
            {course.teacherName}
          </p>
        </div>
      </CardContent>
      <CardFooter className="course-card__footer">
        <div className="course-card__category">{course.category}</div>
        <span className="course-card__price">{formatPrice(course.price)}</span>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
