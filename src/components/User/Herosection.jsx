import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import CategoryCarousel from "./CategoryCarousel";

function Herosection() {
  return (
    <div className="container mx-auto flex flex-col items-center px-4 text-center md:py-16 lg:px-20 xl:max-w-4xl">
      <h1 className="text-3xl font-bold leading-relaxed sm:text-4xl md:text-5xl">
        Your Gateway to Success, <br />
        Discover Your
        <span className="text-[#1E3A8A]"> Dream Job </span> Today!
      </h1>
      <p className="px-4 mt-6 text-sm text-gray-600 sm:text-base md:text-lg">
        Take the first step toward achieving your career aspirations. Our
        platform connects you with opportunities tailored to your skills and
        passions, helping you land your dream job. Start exploring today!
      </p>

      {/* Search Bar */}
      <div className="flex w-full mt-6 items-center gap-3 px-4 py-2 bg-white shadow-md border border-gray-300 rounded-full sm:px-6 lg:px-8">
        <input
          type="text"
          placeholder="Find your dream jobs"
          className="flex-grow bg-transparent text-sm sm:text-base border-none outline-none focus:ring-0"
        />
        <Button
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E3A8A] hover:bg-[#60A5FA] text-white transition-all"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>

      {/* <CategoryCarousel className="mt-8" /> */}
    </div>
  );
}

export default Herosection;
