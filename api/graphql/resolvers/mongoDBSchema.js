const getUser_R = (args, context, connectorQuery) => {
    console.log("context", args)
    return connectorQuery.apply(this, [checkToken(context)]);
};
module.exports = { getUser_R }