import { State } from "shared/store";

export namespace Obj {
  export type Any = { [K: string]: any };
  export type Keys<O extends Obj.Any> = (keyof O)[]
};

export namespace Func {
  export type Any = (...arg: any) => any;
  export type Empty = () => void;
  export type Typed<A extends any[], R extends any = any> = (...arg: A) => R;
};

type AbstractAction = { type: string, payload?: Obj.Any };
type AbstractAC = (...arg: any) => AbstractAction;
type AbstractSelector = Func.Typed<[State]>;

export type ActionFromNamespace<Namespace> = Namespace extends { [K: string]: infer F }
  ? F extends AbstractAC
    ? ReturnType<F>
    : never
  : never;

export type SelectorFromNamespace<Namespace> = Namespace extends { [K: string]: infer F }
  ? F extends AbstractSelector
    ? F
    : never
  : never;