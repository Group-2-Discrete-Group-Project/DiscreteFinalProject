export enum FuzzySet {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High'
}

export interface SimulationState {
  temperature: number; // 10 to 40
  occupancy: number; // 0 to 20
  fanSpeed: number; // 0 to 100
}

export interface RuleResult {
  ruleName: string;
  firingStrength: number;
  outputSet: FuzzySet;
}

export interface FuzzyInput {
  value: number;
  memberships: { [key in FuzzySet]: number };
}