import React from 'react';
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const years = [
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
];


export default function MultipleSelectPlaceholder() {
  const [yearName, setYearName] = React.useState(['2023']); // Set default selection to 2023

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setYearName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          displayEmpty
          value={yearName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Year</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Fiscal Year</em>
          </MenuItem>
          {years.map((year) => (
            <MenuItem
              key={year}
              value={year}
            //   style={getStyles(year, yearName, theme)}
            >
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
