import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPermissionsModal, setShowPermissionsModal] = useState(false);
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("admin-token");
    const url = "http://localhost:1000/user/get-all-users"; // Assuming the endpoint is corrected to "/user/get-all-users"
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`, // Include Bearer prefix with the token
        },
      })
      .then((response) => {
        setAllUsers(response.data.response); // Access the response data
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const openConfirmation = (user) => {
    setSelectedUser(user);
    setShowConfirmation(true);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    setSelectedUser(null);
  };

  const handleDelete = () => {
    const config = {
      method: "delete",
      url: `http://localhost:1000/user/delete-user/${selectedUser.user_id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
      },
    };
    axios(config)
      .then(() => {
        toast.success("User Delete Successfully");
        setAllUsers((prevUsers) =>
          prevUsers.filter((user) => user.user_id !== selectedUser.user_id)
        );
      })
      .catch(() => {
        toast.error("Couldn't delete User");
      });
    closeConfirmation();
  };

  const openPermissionsModal = (user) => {
    setShowPermissionsModal(true);

    // const token = localStorage.getItem("admin-token");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVzIjpbeyJ1c2VyUm9sZV9pZCI6MjQxLCJyb2xlX2lkIjoxLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjoxLCJwcm9jZXNzX2lkIjoxLCJyb2xlR3JvdXBfaWQiOjF9LHsidXNlclJvbGVfaWQiOjI0Miwicm9sZV9pZCI6MSwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MSwicHJvY2Vzc19pZCI6Miwicm9sZUdyb3VwX2lkIjoyfSx7InVzZXJSb2xlX2lkIjoyNDMsInJvbGVfaWQiOjEsInVzZXJfaWQiOjIsInNpdGVfaWQiOjEsInByb2Nlc3NfaWQiOjMsInJvbGVHcm91cF9pZCI6M30seyJ1c2VyUm9sZV9pZCI6MjQ0LCJyb2xlX2lkIjoxLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjoxLCJwcm9jZXNzX2lkIjo0LCJyb2xlR3JvdXBfaWQiOjR9LHsidXNlclJvbGVfaWQiOjI0NSwicm9sZV9pZCI6MSwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MiwicHJvY2Vzc19pZCI6MSwicm9sZUdyb3VwX2lkIjo1fSx7InVzZXJSb2xlX2lkIjoyNDYsInJvbGVfaWQiOjEsInVzZXJfaWQiOjIsInNpdGVfaWQiOjIsInByb2Nlc3NfaWQiOjIsInJvbGVHcm91cF9pZCI6Nn0seyJ1c2VyUm9sZV9pZCI6MjQ3LCJyb2xlX2lkIjoxLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjoyLCJwcm9jZXNzX2lkIjozLCJyb2xlR3JvdXBfaWQiOjd9LHsidXNlclJvbGVfaWQiOjI0OCwicm9sZV9pZCI6MSwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MiwicHJvY2Vzc19pZCI6NCwicm9sZUdyb3VwX2lkIjo4fSx7InVzZXJSb2xlX2lkIjoyNDksInJvbGVfaWQiOjEsInVzZXJfaWQiOjIsInNpdGVfaWQiOjMsInByb2Nlc3NfaWQiOjEsInJvbGVHcm91cF9pZCI6OX0seyJ1c2VyUm9sZV9pZCI6MjUwLCJyb2xlX2lkIjoxLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjozLCJwcm9jZXNzX2lkIjoyLCJyb2xlR3JvdXBfaWQiOjEwfSx7InVzZXJSb2xlX2lkIjoyNTEsInJvbGVfaWQiOjEsInVzZXJfaWQiOjIsInNpdGVfaWQiOjMsInByb2Nlc3NfaWQiOjMsInJvbGVHcm91cF9pZCI6MTF9LHsidXNlclJvbGVfaWQiOjI1Miwicm9sZV9pZCI6MSwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MywicHJvY2Vzc19pZCI6NCwicm9sZUdyb3VwX2lkIjoxMn0seyJ1c2VyUm9sZV9pZCI6MjUzLCJyb2xlX2lkIjoxLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjo0LCJwcm9jZXNzX2lkIjoxLCJyb2xlR3JvdXBfaWQiOjEzfSx7InVzZXJSb2xlX2lkIjoyNTQsInJvbGVfaWQiOjEsInVzZXJfaWQiOjIsInNpdGVfaWQiOjQsInByb2Nlc3NfaWQiOjIsInJvbGVHcm91cF9pZCI6MTR9LHsidXNlclJvbGVfaWQiOjI1NSwicm9sZV9pZCI6MSwidXNlcl9pZCI6Miwic2l0ZV9pZCI6NCwicHJvY2Vzc19pZCI6Mywicm9sZUdyb3VwX2lkIjoxNX0seyJ1c2VyUm9sZV9pZCI6MjU2LCJyb2xlX2lkIjoxLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjo0LCJwcm9jZXNzX2lkIjo0LCJyb2xlR3JvdXBfaWQiOjE2fSx7InVzZXJSb2xlX2lkIjoyNTcsInJvbGVfaWQiOjIsInVzZXJfaWQiOjIsInNpdGVfaWQiOjEsInByb2Nlc3NfaWQiOjEsInJvbGVHcm91cF9pZCI6MTd9LHsidXNlclJvbGVfaWQiOjI1OCwicm9sZV9pZCI6MiwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MSwicHJvY2Vzc19pZCI6Miwicm9sZUdyb3VwX2lkIjoxOH0seyJ1c2VyUm9sZV9pZCI6MjU5LCJyb2xlX2lkIjoyLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjoxLCJwcm9jZXNzX2lkIjozLCJyb2xlR3JvdXBfaWQiOjE5fSx7InVzZXJSb2xlX2lkIjoyNjAsInJvbGVfaWQiOjIsInVzZXJfaWQiOjIsInNpdGVfaWQiOjEsInByb2Nlc3NfaWQiOjQsInJvbGVHcm91cF9pZCI6MjB9LHsidXNlclJvbGVfaWQiOjI2MSwicm9sZV9pZCI6MiwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MiwicHJvY2Vzc19pZCI6MSwicm9sZUdyb3VwX2lkIjoyMX0seyJ1c2VyUm9sZV9pZCI6MjYyLCJyb2xlX2lkIjoyLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjoyLCJwcm9jZXNzX2lkIjoyLCJyb2xlR3JvdXBfaWQiOjIyfSx7InVzZXJSb2xlX2lkIjoyNjMsInJvbGVfaWQiOjIsInVzZXJfaWQiOjIsInNpdGVfaWQiOjIsInByb2Nlc3NfaWQiOjMsInJvbGVHcm91cF9pZCI6MjN9LHsidXNlclJvbGVfaWQiOjI2NCwicm9sZV9pZCI6MiwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MiwicHJvY2Vzc19pZCI6NCwicm9sZUdyb3VwX2lkIjoyNH0seyJ1c2VyUm9sZV9pZCI6MjY1LCJyb2xlX2lkIjoyLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjozLCJwcm9jZXNzX2lkIjoxLCJyb2xlR3JvdXBfaWQiOjI1fSx7InVzZXJSb2xlX2lkIjoyNjYsInJvbGVfaWQiOjIsInVzZXJfaWQiOjIsInNpdGVfaWQiOjMsInByb2Nlc3NfaWQiOjIsInJvbGVHcm91cF9pZCI6MjZ9LHsidXNlclJvbGVfaWQiOjI2Nywicm9sZV9pZCI6MiwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MywicHJvY2Vzc19pZCI6Mywicm9sZUdyb3VwX2lkIjoyN30seyJ1c2VyUm9sZV9pZCI6MjY4LCJyb2xlX2lkIjoyLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjozLCJwcm9jZXNzX2lkIjo0LCJyb2xlR3JvdXBfaWQiOjI4fSx7InVzZXJSb2xlX2lkIjoyNjksInJvbGVfaWQiOjIsInVzZXJfaWQiOjIsInNpdGVfaWQiOjQsInByb2Nlc3NfaWQiOjEsInJvbGVHcm91cF9pZCI6Mjl9LHsidXNlclJvbGVfaWQiOjI3MCwicm9sZV9pZCI6MiwidXNlcl9pZCI6Miwic2l0ZV9pZCI6NCwicHJvY2Vzc19pZCI6Miwicm9sZUdyb3VwX2lkIjozMH0seyJ1c2VyUm9sZV9pZCI6MjcxLCJyb2xlX2lkIjoyLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjo0LCJwcm9jZXNzX2lkIjozLCJyb2xlR3JvdXBfaWQiOjMxfSx7InVzZXJSb2xlX2lkIjoyNzIsInJvbGVfaWQiOjIsInVzZXJfaWQiOjIsInNpdGVfaWQiOjQsInByb2Nlc3NfaWQiOjQsInJvbGVHcm91cF9pZCI6MzJ9LHsidXNlclJvbGVfaWQiOjI3Mywicm9sZV9pZCI6MywidXNlcl9pZCI6Miwic2l0ZV9pZCI6MSwicHJvY2Vzc19pZCI6MSwicm9sZUdyb3VwX2lkIjozM30seyJ1c2VyUm9sZV9pZCI6Mjc0LCJyb2xlX2lkIjozLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjoxLCJwcm9jZXNzX2lkIjoyLCJyb2xlR3JvdXBfaWQiOjM0fSx7InVzZXJSb2xlX2lkIjoyNzUsInJvbGVfaWQiOjMsInVzZXJfaWQiOjIsInNpdGVfaWQiOjEsInByb2Nlc3NfaWQiOjMsInJvbGVHcm91cF9pZCI6MzV9LHsidXNlclJvbGVfaWQiOjI3Niwicm9sZV9pZCI6MywidXNlcl9pZCI6Miwic2l0ZV9pZCI6MSwicHJvY2Vzc19pZCI6NCwicm9sZUdyb3VwX2lkIjozNn0seyJ1c2VyUm9sZV9pZCI6Mjc3LCJyb2xlX2lkIjozLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjoyLCJwcm9jZXNzX2lkIjoxLCJyb2xlR3JvdXBfaWQiOjM3fSx7InVzZXJSb2xlX2lkIjoyNzgsInJvbGVfaWQiOjMsInVzZXJfaWQiOjIsInNpdGVfaWQiOjIsInByb2Nlc3NfaWQiOjIsInJvbGVHcm91cF9pZCI6Mzh9LHsidXNlclJvbGVfaWQiOjI3OSwicm9sZV9pZCI6MywidXNlcl9pZCI6Miwic2l0ZV9pZCI6MiwicHJvY2Vzc19pZCI6Mywicm9sZUdyb3VwX2lkIjozOX0seyJ1c2VyUm9sZV9pZCI6MjgwLCJyb2xlX2lkIjozLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjoyLCJwcm9jZXNzX2lkIjo0LCJyb2xlR3JvdXBfaWQiOjQwfSx7InVzZXJSb2xlX2lkIjoyODEsInJvbGVfaWQiOjMsInVzZXJfaWQiOjIsInNpdGVfaWQiOjMsInByb2Nlc3NfaWQiOjEsInJvbGVHcm91cF9pZCI6NDF9LHsidXNlclJvbGVfaWQiOjI4Miwicm9sZV9pZCI6MywidXNlcl9pZCI6Miwic2l0ZV9pZCI6MywicHJvY2Vzc19pZCI6Miwicm9sZUdyb3VwX2lkIjo0Mn0seyJ1c2VyUm9sZV9pZCI6MjgzLCJyb2xlX2lkIjozLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjozLCJwcm9jZXNzX2lkIjozLCJyb2xlR3JvdXBfaWQiOjQzfSx7InVzZXJSb2xlX2lkIjoyODQsInJvbGVfaWQiOjMsInVzZXJfaWQiOjIsInNpdGVfaWQiOjMsInByb2Nlc3NfaWQiOjQsInJvbGVHcm91cF9pZCI6NDR9LHsidXNlclJvbGVfaWQiOjI4NSwicm9sZV9pZCI6MywidXNlcl9pZCI6Miwic2l0ZV9pZCI6NCwicHJvY2Vzc19pZCI6MSwicm9sZUdyb3VwX2lkIjo0NX0seyJ1c2VyUm9sZV9pZCI6Mjg2LCJyb2xlX2lkIjozLCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjo0LCJwcm9jZXNzX2lkIjoyLCJyb2xlR3JvdXBfaWQiOjQ2fSx7InVzZXJSb2xlX2lkIjoyODcsInJvbGVfaWQiOjMsInVzZXJfaWQiOjIsInNpdGVfaWQiOjQsInByb2Nlc3NfaWQiOjMsInJvbGVHcm91cF9pZCI6NDd9LHsidXNlclJvbGVfaWQiOjI4OCwicm9sZV9pZCI6MywidXNlcl9pZCI6Miwic2l0ZV9pZCI6NCwicHJvY2Vzc19pZCI6NCwicm9sZUdyb3VwX2lkIjo0OH0seyJ1c2VyUm9sZV9pZCI6Mjg5LCJyb2xlX2lkIjo0LCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjoxLCJwcm9jZXNzX2lkIjoxLCJyb2xlR3JvdXBfaWQiOjQ5fSx7InVzZXJSb2xlX2lkIjoyOTAsInJvbGVfaWQiOjQsInVzZXJfaWQiOjIsInNpdGVfaWQiOjEsInByb2Nlc3NfaWQiOjIsInJvbGVHcm91cF9pZCI6NTB9LHsidXNlclJvbGVfaWQiOjI5MSwicm9sZV9pZCI6NCwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MSwicHJvY2Vzc19pZCI6Mywicm9sZUdyb3VwX2lkIjo1MX0seyJ1c2VyUm9sZV9pZCI6MjkyLCJyb2xlX2lkIjo0LCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjoxLCJwcm9jZXNzX2lkIjo0LCJyb2xlR3JvdXBfaWQiOjUyfSx7InVzZXJSb2xlX2lkIjoyOTMsInJvbGVfaWQiOjQsInVzZXJfaWQiOjIsInNpdGVfaWQiOjIsInByb2Nlc3NfaWQiOjEsInJvbGVHcm91cF9pZCI6NTN9LHsidXNlclJvbGVfaWQiOjI5NCwicm9sZV9pZCI6NCwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MiwicHJvY2Vzc19pZCI6Miwicm9sZUdyb3VwX2lkIjo1NH0seyJ1c2VyUm9sZV9pZCI6Mjk1LCJyb2xlX2lkIjo0LCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjoyLCJwcm9jZXNzX2lkIjozLCJyb2xlR3JvdXBfaWQiOjU1fSx7InVzZXJSb2xlX2lkIjoyOTYsInJvbGVfaWQiOjQsInVzZXJfaWQiOjIsInNpdGVfaWQiOjIsInByb2Nlc3NfaWQiOjQsInJvbGVHcm91cF9pZCI6NTZ9LHsidXNlclJvbGVfaWQiOjI5Nywicm9sZV9pZCI6NCwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MywicHJvY2Vzc19pZCI6MSwicm9sZUdyb3VwX2lkIjo1N30seyJ1c2VyUm9sZV9pZCI6Mjk4LCJyb2xlX2lkIjo0LCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjozLCJwcm9jZXNzX2lkIjoyLCJyb2xlR3JvdXBfaWQiOjU4fSx7InVzZXJSb2xlX2lkIjoyOTksInJvbGVfaWQiOjQsInVzZXJfaWQiOjIsInNpdGVfaWQiOjMsInByb2Nlc3NfaWQiOjMsInJvbGVHcm91cF9pZCI6NTl9LHsidXNlclJvbGVfaWQiOjMwMCwicm9sZV9pZCI6NCwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MywicHJvY2Vzc19pZCI6NCwicm9sZUdyb3VwX2lkIjo2MH0seyJ1c2VyUm9sZV9pZCI6MzAxLCJyb2xlX2lkIjo0LCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjo0LCJwcm9jZXNzX2lkIjoxLCJyb2xlR3JvdXBfaWQiOjYxfSx7InVzZXJSb2xlX2lkIjozMDIsInJvbGVfaWQiOjQsInVzZXJfaWQiOjIsInNpdGVfaWQiOjQsInByb2Nlc3NfaWQiOjIsInJvbGVHcm91cF9pZCI6NjJ9LHsidXNlclJvbGVfaWQiOjMwMywicm9sZV9pZCI6NCwidXNlcl9pZCI6Miwic2l0ZV9pZCI6NCwicHJvY2Vzc19pZCI6Mywicm9sZUdyb3VwX2lkIjo2M30seyJ1c2VyUm9sZV9pZCI6MzA0LCJyb2xlX2lkIjo0LCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjo0LCJwcm9jZXNzX2lkIjo0LCJyb2xlR3JvdXBfaWQiOjY0fSx7InVzZXJSb2xlX2lkIjozMDUsInJvbGVfaWQiOjUsInVzZXJfaWQiOjIsInNpdGVfaWQiOjEsInByb2Nlc3NfaWQiOjEsInJvbGVHcm91cF9pZCI6NjV9LHsidXNlclJvbGVfaWQiOjMwNiwicm9sZV9pZCI6NSwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MSwicHJvY2Vzc19pZCI6Miwicm9sZUdyb3VwX2lkIjo2Nn0seyJ1c2VyUm9sZV9pZCI6MzA3LCJyb2xlX2lkIjo1LCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjoxLCJwcm9jZXNzX2lkIjozLCJyb2xlR3JvdXBfaWQiOjY3fSx7InVzZXJSb2xlX2lkIjozMDgsInJvbGVfaWQiOjUsInVzZXJfaWQiOjIsInNpdGVfaWQiOjEsInByb2Nlc3NfaWQiOjQsInJvbGVHcm91cF9pZCI6Njh9LHsidXNlclJvbGVfaWQiOjMwOSwicm9sZV9pZCI6NSwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MiwicHJvY2Vzc19pZCI6MSwicm9sZUdyb3VwX2lkIjo2OX0seyJ1c2VyUm9sZV9pZCI6MzEwLCJyb2xlX2lkIjo1LCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjoyLCJwcm9jZXNzX2lkIjoyLCJyb2xlR3JvdXBfaWQiOjcwfSx7InVzZXJSb2xlX2lkIjozMTEsInJvbGVfaWQiOjUsInVzZXJfaWQiOjIsInNpdGVfaWQiOjIsInByb2Nlc3NfaWQiOjMsInJvbGVHcm91cF9pZCI6NzF9LHsidXNlclJvbGVfaWQiOjMxMiwicm9sZV9pZCI6NSwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MiwicHJvY2Vzc19pZCI6NCwicm9sZUdyb3VwX2lkIjo3Mn0seyJ1c2VyUm9sZV9pZCI6MzEzLCJyb2xlX2lkIjo1LCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjozLCJwcm9jZXNzX2lkIjoxLCJyb2xlR3JvdXBfaWQiOjczfSx7InVzZXJSb2xlX2lkIjozMTQsInJvbGVfaWQiOjUsInVzZXJfaWQiOjIsInNpdGVfaWQiOjMsInByb2Nlc3NfaWQiOjIsInJvbGVHcm91cF9pZCI6NzR9LHsidXNlclJvbGVfaWQiOjMxNSwicm9sZV9pZCI6NSwidXNlcl9pZCI6Miwic2l0ZV9pZCI6MywicHJvY2Vzc19pZCI6Mywicm9sZUdyb3VwX2lkIjo3NX0seyJ1c2VyUm9sZV9pZCI6MzE2LCJyb2xlX2lkIjo1LCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjozLCJwcm9jZXNzX2lkIjo0LCJyb2xlR3JvdXBfaWQiOjc2fSx7InVzZXJSb2xlX2lkIjozMTcsInJvbGVfaWQiOjUsInVzZXJfaWQiOjIsInNpdGVfaWQiOjQsInByb2Nlc3NfaWQiOjEsInJvbGVHcm91cF9pZCI6Nzd9LHsidXNlclJvbGVfaWQiOjMxOCwicm9sZV9pZCI6NSwidXNlcl9pZCI6Miwic2l0ZV9pZCI6NCwicHJvY2Vzc19pZCI6Miwicm9sZUdyb3VwX2lkIjo3OH0seyJ1c2VyUm9sZV9pZCI6MzE5LCJyb2xlX2lkIjo1LCJ1c2VyX2lkIjoyLCJzaXRlX2lkIjo0LCJwcm9jZXNzX2lkIjozLCJyb2xlR3JvdXBfaWQiOjc5fSx7InVzZXJSb2xlX2lkIjozMjAsInJvbGVfaWQiOjUsInVzZXJfaWQiOjIsInNpdGVfaWQiOjQsInByb2Nlc3NfaWQiOjQsInJvbGVHcm91cF9pZCI6ODB9XSwiaWF0IjoxNzE5Mzc0MzYwLCJleHAiOjE3MTk0NjA3NjB9.YbSw6D2Eskbuo0vyKvpd5ajsst7nGZol2XGinl6X2vA";
    axios
      .get(`http://localhost:1000/user/get-user-permissions/2`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPermissions(response.data.message);
        setSelectedUser(user);
        setShowPermissionsModal(true);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Couldn't fetch permissions");
      });
  };

  const closePermissionsModal = () => {
    setShowPermissionsModal(false);
    setPermissions([]);
    setSelectedUser(null);
  };

  return (
    <>
      <div className="admin-dashboard">
        <div className="main-content">
          <div className="Header_Bottom shadow-2xl bg-white ">
            <div
              className="headerBottomInner  bg-white"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="headerBottomLft" style={{ marginRight: "auto" }}>
                <div className="navItem" style={{ display: "flex", alignItems: "center" }}>
                  <i
                    className="ri-home-3-fill"
                    style={{
                      marginRight: "10px",
                      fontSize: "24px",
                      color: "#EFA035",
                    }}
                  ></i>
                  <h3
                    style={{ margin: "0", color: "#333", fontWeight: "bolder", fontSize: "1.2rem" }}
                  >
                    User Management
                  </h3>
                </div>
              </div>
              <div
                className="headerBottomRgt"
                onClick={() => {
                  navigate("/admin-add-user");
                }}
              >
                <button
                  className="themeBtn"
                  style={{
                    backgroundColor: "#EFA035",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
          <div id="body-container" className="p-2">
            {/* <h3 style={{ textAlign: "center" }}>
              <strong>Users</strong>
            </h3> */}
            <br></br>
            <hr />
            {allUsers.length === 0 ? (
              <>No Registered Users</>
            ) : (
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  backgroundColor: "#fff",
                  color: "#333",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      Sno.
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      Name
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      Email
                    </th>
                    <th
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((user) => (
                    <tr key={user.id}>
                      <td
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        {user.user_id}
                      </td>
                      <td
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        {user.name}
                      </td>
                      <td
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        {user.email}
                      </td>
                      <td
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <button
                          style={{
                            padding: "5px 10px",
                            borderRadius: "5px",
                            // border: "1px solid #EFA035",
                            backgroundColor: "green",
                            color: "white",
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                          onClick={() => openPermissionsModal(user)}
                        >
                          View Permissions
                        </button>
                        <button
                          style={{
                            padding: "5px 10px",
                            borderRadius: "5px",
                            // border: "1px solid #EFA035",
                            backgroundColor: "blue",
                            color: "white",
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                          onClick={() =>
                            navigate(`/admin-edit-user`, {
                              state: { id: user.user_id },
                            })
                          }
                        >
                          Edit
                        </button>
                        <button
                          style={{
                            padding: "5px 10px",
                            borderRadius: "5px",
                            // border: "1px solid #EFA035",
                            marginRight: "5px",
                            backgroundColor: "red",
                            color: "white",
                            cursor: "pointer",
                          }}
                          onClick={() => openConfirmation(user)}
                        >
                          Delete
                        </button>
                        <button
                          style={{
                            padding: "5px 10px",
                            borderRadius: "5px",
                            // border: "1px solid #EFA035",
                            backgroundColor: "purple",
                            color: "white",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            navigate(`/duplicate-user`, {
                              state: { id: user.user_id },
                            })
                          }
                        >
                          Duplicate
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      {showConfirmation && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            color: "#333",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)",
            zIndex: "1000",
            width: "500px", // Fixed width
            maxHeight: "70vh", // Max height to fit within viewport
            overflowY: "hidden", // Disable vertical scrolling on modal
          }}
        >
          <div style={{ overflowY: "auto", maxHeight: "calc(70vh - 100px)" }}>
            <h2
              style={{
                textAlign: "center",
                color: "#EFA035",
                marginBottom: "20px",
              }}
            >
              Confirm Deletion
            </h2>
            <p style={{ textAlign: "center" }}>
              Are you sure you want to delete {selectedUser?.name}?
            </p>
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={handleDelete}
              style={{
                padding: "10px 20px",
                borderRadius: "5px",
                border: "1px solid #EFA035",
                backgroundColor: "#EFA035",
                color: "white",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Confirm
            </button>
            <button
              onClick={closeConfirmation}
              style={{
                padding: "10px 20px",
                borderRadius: "5px",
                border: "1px solid #EFA035",
                backgroundColor: "#EFA035",
                color: "white",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showPermissionsModal && (
        <div
          style={{
            position: "fixed",
            backgroundColor: "#fff",
            color: "#333",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)",
            zIndex: "1000",
            width: "500px", // Fixed width
            maxHeight: "70vh", // Max height to fit within viewport
            overflowY: "hidden", // Disable vertical scrolling on modal
          }}
        >
          <div style={{ overflowY: "auto", maxHeight: "calc(70vh - 100px)" }}>
            <h2
              style={{
                textAlign: "center",
                color: "#EFA035",
                marginBottom: "20px",
              }}
            >
              Permissions for {selectedUser?.name}
            </h2>
            {permissions?.length > 0 ? (
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid #ddd",
                        textAlign: "center",
                        backgroundColor: "#efa035",
                      }}
                    >
                      {permissions.length > 1 ? "Permissions" : "Permission"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {permissions?.map((permission) => (
                    <tr key={permission?.id}>
                      <td
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        {permission.RoleGroup.roleGroup}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p style={{ textAlign: "center" }}>No permissions found</p>
            )}
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={closePermissionsModal}
              style={{
                padding: "10px 20px",
                borderRadius: "5px",
                border: "1px solid #EFA035",
                backgroundColor: "#EFA035",
                color: "white",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminDashboard;
