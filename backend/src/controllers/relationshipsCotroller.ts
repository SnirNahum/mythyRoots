import pool from "../db";
import {
  GET_ACTIVE_CHARACTER_INCOMING_RELATIONS,
  GET_ACTIVE_CHARACTER_OUTGOING_RELATIONS,
} from "../db/queries/characterQueries";

interface Relationship {
  source_id: string;
  name: string;
  title: string;
  bio: string;
  relationship_type: string;
  parentId: [string, string] | null;
}

interface Character {
  id: string;
  universe_id: string;
  family_id: string;
  name: string;
  bio: string;
  dob: string;
  dod: string | null;
  image_url: string | null;
  status: number;
  created_at: string;
  updated_at: string;
  outgoingRelations: Relationship[];
  incomingRelations: Relationship[];
  chartNode?: ChartNode;
}

interface ChartNode {
  id: string;
  name: string;
  title: string;
  parentId?: string;
}

export async function get_incoming_relationships(characters: Character[]) {
  for (let i = 0; i < characters.length; i++) {
    const incoming_res = await pool.query<Relationship>(
      GET_ACTIVE_CHARACTER_INCOMING_RELATIONS,
      [characters[i].id]
    );
    characters[i].incomingRelations = incoming_res.rows;
  }

  return characters;
}

export async function get_outgoing_relationships(characters: Character[]) {
  for (let i = 0; i < characters.length; i++) {
    const outgoing_res = await pool.query<Relationship>(
      GET_ACTIVE_CHARACTER_OUTGOING_RELATIONS,
      [characters[i].id]
    );
    characters[i].outgoingRelations = outgoing_res.rows;
  }

  return characters;
}

export async function restructure_data_chart(characters: Character[]) {
  const data_chart: ChartNode[] = [];

  for (let i = 0; i < characters.length; i++) {
    const incoming = characters[i].incomingRelations?.[0];

    const chartNode: ChartNode = {
      id: characters[i].id,
      name: characters[i].name,
      title: characters[i].bio,
    };
    if (incoming) {
      chartNode["parentId"] = incoming?.source_id;
    }

    characters[i].chartNode = chartNode;
    data_chart.push(chartNode);
  }

  return data_chart;
}
