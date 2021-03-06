import { Schema, Document, model } from 'mongoose';

interface Board extends Document {
    title: string;
    color: string;
    favorite: boolean;
    columnIds: string[];
    // user: string;
}

const BoardSchema = new Schema<Board>(
    {
        title: {
            type: String,
            required: [true, 'Please add a title'],
            unique: true,
            trim: true,
        },
        color: {
            type: String,
            required: [true, 'please add a color'],
        },
        favorite: Boolean,
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
);

// populate
BoardSchema.virtual('columns', {
    ref: 'Column',
    localField: '_id',
    foreignField: 'board',
    justOne: false,
});

export default model<Board>('Board', BoardSchema);
