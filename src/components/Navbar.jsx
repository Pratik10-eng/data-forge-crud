import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";
import { showUser } from "../features/userDetailSlice";
import ThemeToggle from "./Theme/ThemeToggle";

const Navbar = () => {
  const allusers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();
  const location = useLocation();

  const [searchData, setSearchData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      await dispatch(showUser()); // Dispatch the async action to fetch users
      setLoading(false); // Set loading to false once the data is fetched
    };
    loadUsers();
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "rgb(193, 223, 204)" }}
      >
        <div className="container-fluid ">
          <h4 className="navbar-brand">
            DataForge
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "normal",
                textTransform: "uppercase",
              }}
            >
              (RTK)
            </span>
          </h4>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                {loading ? (
                  <span className="nav-link">Loading...</span>
                ) : (
                  <Link to="/read" className="nav-link">
                    All Post({allusers.length})
                  </Link>
                )}
              </li>
            </ul>
            <ThemeToggle />
            {/* <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search the data..."
              aria-label="Search"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            /> */}
            {location.pathname === "/read" && (
              <input
                className="form-control me-2 w-25"
                type="search"
                placeholder="Search the data..."
                aria-label="Search"
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
