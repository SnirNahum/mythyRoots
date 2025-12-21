import { useEffect, useState } from "react";
import { httpService } from "../services/httpService";
import {
  CHARACTERS_UNIVERSE,
  RELATIONSHIPS_UNIVERSE,
} from "../utils/SavedWords";
import { useMythyRootsStore } from "../store/store";

/**
 * Custom hook to fetch universe data (characters and relationships)
 * when the current universe changes
 */
export const useUniverseData = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUniverse, setCurrentRelationships } = useMythyRootsStore();

  useEffect(() => {
    if (!currentUniverse?.id) {
      setCharacters([]);
      setCurrentRelationships([]);
      return;
    }

    let isMounted = true;
    setLoading(true);

    const fetchUniverseData = async () => {
      try {
        const [charactersRes, relationshipsRes] = await Promise.all([
          httpService.get(`${CHARACTERS_UNIVERSE}${currentUniverse.id}`),
          httpService.get(`${RELATIONSHIPS_UNIVERSE}${currentUniverse.id}`),
        ]);

        if (isMounted) {
          setCharacters(charactersRes.body || []);
          setCurrentRelationships(relationshipsRes.body || []);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching universe data:", error);
        if (isMounted) {
          setCharacters([]);
          setCurrentRelationships([]);
          setLoading(false);
        }
      }
    };

    fetchUniverseData();

    return () => {
      isMounted = false;
    };
  }, [currentUniverse?.id, setCurrentRelationships]);

  return { characters, loading };
};
