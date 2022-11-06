import React from "react";
import { signupBirthDate } from "../../data";
import { Box, Typography, TextField, Select, FormControl, InputLabel, MenuItem } from "@mui/material";

let isCompleted = {name: "", email: "", month: "", day: "", year: ""};

const SignupStep1 = ({ setIsEnableNextBtn, setCreds, creds }) => {
    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
    const handleChange = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value});
        switch(e.target.name) {
            case "name":
                isCompleted.name = e.target.value;
                break;
            case "email":
                isCompleted.email = e.target.value;
                break;
            case "month":
                isCompleted.month = e.target.value;
                break;
            case "day":
                isCompleted.day = e.target.value;
                break;
            case "year":
                isCompleted.year = e.target.value;
                break;
            default:
                break;
        }
        if(validateEmail(isCompleted.email) && isCompleted.name !== "" && isCompleted.email !== "" && isCompleted.month !== "" && isCompleted.day !== "" && isCompleted.year !== "") {
            setIsEnableNextBtn(false);
        } else {
            setIsEnableNextBtn(true);
        }
    }
    
    return (
        <React.Fragment>
            <form>
                <TextField sx={{
                        mt: 1,
                        mb: 1
                    }}
                    type="text" 
                    label="Name" 
                    name="name"
                    value={creds.name}
                    onChange={handleChange} 
                    fullWidth />
                <TextField sx={{
                        mt: 1,
                        mb: 1
                    }}
                    type="text" 
                    label="Email" 
                    name="email" 
                    value={creds.email}
                    onChange={handleChange} 
                    fullWidth />
                <Typography sx={{
                        "&:hover": {
                            textDecoration: "underline"
                        },
                        cursor: "pointer",
                        color: "#38A7F2",
                        display: "flex",
                        justifyContent: "flex-end"
                    }}
                    variant="body2">Use phone instead</Typography>
                <Typography sx={{
                        fontSize: ".95em",
                        fontWeight: 600
                    }}
                    variant="body1">Date of birth</Typography>
                <Typography sx={{
                        fontSize: ".8em",
                        color: "#536471"
                    }}
                    variant="body2">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</Typography>
                <Box sx={{
                    minWidth: 120,
                    padding: "20px 0",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    {signupBirthDate.map((bDate, index) => 
                        <FormControl sx={bDate.name === "day" ? {margin: "0 10px" } : null} key={index} fullWidth>
                            <InputLabel id={`${bDate.name}_label`}>{bDate.label}</InputLabel>
                            <Select 
                                labelId="month_label"
                                id={bDate.name}
                                value={
                                    bDate.name === "month" ? creds.month :
                                    bDate.name === "day" ? creds.day :
                                    bDate.name === "year" ? creds.year : null                 
                                }
                                defaultValue=""
                                label="Month"
                                name={bDate.name}
                                onChange={handleChange} 
                            >
                                {bDate.list.map((bList, indx) => <MenuItem value={bList} key={indx}>{bList}</MenuItem>)}
                            </Select>
                        </FormControl>
                    )}
                </Box>
            </form>
        </React.Fragment>
    );
}

export default SignupStep1;