"use client";

import { Dropdown, Navbar, Avatar } from "flowbite-react";
import logo from "logo.svg";

export default function NavbarWithDropdown() {
  return (
    <Navbar fluid rounded className="bg-[#A2DE71] ">
      <Navbar.Brand href="https://flowbite-react.com">
        <img alt="Flowbite React Logo" className="mr-3 h-6 sm:h-9" src={logo} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Sanook-Mai
        </span>
      </Navbar.Brand>
      <Navbar.Brand>
        <div className="relative flex overflow-x-hidden overflow-y-hidden max-w-[400px] bg-[#FBEC81] text-[#FF0000] border-4 border-rose-500">
          <div className="py-1 animate-marquee whitespace-nowrap">
            <span className="mx-4 text-xl"> iphone 15 เปิดให้จองแล้ว</span>
            <span className="mx-4 text-xl"> โปรดอัพเดท App Seller</span>
          </div>
        </div>
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link></Navbar.Link>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>

      <div className="flex md:order-2">
        <Dropdown
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
