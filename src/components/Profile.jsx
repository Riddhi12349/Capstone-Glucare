import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "../firebase"; // Adjust the path based on your project structure

const ProfilePage = () => {
  const location = useLocation();
  const userProfile = location.state; // Retrieve userProfile from state

  const [glucoseValue, setGlucoseValue] = useState("");
  const [glucoseRecords, setGlucoseRecords] = useState([]);
  const [loading, setLoading] = useState(true); // To manage loading state

  // Fetch glucose records on component mount
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchGlucoseRecords(user.uid);
      } else {
        setLoading(false); // No user logged in
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch glucose records from Firestore
  const fetchGlucoseRecords = async () => {
    const user = auth.currentUser;
    if (!user) return; // If user is not logged in, exit

    try {
      const q = query(
        collection(db, "glucoseRecords"),
        where("userId", "==", user.uid),
        orderBy("timestamp", "desc")
      );

      const querySnapshot = await getDocs(q);
      const records = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setGlucoseRecords(records);
      setLoading(false); // Set loading to false after fetching
    } catch (error) {
      console.error("Error fetching glucose records:", error);
      alert("Failed to fetch records.");
      setLoading(false);
    }
  };

  // Handle adding a new glucose record
  const handleAddRecord = async () => {
    if (!glucoseValue) {
      alert("Please enter a glucose value.");
      return;
    }

    try {
      const user = auth.currentUser;

      if (!user) {
        alert("User not logged in.");
        return;
      }

      const newRecord = {
        userId: user.uid,
        glucoseValue: Number(glucoseValue),
        timestamp: new Date().toISOString(),
      };

      // Save new record to Firestore
      await addDoc(collection(db, "glucoseRecords"), newRecord);

      // After adding, refetch glucose records to update state
      // fetchGlucoseRecords();

      // Update state without refetching
      setGlucoseRecords((prevRecords) => [newRecord, ...prevRecords]);

      // Clear the input field
      setGlucoseValue("");
    } catch (error) {
      console.error("Error adding glucose record:", error);
      alert("Failed to add record. Please try again.");
    }
  };

  if (!userProfile) {
    return <p>No user data available. Please sign up first.</p>;
  }

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Profile
      </Typography>
      <Card sx={{ marginBottom: 4, padding: 2 }}>
        <CardContent>
          <Typography variant="h6">
            <strong>Name:</strong> {userProfile.name}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {userProfile.email}
          </Typography>
          <Typography variant="body1">
            <strong>Age:</strong> {userProfile.age} years
          </Typography>
          <Typography variant="body1">
            <strong>Gender:</strong> {userProfile.gender}
          </Typography>
          <Typography variant="body1">
            <strong>Weight:</strong> {userProfile.weight} kg
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="h5" gutterBottom>
        Glucose Tracker
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginBottom: 4,
        }}
      >
        <TextField
          label="Glucose Value"
          variant="outlined"
          value={glucoseValue}
          onChange={(e) => setGlucoseValue(e.target.value)}
          type="number"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddRecord}>
          Add
        </Button>
      </Box>

      <Typography variant="h6">Previous Glucose Records</Typography>

      {/* Loading state check
      {loading ? (
        <Typography>Loading records...</Typography>
      ) : ( */}
      <List>
        {glucoseRecords.length > 0 ? (
          glucoseRecords.map((record) => (
            <ListItem key={`${record.id}-${record.timestamp}`}>
              <ListItemText
                primary={`Glucose Value: ${record.glucoseValue}`}
                secondary={`Recorded on: ${new Date(
                  record.timestamp
                ).toLocaleString()}`}
              />
            </ListItem>
          ))
        ) : (
          <Typography>No records found.</Typography>
        )}
      </List>
      {/* )} */}
    </Container>
  );
};

export default ProfilePage;
