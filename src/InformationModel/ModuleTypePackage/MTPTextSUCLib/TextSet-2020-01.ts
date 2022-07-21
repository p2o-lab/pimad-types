/** MTPFreeze 01.2020 */
import {DataItem} from '../../..';

export type TextSet = {
    ServiceInteraction: ServiceInteraction[];
    ServicePosition: ServicePosition[];
    EnumDefinition: EnumDefinition[];
};

export type ServiceInteraction = {
    Question: Question[];
};
export type Question = Text & {
    Answer: Answer[];
};
export type Answer = Text & {};

export type ServicePosition = {
    PositionText: PositionText[];
};
export type PositionText = Text & {};

export type EnumDefinition = {
    EnumItem: EnumItem[];
};
export type EnumItem = Text & {};

type Text = {
    Text: DataItem<string>;
}
