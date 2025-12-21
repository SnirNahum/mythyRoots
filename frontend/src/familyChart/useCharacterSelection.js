import { useEffect } from "react";

/**
 * Custom hook to handle character selection and highlighting in the chart
 */
export const useCharacterSelection = (selectedCharacter, chartRef) => {
  useEffect(() => {
    if (selectedCharacter) {
      chartRef.current
        .clearHighlighting()
        .setCentered(selectedCharacter)
        .setHighlighted(selectedCharacter)
        .render();
    }
    if (selectedCharacter === "") {
      chartRef.current.clearHighlighting().render();
    }
  }, [selectedCharacter, chartRef]);
};
