import app from './src/server';
import dotenv from 'dotenv';

// load env variables
dotenv.config({ path: './config/config.env' });

// connect db

// start the app
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`App started on port ${app.get('port')}`);
});
