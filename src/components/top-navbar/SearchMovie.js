import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { MOVIE_API_BASE_URI } from "../../constant";
import { useHistory } from "react-router-dom";

const SearchMovies = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const history = useHistory();

  const handleChange = (value) => {
    setSelectedValue(value);

    if (value) {
      history.push(`/movies/${value.slug}`);
    }
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
    <AsyncSelect
      value={selectedValue}
      getOptionLabel={(e) => e.title}
      getOptionValue={(e) => e.slug}
      loadOptions={loadOptions}
      onChange={handleChange}
      isClearable
      placeholder="Search Movie"
      noOptionsMessage={() => "No movies found"}
    />
  );
};

export default SearchMovies;
