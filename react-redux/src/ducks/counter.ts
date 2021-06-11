import { Reducer } from 'redux';

// アクションの種類を定義する。
// 実際にStateを書き換えるのはreducerの役割なので、あくまでも現状のStateに対し、
// どういうアクション（変化）が与えられるのか？の情報を返してあげるのが役目。
// 例えば、加算される数値や入力フォームの文字列、セレクトボックスの選択など。
const CounterActionType = {
  ADD: 'counter/add',
  DECREMENT: 'counter/dec',
  INCREMENT: 'counter/inc',
} as const;

type ValueOf<T> = T[keyof T];

type CounterAction = {
  type: ValueOf<typeof CounterActionType>;
  amount?: number;
};

// 「追加」のアクションと、その増分の数値が与えられる。
export const add = (amount: number): CounterAction => ({
  type: CounterActionType.ADD,
  amount,
});

// 「減算」のアクションが与えれれる。
export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT,
});

// 「加算」のアクションが与えられる。
export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
});

export type CounterState = { count: number };
export const initialState: CounterState = { count: 0 };

// Reducerは、「現在のState」と「アクション」を受け取って、アクションの種類と渡されたデータに応じて、
// 「新しいState」を返す関数。
//
// 別関数（index.tsxなど）にて、storeの生成とreducerの結び付きを登録しておく必要がある。
export const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState, // デフォルト値で初期値を設定する。
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case CounterActionType.ADD:
      return {
        ...state, // 前回のStateは丸っとコピーし、差分だけ更新してあげる。
        count: state.count + (action.amount || 0),
      };
    case CounterActionType.DECREMENT:
      return {
        ...state, // 前回のStateは丸っとコピーし、差分だけ更新してあげる。
        count: state.count - 1,
      };
    case CounterActionType.INCREMENT:
      return {
        ...state, // 前回のStateは丸っとコピーし、差分だけ更新してあげる。
        count: state.count + 1,
      };
    default: {
      const _: never = action.type;

      return state; // 今回はnever型で処理エラーにしているが、デフォルトは「現状のState」をそのまま返す。
    }
  }
};
