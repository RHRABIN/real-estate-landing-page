import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="px-6 lg:px-40 mb-6">
      <footer class="footer text-base-content flex flex-col lg:flex-row justify-between">
        <div>
          <span class="text-xl font-bold">Product</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="text-xl font-bold">Resources</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="text-xl font-bold">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="text-xl font-bold">Get in touch</span>

          <p className="mt-4">
            You’ll find your next home, in any style you prefer.
          </p>
          <div className="flex gap-4 mt-8">
            <a class="link link-hover">
              <FaFacebookF />
            </a>
            <a class="link link-hover">
              <AiOutlineTwitter />
            </a>
            <a class="link link-hover">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </footer>
      <div className="flex justify-between mt-6">
        <h1 className="font-bold ">Besnik.</h1>
        <p>Copyright 2020.com, All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
