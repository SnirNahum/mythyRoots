import { create } from "zustand";

export const useMythyRootsStore = create((set) => ({
  universes: [],
  families: [],
  characters: [],
  currentUniverse: {},
  selectedFamily: {},
  selectedCharacter: {},
  currentUniverseCharacters: [],
  currentRelationships: [],
  setData: (data) => set({ ...data }),
  setAllUniverses: (newUniverses) => set({ universes: newUniverses }),
  setCurrentUniverse: (universe) => set({ currentUniverse: universe }),
  setSelectedFamily: (family) => set({ selectedFamily: family }),
  setSelectedCharacter: (character) => set({ selectedCharacter: character }),
  setUniverseCharacters: (characters) =>
    set({ currentUniverseCharacters: characters }),
  setCurrentRelationships: (universe) =>
    set({ currentRelationships: universe }),
}));

export const useModalStore = create((set) => ({
  universeModalOpen: false,
  content: null,
  openUniverseModal: (content = null) =>
    set({
      universeModalOpen: true,
      content,
    }),

  closeUniverseModal: () =>
    set({
      universeModalOpen: false,
      content: null, // reset when closing
    }),
}));
