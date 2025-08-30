import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const CharactersDropdown = ({ characters, selectedCharacter }) => {
  const handleChange = (event, newValue, reason) => {
    if (reason === "clear") selectedCharacter("");
    if (newValue) selectedCharacter(newValue.id);
  };
  const sortedCharacters = [...characters].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return (
    <>
      <Autocomplete
        className="characters-dropdown"
        options={sortedCharacters}
        getOptionLabel={(character) => character.name}
        sx={{ width: 300 }}
        onChange={(event, newValue, reason) =>
          handleChange(event, newValue, reason)
        }
        renderInput={(params) => (
          <TextField {...params} label="Search by character" />
        )}
        renderOption={(props, character) => (
          <li {...props} key={character.id}>
            <span>{character.name}</span>
          </li>
        )}
      />
    </>
  );
};
