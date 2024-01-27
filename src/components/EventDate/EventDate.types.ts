export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
