import React from "react";
import NavbarCourse from "../components/NavbarCourse";
import CourseMenu from "../components/CourseMenu";

function CourseMain() {
  return (
    <>
      <div className="h-screen">
        <NavbarCourse />
        <ul className="flex flex-col">
          <li>
            <CourseMenu />
          </li>
          <li className="ml-[24%]">Тут буде контент</li>
        </ul>
      </div>
    </>
  );
}

export default CourseMain;
