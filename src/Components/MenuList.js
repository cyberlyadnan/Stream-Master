import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHome,
  faPlayCircle,
  faUserFriends,
  faUser,
  faUserCircle,
  faListAlt,
  faVideo,
  faClock,
  faThumbsUp,
  faFire,
  faShoppingBag,
  faFilm,
  faBroadcastTower,
  faGamepad,
  faNewspaper,
  faBicycle,
  faBookOpen,
  faTshirt,
  faGem,
  faCode,
  faMusic,
  faChild,
  faCog,
  faHistory,
  faQuestionCircle,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const MenuList = () => {
  return (
    <div className="w-40 lg:w-64 bg-white shadow-lg px-3 py-1 lg:p-4 h-screen overflow-y-auto">
      <div className="mb-2 lg:mb-6">
        <h3 className="text-[13px] lg:text-[13x] font-bold mb-2 lg:mb-2 lg:pt-1">Home</h3>
        <ul>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faHome} />
              Home
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faPlayCircle} />
              Shorts
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faUserFriends} />
              Subscriptions
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <hr />
        <h3 className="text-[13x] font-bold mb-2 pt-2">Library</h3>
        <ul>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faUser} />
              You
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faUserCircle} />
              Your channel
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faHistory} />
              History
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faListAlt} />
              Playlists
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faVideo} />
              Your videos
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faClock} />
              Watch Later
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faThumbsUp} />
              Liked videos
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <hr />

        <h3 className="text-[13x] font-bold mb-2 pt-2">Subscriptions</h3>
        <ul>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              Its Kunal
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              GAMING PC WALA
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              CodeWithHarry
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              take U forward
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              Show more
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <hr />

        <h3 className="text-[13x] font-bold mb-2 pt-2">Explore</h3>
        <ul>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faFire} />
              Trending
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faShoppingBag} />
              Shopping
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faMusic} />
              Music
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faFilm} />
              Films
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faBroadcastTower} />
              Live
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faGamepad} />
              Gaming
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faNewspaper} />
              News
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faBicycle} />
              Sport
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faBookOpen} />
              Courses
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faTshirt} />
              Podcasts
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <hr />

        <h3 className="text-[13x] font-bold mb-2 pt-2">More from YouTube</h3>
        <ul>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faGem} />
              YT Premium
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faCode} />
              YT Studio
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faMusic} />
              YT Music
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faChild} />
              YT Kids
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <hr />

        <h3 className="text-[13x] font-bold mb-2 pt-2">Settings</h3>
        <ul>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faCog} />
              Settings
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faQuestionCircle} />
              Report history
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faComment} />
              Help
            </Link>
          </li>
          <li className="px-1 py-1 lg:mb-1 lg:px-3 lg:py-1 text-[15px] lg:text-[17px] cursor-pointer hover:bg-gray-100 rounded-md">
            <Link to="/" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon className="pr-2 lg:px-2 lg:pr-5" icon={faPaperPlane} />
              Send feedback
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
