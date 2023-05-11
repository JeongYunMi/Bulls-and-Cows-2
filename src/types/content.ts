import { ReactNode } from "react";
import { recordValue } from "./GameState";

export type boxComponentProps = {
  children: ReactNode;
  direction?: 'row' | 'column';
  justifyContent?: 'center' | 'space-between' | 'flex-start';
  alignItems?: 'center'| 'flex-start' | 'flex-start';
  width?: string;
  height?: string;
  padding?: string;
}


export type SelectedNumberProps =  {
  selectedNumber: string;
  deleteHandler?: ()=>void
  sendButtonHandler?: ()=>void
}

export type attemptsNumberProps =  {
  attemptsNumber: Number;
}

export type numberCardProps = {
  numberCardHandler: (n:Number) => void
}

export type deleteButtonProps = {
  deleteHandler: ()=>void
}

export type sendButtonProps = {
  sendHandler: ()=>void
}

export type recordTableProps = {
  recordProps: recordValue[]
}