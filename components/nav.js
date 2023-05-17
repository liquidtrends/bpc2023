import React from "react";
import Link from "next/link";


const Nav = ({  }) => {
  return (
    <div className="bg-[#FEF1DD]">
      <nav className="w-3/4 mx-auto p-3">
        <div className="">
          <ul className="">
            <li>
              <Link href="/" legacyBehavior>
                <a><img className="w-72" src="/bearpaw-logo.svg" /></a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="">

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
