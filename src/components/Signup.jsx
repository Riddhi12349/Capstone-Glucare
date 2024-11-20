import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    age: "",
    weight: "",
    gender: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const { name, email, age, weight, gender, password } = userProfile;

    if (!name || !email || !age || !weight || !gender || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Set the user profile and navigate to ProfilePage
      setUserProfile((prev) => ({ ...prev, uid: res.user.uid }));
      alert("Sign-Up Successful.");
      navigate("/myprofile", { state: userProfile });
    } catch (err) {
      console.error("Sign-Up Error:", err);
      alert("Sign-Up Failed.");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={userProfile.name}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={userProfile.email}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Age"
          name="age"
          type="number"
          value={userProfile.age}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Weight (kg)"
          name="weight"
          type="number"
          value={userProfile.weight}
          onChange={handleInputChange}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            name="gender"
            value={userProfile.gender}
            onChange={handleInputChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Password"
          name="password"
          type="password"
          value={userProfile.password}
          onChange={handleInputChange}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignupSubmit}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default SignUpPage;
