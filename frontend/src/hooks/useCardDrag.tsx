import { DropResult } from 'react-beautiful-dnd';

import { IColumn } from '../data/types/Column';

export const useCardDrag = () => {
    // new column
    const dragInSameColumn = (column: IColumn, result: DropResult) => {
        const { source, destination, draggableId } = result;

        if (destination) {
            // new cardIds
            if (column) {
                const newCardIds = Array.from(column.cardIds);
                newCardIds.splice(source.index, 1);
                newCardIds.splice(destination.index, 0, draggableId);

                const newColumn: IColumn = {
                    ...column,
                    cardIds: newCardIds,
                };

                return newColumn;
            }
        }
    };

    const dragInDifferentColumns = (columns: IColumn[], result: DropResult) => {
        const { source, destination, draggableId } = result;

        if (destination) {
            // find source and destination
            const sourceCol = columns.find(
                (column) => column.id === source.droppableId,
            );
            const destinationCol = columns.find(
                (column) => column.id === destination.droppableId,
            );

            if (sourceCol && destinationCol) {
                // new source column cards
                const sourceCards = Array.from(sourceCol.cardIds);
                sourceCards.splice(source.index, 1);

                // new destination column cards
                const destinationCards = Array.from(destinationCol.cardIds);
                destinationCards.splice(destination.index, 0, draggableId);

                const newSourceCol: IColumn = {
                    ...sourceCol,
                    cardIds: sourceCards,
                };
                const newDestinationCol: IColumn = {
                    ...destinationCol,
                    cardIds: destinationCards,
                };

                return [newSourceCol, newDestinationCol];
            }
        }
    };

    return { dragInSameColumn, dragInDifferentColumns };
};
