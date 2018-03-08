module.exports = {
    development: {
        connectionString: 'mongodb://localhost:27017/budget-planner',
    },
    production: {
        connectionString: process.env.PROD_MONGODB,
    }
};