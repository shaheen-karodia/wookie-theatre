import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { MOVIE_API_BASE_URI } from "../../constant";
function SearchMovies() {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const loadOptions = async (inputValue) => {
    const response = await axios({
      url: `${MOVIE_API_BASE_URI}?q=${inputValue}`,
      method: "get",
      headers: {
        Authorization: `Bearer Wookie2019`,
      },
    });
    return response.data.movies;
  };

  return (
    <div className="search-movies">
      <AsyncSelect
        value={selectedValue}
        getOptionLabel={(e) => e.title}
        getOptionValue={(e) => e.slug}
        loadOptions={loadOptions}
        onChange={handleChange}
        placeholder="Search Movie"
        noOptionsMessage={() => "No movies found"}
      />
    </div>
  );
}

export default SearchMovies;
