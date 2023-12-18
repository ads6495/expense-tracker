interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: 'expense' | 'income';
  }[];
}

export const data: Data = {
  report: [
    {
      id: '1',
      source: 'youtube',
      amount: 200,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'income',
    },
    {
      id: '2',
      source: 'twitch',
      amount: 100,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'income',
    },
  ],
};

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}
