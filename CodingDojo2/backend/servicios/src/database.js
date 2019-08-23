import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/posts-db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('DB is connected!!'))
.catch(err => console.error(err)
);
