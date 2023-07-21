import React from "react";

const Footer = () => {
  return (
    <footer class="bg-blue-100 rounded-lg shadow  ">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span class="text-sm text-black font-bold sm:text-center ">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Stack Place™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
