const getUser_R = (args, context, connectorQuery) => {
    console.log("zzzz",connectorQuery.apply(this, [args]));
    
    return connectorQuery.apply(this, [args]);
};
module.exports = { getUser_R }