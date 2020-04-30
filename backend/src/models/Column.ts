import mongoose, { Schema, Document, model } from 'mongoose';

interface Column extends Document {
    title: string;
    cardIds: string[];
    board: string;
}

const ColumnSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
    },
    board: {
        type: Schema.Types.ObjectId,
        ref: 'Board',
        required: true,
    },
});

export default model<Column>('Column', ColumnSchema);
