import app from './src/server';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// load env variables
dotenv.config({ path: './config/config.env' });

// connect db
mongoose.connect(process.env.LOCAL_DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('DB connected');
});

// start the app
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`App started on port ${app.get('port')}`);
});
